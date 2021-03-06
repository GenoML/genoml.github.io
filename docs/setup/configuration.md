---
last_modified_on: "2020-12-18"
id: configuration
title: "Configuration"
---

## Example dataset 
You can test GenoML on an example dataset. To install the `examples/` directory (~315 KB), you can use SVN (pre-installed on most Macs):

```shell
svn export https://github.com/GenoML/genoml2.git/trunk/examples
```


:::tip
When you `pip install` this package, the `examples/` folder is also downloaded! However, if you still want to download the directory and SVN is not pre-installed, you can download it via Homebrew if you have that installed using `brew install svn`. 
:::

## [OPTIONAL] Setting up a virtual environment via Conda
You can create a virtual environment to run GenoML, if you prefer.
If you already have the [Anaconda Distribution](https://www.anaconda.com/products/individual#download), this is fairly simple.

To create and activate a virtual environment:

```shell
# To create a virtual environment
conda create -n GenoML python=3.7

# To activate a virtual environment
conda activate GenoML

# To install requirements via pip 
pip install -r requirements.txt
    # If issues installing xgboost from requirements - (3 options)
        # use Homebrew to 
            # xcode-select --install
            # brew install gcc@7
        # conda install -c conda-forge xgboost 
        # pip install xgboost==0.90

## MISC
# To deactivate the virtual environment
# conda deactivate GenoML

# To delete your virtual environment
# conda env remove -n GenoML
```

To install the GenoML in the user's path in a virtual environment, you can do the following:
```shell
# Install the package at this path
pip install .

# MISC
	# To save out the environment requirements to a .txt file
# pip freeze > requirements.txt

	# Removing a conda virtualenv
# conda remove --name GenoML --all 
```