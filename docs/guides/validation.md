---
last_modified_on: "2020-12-18"
id: validation
title: "Testing and validation"
---

To properly test how your model performs on a dataset it's never seen before, the process includes: 
1. Munge and train your first dataset. That will be your "reference" model
2. Use the outputs of step 1's munge for your reference model to harmonize your incoming validation dataset
3. Run through the harmonization step with your validation dataset
4. Run through munging with your newly harmonized dataset
5. Retrain your reference model with only the matching columns of your unseen data. Given the nature of ML algorithms, you cannot test a model on a set of data that does not have identical features
6. Test your newly retrained reference model on the unseen data

:::info
If you are using an external validation dataset, Steps 1-4 are performed as part of the [harmonization](/docs/guides/hamonization) process. Steps 5-6 are described next. 
:::

After munging and training your reference model and harmonizing and munging your unseen test data, **you will retrain your reference model to include only matching features**. Given ML algorithms' nature, you cannot test a model on a set of data that does not have identical features. 

To retrain your model appropriately, after munging your test data with the `--ref_cols_harmonize ` flag, a final columns list will be generated at `*.finalHarmonizedCols_toKeep.txt`. This includes all the features that match between your unseen test data and your reference model. Use the `--matching_columns` flag when retraining your reference model to use the appropriate features.

When retraining of the reference model is complete, you are ready to test!

A step-by-step guide on how to achieve this is listed below:
```shell
# 0. MUNGE THE REFERENCE DATASET
genoml discrete supervised munge \
--prefix outputs/test_discrete_geno \
--geno examples/discrete/training \
--pheno examples/discrete/training_pheno.csv
# Files made: 
    # outputs/test_discrete_geno.dataForML.h5
    # outputs/test_discrete_geno.list_features.txt
    # outputs/test_discrete_geno.variants_and_alleles.tab

# 1. TRAIN THE REFERENCE DATASET
genoml discrete supervised train \
--prefix outputs/test_discrete_geno
# Files made: 
    # outputs/test_discrete_geno.best_algorithm.txt
    # outputs/test_discrete_geno.trainedModel.joblib
    # outputs/test_discrete_geno.trainedModel_trainingSample_Predictions.csv
    # outputs/test_discrete_geno.trainedModel_withheldSample_Predictions.csv
    # outputs/test_discrete_geno.trainedModel_withheldSample_ROC.png
    # outputs/test_discrete_geno.trainedModel_withheldSample_probabilities.png
    # outputs/test_discrete_geno.training_withheldSamples_performanceMetrics.csv

# 2. HARMONIZE TEST DATASET IF USING PLINK/GENOTYPES
genoml harmonize \
--test_geno_prefix examples/discrete/validation \
--test_prefix outputs/validation_test_discrete_geno \
--ref_model_prefix outputs/test_discrete_geno \
--training_snps_alleles outputs/test_discrete_geno.variants_and_alleles.tab
# Files made: 
    # outputs/validation_test_discrete_geno.refColsHarmonize_toKeep.txt
    # outputs/validation_test_discrete_geno.refSNPs_andAlleles.bed
    # outputs/validation_test_discrete_geno.refSNPs_andAlleles.bim
    # outputs/validation_test_discrete_geno.refSNPs_andAlleles.fam

# 3. MUNGE THE TEST DATASET ON REFERENCE MODEL COLUMNS
genoml discrete supervised munge \
--prefix outputs/validation_test_discrete_geno \
--geno outputs/validation_test_discrete_geno.refSNPs_andAlleles \
--pheno examples/discrete/validation_pheno.csv \
--addit examples/discrete/validation_addit.csv \
--ref_cols_harmonize outputs/validation_test_discrete_geno.refColsHarmonize_toKeep.txt
# Files made: 
    # outputs/validation_test_discrete_geno.finalHarmonizedCols_toKeep.txt
    # outputs/validation_test_discrete_geno.list_features.txt
    # outputs/test_discrete_geno.variants_and_alleles.tab
    # outputs/validation_test_discrete_geno.dataForML.h5

# 4. RETRAIN REFERENCE MODEL ON INTERSECTING COLUMNS BETWEEN REFERENCE AND TEST
genoml discrete supervised train \
--prefix outputs/test_discrete_geno \
--matching_columns outputs/validation_test_discrete_geno.finalHarmonizedCols_toKeep.txt
# Note: This replaces the trained model you made in step 1! 
# Files made: 
    # outputs/test_discrete_geno.best_algorithm.txt
    # outputs/test_discrete_geno.trainedModel.joblib
    # outputs/test_discrete_geno.trainedModel_trainingSample_Predictions.csv
    # outputs/test_discrete_geno.trainedModel_withheldSample_Predictions.csv
    # outputs/test_discrete_geno.trainedModel_withheldSample_ROC.png
    # outputs/test_discrete_geno.trainedModel_withheldSample_probabilities.png
    # outputs/test_discrete_geno.training_withheldSamples_performanceMetrics.csv


# 5. TEST RETRAINED REFERENCE MODEL ON UNSEEN DATA
genoml discrete supervised test \
--prefix outputs/validation_test_discrete_geno \
--test_prefix outputs/validation_test_discrete_geno \
--ref_model_prefix outputs/test_discrete_geno.trainedModel
# Files made: 
    # outputs/validation_test_discrete_geno.testedModel_allSample_predictions.csv
    # outputs/validation_test_discrete_geno.testedModel_allSample_probabilities.png
    # outputs/validation_test_discrete_geno.testedModel_allSample_ROC.png
    # outputs/validation_test_discrete_geno.testedModel_allSamples_performanceMetrics.csv
```

:::caution 
When munging the test dataset on the reference model columns using the `--ref_cols_harmonize`, be sure not to include the `--feature_selection` flag, as you have already specified the columns to keep moving forward.
:::

<a id="5"></a>