---
last_modified_on: "2020-12-18"
id: training
title: "Model training"
---

Training with GenoML evaluates several different algorithms and outputs the best algorithm based on a specific metric that can be tweaked using the `--metric_max` flag *(default is AUC)*.

**Required** arguments for GenoML are the following: 
- `data` : Is the data `continuous` or `discrete`?
- `method`: Do you want to use `supervised` or `unsupervised` machine learning? *(unsupervised currently under development)*
- `mode`:  would you like to `munge`, `train`, `tune`, or `test` your model?
- `--prefix` : Where would you like your outputs to be saved?

The most basic command to train your model looks like the following; it looks for the `*.dataForML` file that was generated in the munging step: 
```shell
# Running GenoML supervised training after munging on discrete data

genoml discrete supervised train \
--prefix outputs/test_discrete_geno
```

If you would like to determine the best competing algorithm by something other than the AUC, you can do so by changing the `--metric_max` flag (Options include `AUC`, `Balanced_Accuracy`, `Sensitivity`, and `Specificity`) :
```shell
# Running GenoML supervised training after munging on discrete data and specifying the metric to maximize by 

genoml discrete supervised train \
--prefix outputs/test_discrete_geno \
--metric_max Sensitivity
```
:::caution 
The `--metric_max` flag is only available for discrete datasets.
:::

<a id="3"></a>
