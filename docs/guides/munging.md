---
last_modified_on: "2020-12-18"
id: munging
title: "Data munging"
---


Munging with GenoML will, at a minimum, do the following: 
- Prune your genotypes using PLINK v1.9 (if `--geno` flag is used)
- Impute per column using median or mean (can be changed with the `--impute` flag)
- Z-scaling of features and removing columns with an std dev = 0 

**Required** arguments for GenoML munging are `--prefix` and `--pheno` 
- `data` : Is the data `continuous` or `discrete`?
- `method`: Do you want to use `supervised` or `unsupervised` machine learning? *(unsupervised currently under development)*
- `mode`:  would you like to `munge`, `train`, `tune`, or `test` your model?
- `--prefix` : Where would you like your outputs to be saved?
- `--pheno` : Where is your phenotype file? This file only has two columns, ID in one, and PHENO in the other (0 for controls and 1 for cases)


Be sure to have your files formatted the same as the examples, key points being: 
- **0=controls and 1=case** in your phenotype file
- Your phenotype file consisting **only** of the "ID" and "PHENO" columns
- Your sample IDs matching across all files
- Your sample IDs not consisting of only integers (add a prefix or suffix to all sample IDs ensuring they are alphanumeric if this is the case before running GenoML)
- Please avoid the use of characters like commas, semi-colons, etc. in the column headers (it is Python after all!)  

:::info
The following examples are for discrete data, but if you substitute the following commands with `continuous` instead of discrete, you can preprocess your continuous data!
:::

If you would like to munge just with genotypes (in PLINK binary format), the most straightforward command is the following: 
```shell
# Running GenoML munging on discrete data using PLINK genotype binary files and a phenotype file 

genoml discrete supervised munge \
--prefix outputs/test_discrete_geno \
--geno examples/discrete/training \
--pheno examples/discrete/training_pheno.csv
```

You can choose to skip pruning your SNPs at this stage by changing the `--skip_prune` flag to "yes" (default is "no")
```shell
# Running GenoML munging on discrete data using PLINK genotype binary files and a phenotype file 

genoml discrete supervised munge \
--prefix outputs/test_discrete_geno \
--geno examples/discrete/training \
--skip_prune yes \
--pheno examples/discrete/training_pheno.csv
```

You can choose to impute on `mean` or `median` by modifying the `--impute` flag, like so *(default is median)*:
```shell
# Running GenoML munging on discrete data using PLINK genotype binary files and a phenotype file and specifying impute

genoml discrete supervised munge \
--prefix outputs/test_discrete_geno \
--geno examples/discrete/training \
--pheno examples/discrete/training_pheno.csv \
--impute mean
```

If you suspect collinear variables and think this will be a problem for training the model moving forward, you can use [variance inflation factor](https://www.investopedia.com/terms/v/variance-inflation-factor.asp) (VIF) filtering: 
```shell
# Running GenoML munging on discrete data using PLINK genotype binary files and a phenotype file while using VIF to remove multicollinearity 

genoml discrete supervised munge \
--prefix outputs/test_discrete_geno \
--geno examples/discrete/training \
--pheno examples/discrete/training_pheno.csv \
--vif 5 \
--iter 1
```

- The `--vif` flag specifies the VIF threshold you would like to use (5 is recommended) 
- The number of iterations you'd like to run can be modified with the `--iter` flag (if you have or anticipate many collinear variables, it's a good idea to increase the iterations)

Well, what if you had GWAS summary statistics handy, and would like to use the same SNPs outlined in that file? You can do so by running the following:
```shell
# Running GenoML munging on discrete data using PLINK genotype binary files, a phenotype file, and a GWAS summary statistics file 

genoml discrete supervised munge \
--prefix outputs/test_discrete_geno \
--geno examples/discrete/training \
--pheno examples/discrete/training_pheno.csv \
--gwas examples/discrete/example_GWAS.csv
```

:::info 
When using the GWAS flag, the PLINK binaries will be pruned to include matching SNPs to the GWAS file. 
:::

...and if you wanted to add a p-value cut-off...
```shell
# Running GenoML munging on discrete data using PLINK genotype binary files, a phenotype file, and a GWAS summary statistics file with a p-value cut-off 

genoml discrete supervised munge \
--prefix outputs/test_discrete_geno \
--geno examples/discrete/training \
--pheno examples/discrete/training_pheno.csv \
--gwas examples/discrete/example_GWAS.csv \
--p 0.01
```
Do you have additional data you would like to incorporate? Perhaps clinical, demographic, or transcriptomics data? If coded and all numerical, these can be added as an `--addit` file by doing the following: 
```shell
# Running GenoML munging on discrete data using PLINK genotype binary files, a phenotype file, and an addit file

genoml discrete supervised munge \
--prefix outputs/test_discrete_geno \
--geno examples/discrete/training \
--pheno examples/discrete/training_pheno.csv \
--addit examples/discrete/training_addit.csv
```
You also have the option of not using PLINK binary files if you would like to preprocess (and then, later train) on a phenotype and addit file by doing the following:
```shell
# Running GenoML munging on discrete data using PLINK genotype binary files, a phenotype file, and an addit file

genoml discrete supervised munge \
--prefix outputs/test_discrete_geno \
--pheno examples/discrete/training_pheno.csv \
--addit examples/discrete/training_addit.csv
```

Are you interested in selecting and ranking your features? If so, you can use the `--feature_selection` flag and specify like so...:
```shell
# Running GenoML munging on discrete data using PLINK genotype binary files, a phenotype file, and running feature selection 

genoml discrete supervised munge \
--prefix outputs/test_discrete_geno \
--geno examples/discrete/training \
--pheno examples/discrete/training_pheno.csv \
--addit examples/discrete/training_addit.csv \
--feature_selection 50
```
The `--feature_selection` flag uses extraTrees ([classifier](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.ExtraTreesClassifier.html) for discrete data; [regressor](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.ExtraTreesRegressor.html) for continuous data) to output a `*.approx_feature_importance.txt` file with the features most contributing to your model at the top. 

:::info
The following examples are for adjusting your data (if you have principal components or other data you'd like to adjust particular columns with).
:::

Do you have additional covariates and confounders you would like to adjust for in the munging step prior to training your model and/or would like to reduce your data? This can be anything from correcting gene expression data for study site and batch to correcting a genome-wide set of SNPs for population stratification.

To adjust, use the `--adjust_data` flag with the following necessary flags: 
- `--adjust_normalize`: Would you like to normalize your final adjusted data? (Default: yes)
- `--target_features`: A .txt file, one column, with a list of features to adjust (no header). These should correspond to features in the munged dataset
- `--confounders`: A .csv of confounders to adjust for with ID column and header. Numeric, with no missing data, and the ID column is mandatory (this can be PCs, for example)

To reduce your data prior to adjusting, use the `--umap_reduce yes` flag. This flag will also prompt you whether you want to adjust your data, normalize, and what your target features and confounders might be. We use the [Uniform Manifold Approximation and Projection for Dimension Reduction](https://umap-learn.readthedocs.io/en/latest/) (UMAP) to reduce your data into 2D, adjust, and exports a plot and an adjusted dataframe moving forward. This can be done by running the following: 

```shell
# Running GenoML munging on discreate data using PLINK binary files, a phenotype file, using UMAP to reduce dimensions and account for features, and running feature selection

genoml discrete supervised munge \
--prefix outputs/test_discrete_geno \
--geno examples/discrete/training \
--pheno examples/discrete/training_pheno.csv \
--addit examples/discrete/training_addit.csv \
--umap_reduce yes \
--adjust_data yes \
--adjust_normalize yes \
--target_features examples/discrete/to_adjust.txt \
--confounders examples/discrete/training_addit_confounder_example.csv \
--feature_selection 50 
```
Here, the `--confounders` flag takes in a dataset of features that should be accounted for. This is a .csv file with the ID column and header included and is numeric with no missing data. **The ID column is mandatory.** The `--target_features` flag takes in a .txt with a list of features (column names) you are adjusting for.

<a id="2"></a>
