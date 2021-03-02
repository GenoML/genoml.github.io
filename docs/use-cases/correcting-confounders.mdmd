---
last_modified_on: "2021-03-02"
id: correcting-confounders
title: "Correcting confoundign"
---

:::note
This section is under development.
:::

Something cool that we have done in GenoML is to allow you at the `munge`-ing phase is allow you to correct a dataset for potential confounding variables. This can be anything from correcting gene expresison data for study site and batch to correcting a genome-wide set of SNPs for population stratification.  
Please check out the following options in the `munge` workflow to correct your data for know covariates. In future releases, we might help you correct for hidden or latent covariates as well.
`
  --umap_reduce {no,yes}
                        Would you like to reduce your dimensions with UMAP?
                        [default: no]. Must be run with --confounders flag if
                        yes.
  --adjust_data {yes,no}
                        Would you like to adjust features and/or confounders
                        in your data? [default: no]
  --adjust_normalize {no,yes}
                        Would you like to normalize the features and/or
                        confounders you are adjusting for in your data?
                        [default: yes]
  --target_features TARGET_FEATURES
                        For adjusting data. A .txt file, one column, with a
                        list of features to adjust (no header). These should
                        correspond to features in the munged dataset
  --confounders CONFOUNDERS
                        For adjusting data. A .csv of confounders to adjust
                        for with ID column and header.Numeric, with no missing
                        data and the ID columnis mandatory
`

## Cohort stratification in GenoML
Run:

```shell
#Todo
```
