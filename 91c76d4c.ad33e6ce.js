(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{105:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return p}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),d=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=d(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),c=d(t),f=o,p=c["".concat(a,".").concat(f)]||c[f]||m[f]||i;return t?r.a.createElement(p,s(s({ref:n},l),{},{components:t})):r.a.createElement(p,s({ref:n},l))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},84:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return d}));var o=t(3),r=t(7),i=(t(0),t(105)),a={last_modified_on:"2020-12-18",id:"cli",title:"Command-Line Interface (CLI)"},s={unversionedId:"reference/cli",id:"reference/cli",isDocsHomePage:!1,title:"Command-Line Interface (CLI)",description:"If you would like to work with a continuous or discrete outcome in your \\*.pheno file with genoml continuous or genoml discrete.",source:"@site/docs/reference/cli.md",slug:"/reference/cli",permalink:"/docs/reference/cli",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/cli.md",version:"current",sidebar:"docs",previous:{title:"Experimental features",permalink:"/docs/guides/experimental"}},u=[{value:"genoml - the root of all commands",id:"genoml---the-root-of-all-commands",children:[]},{value:"genoml harmonize",id:"genoml-harmonize",children:[]},{value:"genoml discrete supervised munge",id:"genoml-discrete-supervised-munge",children:[]},{value:"genoml continuous supervised munge",id:"genoml-continuous-supervised-munge",children:[]},{value:"genoml discrete supervised train",id:"genoml-discrete-supervised-train",children:[]},{value:"genoml continuous supervised train",id:"genoml-continuous-supervised-train",children:[]},{value:"genoml discrete supervised tune",id:"genoml-discrete-supervised-tune",children:[]},{value:"genoml continuous supervised tune",id:"genoml-continuous-supervised-tune",children:[]},{value:"genoml discrete supervised test",id:"genoml-discrete-supervised-test",children:[]},{value:"genoml continuous supervised test",id:"genoml-continuous-supervised-test",children:[]}],l={toc:u};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"If you would like to work with a continuous or discrete outcome in your ","*",".pheno file with ",Object(i.b)("inlineCode",{parentName:"p"},"genoml continuous")," or ",Object(i.b)("inlineCode",{parentName:"p"},"genoml discrete"),".  "),Object(i.b)("p",null,"The current iteration of documentation supports the ",Object(i.b)("inlineCode",{parentName:"p"},"supervised")," learning workflow; the list of workflows incoming is scary!\nAfter that, you can add one of the subcommands, including choice of ",Object(i.b)("inlineCode",{parentName:"p"},"munge"),", ",Object(i.b)("inlineCode",{parentName:"p"},"train"),", ",Object(i.b)("inlineCode",{parentName:"p"},"tune"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"test"),", these are steps within the supervised workflow.  "),Object(i.b)("p",null,"If you are interested in harmonizing a test dataset for external validation of a previous model, use ",Object(i.b)("inlineCode",{parentName:"p"},"genoml harmonize"),"."),Object(i.b)("p",null,"The general structure of GenoML commands is ",Object(i.b)("inlineCode",{parentName:"p"},"genoml")," then ",Object(i.b)("inlineCode",{parentName:"p"},"outcome")," type (discrete or continuous for now), then ",Object(i.b)("inlineCode",{parentName:"p"},"workflow")," (supervised for now), then ",Object(i.b)("inlineCode",{parentName:"p"},"subcommand")," that is usually a step within a larger workflow."),Object(i.b)("p",null,"Detailed command line options relating to published GenoML ",Object(i.b)("inlineCode",{parentName:"p"},"workflows")," and their ",Object(i.b)("inlineCode",{parentName:"p"},"subcommands")," below. "),Object(i.b)("h2",{id:"genoml---the-root-of-all-commands"},"genoml - the root of all commands"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"usage: genoml <command> [<args>]\n   continuous      for processing continuous datatypes (ex: age at onset)\n   discrete        for processing discrete datatypes (ex: case vs. control status)\n   harmonize       for harmonizing incoming test datasets to use the same SNPs and reference alleles prior to munging, training, and testing\n\ngenoml\n\npositional arguments:\n  command     Subcommand to run\n")),Object(i.b)("h2",{id:"genoml-harmonize"},"genoml harmonize"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"usage: genoml harmonize [-h] --test_geno_prefix TEST_GENO_PREFIX\n                        [--test_prefix TEST_PREFIX]\n                        [--ref_model_prefix REF_MODEL_PREFIX]\n                        --training_snps_alleles TRAINING_SNPS_ALLELES [-v]\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --test_geno_prefix TEST_GENO_PREFIX\n                        Prefix of the genotypes for the test dataset in PLINK\n                        binary format.\n  --test_prefix TEST_PREFIX\n                        Prefix for the dataset you would like to test against\n                        your reference model. Remember, the model will not\n                        function well if it does not include the same\n                        features, and these features should be on the same\n                        numeric scale, you can leave off the '.dataForML.h5'\n                        suffix.\n  --ref_model_prefix REF_MODEL_PREFIX\n                        Prefix of your reference model file, you can leave off\n                        the '.joblib' suffix.\n  --training_snps_alleles TRAINING_SNPS_ALLELES\n                        File to the SNPs and alleles file generated in the\n                        training phase that we will use to compare.\n  -v, --verbose         Verbose output.\n")),Object(i.b)("h2",{id:"genoml-discrete-supervised-munge"},"genoml discrete supervised munge"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"usage: genoml discrete supervised munge [-h] [--prefix PREFIX]\n                                        [--impute {median,mean}] [--geno GENO]\n                                        --pheno PHENO [--addit ADDIT]\n                                        [--feature_selection FEATURE_SELECTION]\n                                        [--gwas GWAS] [--p P] [--vif VIF]\n                                        [--iter ITER]\n                                        [--ref_cols_harmonize REF_COLS_HARMONIZE]\n                                        [-v]\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --prefix PREFIX       Prefix for your output build.\n  --impute {median,mean}\n                        Imputation: (mean, median). Governs secondary\n                        imputation and data transformation [default: median].\n  --geno GENO           Genotype: (string file path). Path to PLINK format\n                        genotype file, everything before the *.bed/bim/fam\n                        [default: None].\n  --pheno PHENO         Phenotype: (string file path). Path to CSV phenotype\n                        file [default: lost].\n  --addit ADDIT         Additional: (string file path). Path to CSV format\n                        feature file [default: None].\n  --feature_selection FEATURE_SELECTION\n                        Run a quick tree-based feature selection routine prior\n                        to anything else, here you input the integer number of\n                        estimators needed, we suggest >= 50. The default of 0\n                        will skip this functionality. This will also output a\n                        reduced dataset for analyses in addition to feature\n                        ranks. [default: 0]\n  --gwas GWAS           GWAS summary stats: (string file path). Path to CSV\n                        format external GWAS summary statistics containing at\n                        least the columns SNP and P in the header [default:\n                        nope].\n  --p P                 P threshold for GWAS: (some value between 0-1). P\n                        value to filter your SNP data on [default: 0.001].\n  --vif VIF             Variance Inflation Factor (VIF): (integer). This is\n                        the VIF threshold for pruning non-genotype features.\n                        We recommend a value of 5-10. The default of 0 means\n                        no VIF filtering will be done. [default: 0].\n  --iter ITER           Iterator: (integer). How many iterations of VIF\n                        pruning of features do you want to run. To save time\n                        VIF is run in randomly assorted chunks of 1000\n                        features per iteration. The default of 1 means only\n                        one pass through the data. [default: 1].\n  --ref_cols_harmonize REF_COLS_HARMONIZE\n                        Are you now munging a test dataset following the\n                        harmonize step? Here you input the path to the to the\n                        *_refColsHarmonize_toKeep.txt file generated at that\n                        step.\n  -v, --verbose         Verbose output.\n")),Object(i.b)("h2",{id:"genoml-continuous-supervised-munge"},"genoml continuous supervised munge"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"usage: genoml continuous supervised munge [-h] [--prefix PREFIX]\n                                          [--impute {median,mean}]\n                                          [--geno GENO] --pheno PHENO\n                                          [--addit ADDIT]\n                                          [--feature_selection FEATURE_SELECTION]\n                                          [--gwas GWAS] [--p P] [--vif VIF]\n                                          [--iter ITER]\n                                          [--ref_cols_harmonize REF_COLS_HARMONIZE]\n                                          [-v]\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --prefix PREFIX       Prefix for your output build.\n  --impute {median,mean}\n                        Imputation: (mean, median). Governs secondary\n                        imputation and data transformation [default: median].\n  --geno GENO           Genotype: (string file path). Path to PLINK format\n                        genotype file, everything before the *.bed/bim/fam\n                        [default: None].\n  --pheno PHENO         Phenotype: (string file path). Path to CSV phenotype\n                        file [default: lost].\n  --addit ADDIT         Additional: (string file path). Path to CSV format\n                        feature file [default: None].\n  --feature_selection FEATURE_SELECTION\n                        Run a quick tree-based feature selection routine prior\n                        to anything else, here you input the integer number of\n                        estimators needed, we suggest >= 50. The default of 0\n                        will skip this functionality. This will also output a\n                        reduced dataset for analyses in addition to feature\n                        ranks. [default: 0]\n  --gwas GWAS           GWAS summary stats: (string file path). Path to CSV\n                        format external GWAS summary statistics containing at\n                        least the columns SNP and P in the header [default:\n                        nope].\n  --p P                 P threshold for GWAS: (some value between 0-1). P\n                        value to filter your SNP data on [default: 0.001].\n  --vif VIF             Variance Inflation Factor (VIF): (integer). This is\n                        the VIF threshold for pruning non-genotype features.\n                        We recommend a value of 5-10. The default of 0 means\n                        no VIF filtering will be done. [default: 0].\n  --iter ITER           Iterator: (integer). How many iterations of VIF\n                        pruning of features do you want to run. To save time\n                        VIF is run in randomly assorted chunks of 1000\n                        features per iteration. The default of 1 means only\n                        one pass through the data. [default: 1].\n  --ref_cols_harmonize REF_COLS_HARMONIZE\n                        Are you now munging a test dataset following the\n                        harmonize step? Here you input the path to the to the\n                        *_refColsHarmonize_toKeep.txt file generated at that\n                        step.\n  -v, --verbose         Verbose output.\n")),Object(i.b)("h2",{id:"genoml-discrete-supervised-train"},"genoml discrete supervised train"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"usage: genoml discrete supervised train [-h] [--prefix PREFIX]\n                                        [--metric_max {AUC,Balanced_Accuracy,Specificity,Sensitivity}]\n                                        [--prob_hist PROB_HIST] [--auc AUC]\n                                        [--matching_columns MATCHING_COLUMNS]\n                                        [-v]\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --prefix PREFIX       Prefix for your output build.\n  --metric_max {AUC,Balanced_Accuracy,Specificity,Sensitivity}\n                        How do you want to determine which algorithm performed\n                        the best? [default: AUC].\n  --prob_hist PROB_HIST\n  --auc AUC\n  --matching_columns MATCHING_COLUMNS\n                        This is the list of intersecting columns between\n                        reference and testing datasets with the suffix\n                        *_finalHarmonizedCols_toKeep.txt\n  -v, --verbose         Verbose output.\n")),Object(i.b)("h2",{id:"genoml-continuous-supervised-train"},"genoml continuous supervised train"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"usage: genoml continuous supervised train [-h] [--prefix PREFIX]\n                                          [--export_predictions EXPORT_PREDICTIONS]\n                                          [--matching_columns MATCHING_COLUMNS]\n                                          [-v]\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --prefix PREFIX       Prefix for your output build.\n  --export_predictions EXPORT_PREDICTIONS\n  --matching_columns MATCHING_COLUMNS\n                        This is the list of intersecting columns between\n                        reference and testing datasets with the suffix\n                        *_finalHarmonizedCols_toKeep.txt\n  -v, --verbose         Verbose output.\n")),Object(i.b)("h2",{id:"genoml-discrete-supervised-tune"},"genoml discrete supervised tune"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"usage: genoml discrete supervised tune [-h] [--prefix PREFIX]\n                                       [--metric_tune {AUC,Balanced_Accuracy}]\n                                       [--max_tune MAX_TUNE] [--n_cv N_CV]\n                                       [-v]\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --prefix PREFIX       Prefix for your output build.\n  --metric_tune {AUC,Balanced_Accuracy}\n                        Using what metric of the best algorithm do you want to\n                        tune on? [default: AUC].\n  --max_tune MAX_TUNE   Max number of tuning iterations: (integer likely\n                        greater than 10). This governs the length of tuning\n                        process, run speed and the maximum number of possible\n                        combinations of tuning parameters [default: 50].\n  --n_cv N_CV           Number of cross validations: (integer likely greater\n                        than 3). Here we set the number of cross-validation\n                        runs for the algorithms [default: 5].\n  -v, --verbose         Verbose output.\n")),Object(i.b)("h2",{id:"genoml-continuous-supervised-tune"},"genoml continuous supervised tune"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"usage: genoml continuous supervised tune [-h] [--prefix PREFIX]\n                                         [--max_tune MAX_TUNE] [--n_cv N_CV]\n                                         [-v]\n\noptional arguments:\n  -h, --help           show this help message and exit\n  --prefix PREFIX      Prefix for your output build.\n  --max_tune MAX_TUNE  Max number of tuning iterations: (integer likely\n                       greater than 10). This governs the length of tuning\n                       process, run speed and the maximum number of possible\n                       combinations of tuning parameters [default: 50].\n  --n_cv N_CV          Number of cross validations: (integer likely greater\n                       than 3). Here we set the number of cross-validation\n                       runs for the algorithms [default: 5].\n  -v, --verbose        Verbose output.\n")),Object(i.b)("h2",{id:"genoml-discrete-supervised-test"},"genoml discrete supervised test"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"usage: genoml discrete supervised test [-h] [--prefix PREFIX]\n                                       [--test_prefix TEST_PREFIX]\n                                       [--ref_model_prefix REF_MODEL_PREFIX]\n                                       [-v]\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --prefix PREFIX       Prefix for your output build.\n  --test_prefix TEST_PREFIX\n                        Prefix for the dataset you would like to test against\n                        your reference model. Remember, the model will not\n                        function well if it does not include the same\n                        features, and these features should be on the same\n                        numeric scale, you can leave off the '.dataForML.h5'\n                        suffix.\n  --ref_model_prefix REF_MODEL_PREFIX\n                        Prefix of your reference model file, you can leave off\n                        the '.joblib' suffix.\n  -v, --verbose         Verbose output.\n")),Object(i.b)("h2",{id:"genoml-continuous-supervised-test"},"genoml continuous supervised test"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"usage: genoml continuous supervised test [-h] [--prefix PREFIX]\n                                         [--test_prefix TEST_PREFIX]\n                                         [--ref_model_prefix REF_MODEL_PREFIX]\n                                         [-v]\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --prefix PREFIX       Prefix for your output build.\n  --test_prefix TEST_PREFIX\n                        Prefix for the dataset you would like to test against\n                        your reference model. Remember, the model will not\n                        function well if it does not include the same\n                        features, and these features should be on the same\n                        numeric scale, you can leave off the '.dataForML.h5'\n                        suffix.\n  --ref_model_prefix REF_MODEL_PREFIX\n                        Prefix of your reference model file, you can leave off\n                        the '.joblib' suffix.\n  -v, --verbose         Verbose output.\n")))}d.isMDXComponent=!0}}]);