---
last_modified_on: "2020-12-18"
id: input
title: "Input data"
---

Here is a quick walkthrough of input file formats and general suggestions. 

:::caution
You always need a **phenotype** file and at least **genotype** or **additional** feature data. You have to have sn input to predict the phenotype.
:::

## Phenotypes (Required)
A basic two-column CSV with **ID** and **PHENO** corresponding to samples in the genotype data.  
ID must be a string, i.e., composed of letters and possibly some combination of letters and numbers.
In general, there should be no missing data.  Please code discrete phenotypes as 0/1, with 1 as a case and 0 as a control. Continuous phenotypes should be relatively normally distributed if possible.

## Genotypes (Optional)
Generally, these should be single nucleotide polymorphisms and samples passing standard GWAS type quality controls.
- If using imputed data, we suggest filtering at an imputation quality > 0.8 and using the hard call genotypes
- Additionally, rarer variants can be problematic, and we suggest filtering at a minor allele frequency > 1% (or > 5%) if sample size permits. The fewer samples you have, the less you should focus on variants that have lower minor allele frequencies
- Limiting missingness in these files is helpful even though there is secondary imputation as part of GenoML.

This input data is the standard .bed, .bim and .fam binaries from [PLINK](https://www.cog-genomics.org/plink/1.9/input#bed).  

We are working on teaching GenoML to eat more file types; if you have some favorite formats for genotypes, please get in touch either by posting an issue on GitHub or via [Twitter](https://twitter.com/geno_ml).

## Additional Data (Optional)
Comma-delimited file with the first header columns **ID**, the following columns can contain any numeric data deemed necessary.  
In general, we use this for parameters we want to use as predictors that aren't SNPs.  For example, this could include clinical data or thousands of gene expression probes, whatever you want.  Please make sure the file has headers that are strings (i.e., not just numbers)

## GWAS Summary Statistics (Optional)
This is a big comma delimited text file of genome-wide association study summary stats.
This file must have a header as follows, *SNP A1 A2 freq b se p N*, where *SNP* is a unique variant ID, *A1* is the effect allele, *A2* is the reference allele, *freq* is the frequency of A1, *b* is the beta coefficient from GWAS, *se* is the standard error from GWAS, *p* is the p-value from GWAS and *N* is the sample size. No missing data is allowed.


