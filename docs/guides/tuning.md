---
last_modified_on: "2020-12-18"
id: tuning
title: "Model tuning"
---

The most basic command to tune your model looks like the following; it looks for the file that was generated in the training step: 
```shell
# Running GenoML supervised tuning after munging and training on discrete data

genoml discrete supervised tune \
--prefix outputs/test_discrete_geno
```

If you are interested in changing the number of iterations the tuning process goes through by modifying `--max_tune` *(default is 50)*, or the number of cross-validations by modifying `--n_cv` *(default is 5)*, this is what the command would look like: 
```shell
# Running GenoML supervised tuning after munging and training on discrete data, modifying the number of iterations and cross-validations 

genoml discrete supervised tune \
--prefix outputs/test_discrete_geno \
--max_tune 10 --n_cv 3
```

If you are interested in tuning on another metric other than AUC *(default is AUC)*, you can modify `--metric_tune` (options are `AUC` or `Balanced_Accuracy`) by doing the following: 
```shell
# Running GenoML supervised tuning after munging and training on discrete data, modifying the metric to tune by

genoml discrete supervised tune \
--prefix outputs/test_discrete_geno \
--metric_tune Balanced_Accuracy
```

<a id="4"></a>
