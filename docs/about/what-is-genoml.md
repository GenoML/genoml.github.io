---
last_modified_on: "2020-12-18"
title: "What is GenoML?" 
---

![GenoML WorkFlow](/img/genoml-workflow.png)

GenoML is more than a tool; it is a community for democratizing and automating machine learning workflows for genomics and multi-omics with an #OpenScience philosophy.

## Backgound 
In recent years, the demand for machine learning experts has outpaced the supply, despite the surge of people entering the field. To address this gap, there have been significant strides in the development of user-friendly machine learning software that can be used by non-experts. The first steps toward simplifying machine learning involved developing simple, unified interfaces to a variety of machine learning algorithms (e.g., [scikit-learn](https://scikit-learn.org/stable/), [XGBoost](https://xgboost.readthedocs.io/en/latest/), [LightGBM](https://lightgbm.readthedocs.io/en/latest/), [TensorFlow](https://www.tensorflow.org), [PyTorch](https://pytorch.org)). Although these packages have made it easy to experiment with machine learning, there is still a fair bit of knowledge and background in data science required to produce high-performing and usable machine learning models. The development of machine learning models for genomic data, in particular, is notoriously difficult for a non-expert. Genomic and multi-omics require significant domain expertise to clean, pre-process, harmonize, and QC the data. Furthermore, tuning, validation, and interpretation involve taking into account the biology and possibly the limitations of the underlying data collection procedures and technology. 

## GenoML as a package
For machine learning software to truly be accessible to non-experts, we have designed an easy-to-use tool that automates the full development, evaluation, and deployment process. GenoML automates the most tedious part of the process, such as data pre-processing and cleaning, to more advanced training and tuning. GenoML intelligently explores many possible techniques to find the best model for the specific input data. 

GenoML is also helpful to advanced users. GenoML provides a high-level wrapper performing many modeling tasks that would typically require many code lines. 

## GenoML as a community 
GenoML is a diverse community with integrative expertise in data science, bioinformatics, computer science, software engineering, biology, and healthcare. We are staunch advocates of open science, striving to make data and code easily accessible to the scientific community. Please join us and contribute to the development of GenoML.

## Issues, Suggestions, or Need Help?
If anything is broken, confusing, or you just want new features, please hit us up on [Twitter](https://twitter.com/geno_ml) or submit a ticket to our [GitHub issues](https://github.com/GenoML/genoml/issues).
If you want to try and troubleshoot your issue by yourself, please try running your command with the "`-v` "or "`-vvv` "options at the end to generate verbose outputs. **If you'd like to get more involved in GenoML and the community we are trying to build, please see the [collaborations page](/docs/about/contribute) for additional info.**


## Team 
#### Core 
Mary Makarious (NIA-NIH) 
Hampton Leonard (NIA-NIH / DTI) 
Dan Vitale (NIA-NIH / DTI) 
Sayed Hadi Hashemi (UIUC) 
David Saffo (NEU) 
Eduardo Salmerón Castaño (UM)
Cornelis Blauwendraat (NIA-NIH) 
Hirotaka Iwaki (NIA-NIH / MJFF / DTI) 
Roy H. Campbell (UIUC) 
Andrew B. Singleton (NIA-NIH) 
Juan A. Botia (UM) 
Faraz Faghri (NIA-NIH / UIUC / DTI) 
Mike A. Nalls (NIA-NIH / DTI) 

#### Collaborators
Lana Sargeant (VCU) 
Susan Chacko (Biowulf-NIH) 
Rafael Jordá Muñoz (UM) 

#### Affiliations 
* [Laboratory of Neurogenetics](https://www.nia.nih.gov/research/labs/lng), [National Institute on Aging](https://www.nia.nih.gov), [National Institutes of Health](https://www.nih.gov) (LNG-NIA-NIH) 
* [Center for Alzheimer's and Related Dementias](https://www.nia.nih.gov/news/new-nih-alzheimers-center-accelerate-translational-research), [National Institutes of Health](https://www.nih.gov) (CARD-NIH)
* [Data Tecnica International](https://www.datatecnica.com/) (DTI) 
* [Systems Research Group](http://srg.cs.illinois.edu), Department of Computer Science, University of Illinois at Urbana-Champaign (UIUC) 
* College of Computer Sciences, Northeastern University (NEU) 
* [The Michael J. Fox Foundation](https://www.michaeljfox.org) (MJFF) 
* Biowulf High-Performance Computing Cluster, National Institutes of Health (Biowulf-NIH) 
* School of Nursing, VCU Health, Geriatric Health Clinic, Virginia Commonwealth University (VCU) 
* University of Murcia (UM) 

## Acknowledgement
This work is a collaborative effort in open source software supported by the Laboratory of Neurogenetics, and the Center for Alzheimer's and Related Dementias at the National Institute on Aging (National Institutes of Health), the Biowulf High-Performance Computing Cluster (National Institutes of Health), the Michael J Fox Foundation, University of Murcia, the Global Parkinson's Genetics Program, Chan Zuckerberg Initiative, and Data Tecnica Int'l. 

## Citations

#### If using GenoML for a publication, we ask that you cite the dependencies for the pre-filtering (SNP pruning) aspects of the pipeline, including:

* Purcell, Shaun, et al. "PLINK: A Tool Set for Whole-Genome Association and Population-Based Linkage Analyses." American Journal of Human Genetics, vol. 81, no. 3, Sept. 2007, pp. 559–75.
* Chang, Christopher C., et al. "Second-Generation PLINK: Rising to the Challenge of Larger and Richer Datasets." GigaScience, vol. 4, Feb. 2015, p. 7.

#### GenoML would not be possible without these excellent resources from the python community (let's give some credit where it's due):
joblib, pyparsing, numpy, kiwisolver, six, cycler, python-dateutil, matplotlib, numexpr, tables, pytz, pandas, pyyaml, toolz, locket, partd, fsspec, dask, packaging, zipp, importlib-metadata, pluggy, wcwidth, more-itertools, py, attrs, pytest, pycparser, cffi, zstandard, xarray, tqdm, wrapt, Deprecated, pandas-plink, urllib3, idna, chardet, requests, threadpoolctl, scipy, scikit-learn, seaborn, patsy, statsmodels, xgboost

