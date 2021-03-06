---
last_modified_on: "2021-02-02"
id: harmonization
title: "Data harmonization"
---

:::info
This step is necessary for [testing and validation](/docs/guides/validation) with an external dataset. You can skip this step if you don't have an external validation dataset. 
:::

To properly test how your model performs on a dataset it's never seen before (but you start with different PLINK binaries), we have created the harmonization step that will:
1. Keep only the same SNPs between your reference dataset and the dataset you are using for validation
2. Force the reference alleles in the validation dataset to match your reference dataset
3. Export a `.txt` file with the column names from your reference dataset to later use in the munging of your validation dataset 

Using GenoML for both your reference dataset and then your validation dataset, the process will look like the following: 

1. Munge and train your first dataset. That will be your "reference" model
2. Use the outputs of step 1's munge for your reference model to harmonize your incoming validation dataset
3. Run through the harmonization step with your validation dataset
4. Run through munging with your newly harmonized dataset
5. Retrain your reference model with only the matching columns of your unseen data. Given the nature of ML algorithms, you cannot test a model on a set of data that does not have identical features
6. Test your newly retrained reference model on the unseen data

:::info
If you are using an external validation dataset, Steps 1-4 are performed here as part of the harmonization process. Steps 5-6 are performed as part of the [testing and validation](/docs/guides/validation) process. 
:::

### Harmonizing your Validation/Test Dataset 

**Required** arguments for harmonizing with GenoML are the following: 
- `--test_geno_prefix` : What is the prefix of your validation dataset PLINK binaries?
- `--test_prefix`: What do you want the output to be named?
- `--ref_model_prefix`:  What is the name of the previously GenoML-munged dataset you would like to use as your reference dataset? (Without the `.dataForML.h5` suffix)
- `--training_snps_alleles` : What are the SNPs and alleles you would like to use? (This is generated at the end of your previously-GenoML munged dataset with the suffix `variants_and_alleles.tab`)

To harmonize your incoming validation dataset to match the SNPs and alleles to your reference dataset, the command would look like the following:

```shell
# Running GenoML harmonize

genoml harmonize \
--test_geno_prefix examples/discrete/validation \
--test_prefix outputs/validation_test_discrete_geno \
--ref_model_prefix outputs/test_discrete_geno \
--training_snps_alleles outputs/test_discrete_geno.variants_and_alleles.tab
```

This step will generate: 
- a `*_refColsHarmonize_toKeep.txt` file of columns to keep for the next step 
- `*_refSNPs_andAlleles.*` PLINK binary files (.bed, .bim, and .fam) that have the SNPs and alleles match your reference dataset

Now that you have harmonized your validation dataset to your reference dataset, you can now munge using a command similar to the following:
```shell
# Running GenoML munge after GenoML harmonize

genoml discrete supervised munge --prefix outputs/validation_test_discrete_geno \
--geno outputs/validation_test_discrete_geno_refSNPs_andAlleles \
--pheno examples/discrete/validation_pheno.csv \
--addit examples/discrete/validation_addit.csv \
--ref_cols_harmonize outputs/validation_test_discrete_geno_refColsHarmonize_toKeep.txt
```
All munging options discussed above are available at this step; the only difference here is you will add the `--ref_cols_harmonize` flag to include the `*.refColsHarmonize_toKeep.txt` file generated at the end of harmonizing only to keep the same columns that the reference dataset had. 