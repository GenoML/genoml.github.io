---
last_modified_on: "2021-03-05"
id: outcome-prediction
title: "Outcome prediction"
---

:::note
This section is under development.
:::

One of the commonly used use cases of GenoML is outcome prediction. Outcome prediction is paramount to personalized medicine, which promises individualized disease prediction and treatment. The convergence of machine learning (ML) and available multi-modal data is key moving forward. 

Here is an example for developing a model that predicts a binary outcome and showcases how simple it is to get started with GenoML! 

The binary outcome for this example is if a person is a positive Parkinson's disease case vs. if they are a healthy control. 

The workflow we will be following are these three steps:

0. Installing GenoML 
1. **Munging:** Where we clean, normalize, and standardize the input data 
2. **Training:** Where we split the data 70:30 (training:testing), compete a dozen algorithms and nominate the best model
3. **Tuning:** Where we use the entire dataset to tune hyperparameters and cross-validate to improve accuracy 

## 0. Installing GenoML 
Install the newest version of GenoML that's available on pip
```bash
pip install genoml2 --upgrade
```


## 1. Munging
Where we clean, normalize, and standardize the input data.
Munging with GenoML will, at minimum, do the following:

* Prune your genotypes using PLINK v1.9 (if `--geno` flag is used)
* Impute per column using median or mean (can be changed with the `--impute` flag)
* Z-scaling of features and removing columns with a std dev = 0 (no variation means that feature won't contribute)
* Required arguments for GenoML munging are `--prefix` and `--pheno`

```bash
genoml discrete supervised munge \
--prefix outputs/test_discrete_geno \
--geno examples/discrete/training \
--pheno examples/discrete/training_pheno.csv
```

The following files are made:
- `outputs/test_discrete_geno.dataForML.h5`
- `outputs/test_discrete_geno.list_features.txt`
- `outputs/test_discrete_geno.variants_and_alleles.tab`

## 2. Training 
Training with GenoML competes several different algorithms and outputs the best algorithm based on a specific metric that can be tweaked using the `--metric_max` flag *(default is `AUC`; other options include `Balanced_Accuracy`, `Sensitivity`, and `Specificity`)*

```bash
genoml discrete supervised train \
--prefix outputs/test_discrete_geno
```

The following files are made:
- `outputs/test_discrete_geno.best_algorithm.txt`
- `outputs/test_discrete_geno.trainedModel.joblib`
- `outputs/test_discrete_geno.trainedModel_trainingSample_Predictions.csv`
- `outputs/test_discrete_geno.trainedModel_withheldSample_Predictions.csv`
- `outputs/test_discrete_geno.trainedModel_withheldSample_ROC.png`
- `outputs/test_discrete_geno.trainedModel_withheldSample_probabilities.png`
- `outputs/test_discrete_geno.training_withheldSamples_performanceMetrics.csv`


## 3. Tuning 
If you are interested in changing the number of iterations the tuning process goes through by modifying `--max_tune` *(default is 50)*, or the number of cross-validations by modifying `--n_cv` *(default is 5)*

```bash
genoml discrete supervised tune \
--prefix outputs/test_discrete_geno
```

The following files are made: 
- `outputs/test_discrete_geno.tunedModel_CV_Summary.csv` 
- `outputs/test_discrete_geno.tunedModel_allSample_Predictions.csv`
- `outputs/test_discrete_geno.tunedModel_allSample_probabilities.png` 
- `outputs/test_discrete_geno.tunedModel_top10Iterations_Summary.csv`

# Done! 
You've now cleaned your data, competed trained output against 12 algorithms, determined the best model, and tuned this model! A quick explanation of some of the files: 
- `*training_withheldSamples_performanceMetrics.csv` has the performance metrics for each of the 12 models (like AUC, balanced accuracy)
- `*.trainedModel_withheldSample_ROC.png` has a ROC curve figure of your best trained model 
- `*.trainedModel_withheldSample_probabilities.png` visual representation of how well the model predicted the classes 
- `*.trainedModel_withheldSample_Predictions.csv` has the predictions of how your model classified individuals (did they become a case or control?)
- `*.tunedModel_CV_Summary.csv` summary of the gains made when tuning was ran, how it improved the model

### So... where is my model?
The models are saved as a `*.joblib` file, and can be used for transfer learning purposes.
