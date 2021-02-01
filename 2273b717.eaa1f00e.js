(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{105:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),u=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),b=i,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||r;return t?a.a.createElement(m,l(l({ref:n},c),{},{components:t})):a.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=b;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},75:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var i=t(3),a=t(7),r=(t(0),t(105)),o={last_modified_on:"2020-12-18",id:"munging",title:"Data munging"},l={unversionedId:"guides/munging",id:"guides/munging",isDocsHomePage:!1,title:"Data munging",description:"Munging with GenoML will, at a minimum, do the following:",source:"@site/docs/guides/munging.md",slug:"/guides/munging",permalink:"/docs/guides/munging",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/guides/munging.md",version:"current",sidebar:"docs",previous:{title:"Input data",permalink:"/docs/guides/input"},next:{title:"Model training",permalink:"/docs/guides/training"}},s=[],c={toc:s};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Munging with GenoML will, at a minimum, do the following: "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Prune your genotypes using PLINK v1.9 (if ",Object(r.b)("inlineCode",{parentName:"li"},"--geno")," flag is used)"),Object(r.b)("li",{parentName:"ul"},"Impute per column using median or mean (can be changed with the ",Object(r.b)("inlineCode",{parentName:"li"},"--impute")," flag)"),Object(r.b)("li",{parentName:"ul"},"Z-scaling of features and removing columns with an std dev = 0 ")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Required")," arguments for GenoML munging are ",Object(r.b)("inlineCode",{parentName:"p"},"--prefix")," and ",Object(r.b)("inlineCode",{parentName:"p"},"--pheno")," "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"data")," : Is the data ",Object(r.b)("inlineCode",{parentName:"li"},"continuous")," or ",Object(r.b)("inlineCode",{parentName:"li"},"discrete"),"?"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"method"),": Do you want to use ",Object(r.b)("inlineCode",{parentName:"li"},"supervised")," or ",Object(r.b)("inlineCode",{parentName:"li"},"unsupervised")," machine learning? ",Object(r.b)("em",{parentName:"li"},"(unsupervised currently under development)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"mode"),":  would you like to ",Object(r.b)("inlineCode",{parentName:"li"},"munge"),", ",Object(r.b)("inlineCode",{parentName:"li"},"train"),", ",Object(r.b)("inlineCode",{parentName:"li"},"tune"),", or ",Object(r.b)("inlineCode",{parentName:"li"},"test")," your model?"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--prefix")," : Where would you like your outputs to be saved?"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--pheno")," : Where is your phenotype file? This file only has two columns, ID in one, and PHENO in the other (0 for controls and 1 for cases)")),Object(r.b)("p",null,"Be sure to have your files formatted the same as the examples, key points being: "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"0=controls and 1=case")," in your phenotype file"),Object(r.b)("li",{parentName:"ul"},"Your phenotype file consisting ",Object(r.b)("strong",{parentName:"li"},"only"),' of the "ID" and "PHENO" columns'),Object(r.b)("li",{parentName:"ul"},"Your sample IDs matching across all files"),Object(r.b)("li",{parentName:"ul"},"Your sample IDs not consisting of only integers (add a prefix or suffix to all sample IDs ensuring they are alphanumeric if this is the case before running GenoML)  ")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("em",{parentName:"p"},"Note:")," The following examples are for discrete data, but if you substitute the following commands with ",Object(r.b)("inlineCode",{parentName:"p"},"continuous")," instead of discrete, you can preprocess your continuous data!")),Object(r.b)("p",null,"If you would like to munge just with genotypes (in PLINK binary format), the most straightforward command is the following: "),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell"}),"# Running GenoML munging on discrete data using PLINK genotype binary files and a phenotype file \n\ngenoml discrete supervised munge \\\n--prefix outputs/test_discrete_geno \\\n--geno examples/discrete/training \\\n--pheno examples/discrete/training_pheno.csv\n")),Object(r.b)("p",null,"You can choose to skip pruning your SNPs at this stage by changing the ",Object(r.b)("inlineCode",{parentName:"p"},"--skip_prune"),' flag to "yes" (default is "no")'),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell"}),"# Running GenoML munging on discrete data using PLINK genotype binary files and a phenotype file \n\ngenoml discrete supervised munge \\\n--prefix outputs/test_discrete_geno \\\n--geno examples/discrete/training \\\n--skip_prune yes \\\n--pheno examples/discrete/training_pheno.csv\n")),Object(r.b)("p",null,"You can choose to impute on ",Object(r.b)("inlineCode",{parentName:"p"},"mean")," or ",Object(r.b)("inlineCode",{parentName:"p"},"median")," by modifying the ",Object(r.b)("inlineCode",{parentName:"p"},"--impute")," flag, like so ",Object(r.b)("em",{parentName:"p"},"(default is median)"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell"}),"# Running GenoML munging on discrete data using PLINK genotype binary files and a phenotype file and specifying impute\n\ngenoml discrete supervised munge \\\n--prefix outputs/test_discrete_geno \\\n--geno examples/discrete/training \\\n--pheno examples/discrete/training_pheno.csv \\\n--impute mean\n")),Object(r.b)("p",null,"If you suspect collinear variables and think this will be a problem for training the model moving forward, you can use ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.investopedia.com/terms/v/variance-inflation-factor.asp"}),"variance inflation factor")," (VIF) filtering: "),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell"}),"# Running GenoML munging on discrete data using PLINK genotype binary files and a phenotype file while using VIF to remove multicollinearity \n\ngenoml discrete supervised munge \\\n--prefix outputs/test_discrete_geno \\\n--geno examples/discrete/training \\\n--pheno examples/discrete/training_pheno.csv \\\n--vif 5 \\\n--iter 1\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"--vif")," flag specifies the VIF threshold you would like to use (5 is recommended) "),Object(r.b)("li",{parentName:"ul"},"The number of iterations you'd like to run can be modified with the ",Object(r.b)("inlineCode",{parentName:"li"},"--iter")," flag (if you have or anticipate many collinear variables, it's a good idea to increase the iterations)")),Object(r.b)("p",null,"Well, what if you had GWAS summary statistics handy, and would like to use the same SNPs outlined in that file? You can do so by running the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell"}),"# Running GenoML munging on discrete data using PLINK genotype binary files, a phenotype file, and a GWAS summary statistics file \n\ngenoml discrete supervised munge \\\n--prefix outputs/test_discrete_geno \\\n--geno examples/discrete/training \\\n--pheno examples/discrete/training_pheno.csv \\\n--gwas examples/discrete/example_GWAS.csv\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("em",{parentName:"p"},"Note:")," When using the GWAS flag, the PLINK binaries will be pruned to include matching SNPs to the GWAS file. ")),Object(r.b)("p",null,"...and if you wanted to add a p-value cut-off..."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell"}),"# Running GenoML munging on discrete data using PLINK genotype binary files, a phenotype file, and a GWAS summary statistics file with a p-value cut-off \n\ngenoml discrete supervised munge \\\n--prefix outputs/test_discrete_geno \\\n--geno examples/discrete/training \\\n--pheno examples/discrete/training_pheno.csv \\\n--gwas examples/discrete/example_GWAS.csv \\\n--p 0.01\n")),Object(r.b)("p",null,"Do you have additional data you would like to incorporate? Perhaps clinical, demographic, or transcriptomics data? If coded and all numerical, these can be added as an ",Object(r.b)("inlineCode",{parentName:"p"},"--addit")," file by doing the following: "),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell"}),"# Running GenoML munging on discrete data using PLINK genotype binary files, a phenotype file, and an addit file\n\ngenoml discrete supervised munge \\\n--prefix outputs/test_discrete_geno \\\n--geno examples/discrete/training \\\n--pheno examples/discrete/training_pheno.csv \\\n--addit examples/discrete/training_addit.csv\n")),Object(r.b)("p",null,"You also have the option of not using PLINK binary files if you would like to preprocess (and then, later train) on a phenotype and addit file by doing the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell"}),"# Running GenoML munging on discrete data using PLINK genotype binary files, a phenotype file, and an addit file\n\ngenoml discrete supervised munge \\\n--prefix outputs/test_discrete_geno \\\n--pheno examples/discrete/training_pheno.csv \\\n--addit examples/discrete/training_addit.csv\n")),Object(r.b)("p",null,"Are you interested in selecting and ranking your features? If so, you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"--feature_selection")," flag and specify like so...:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell"}),"# Running GenoML munging on discrete data using PLINK genotype binary files, a phenotype file, and running feature selection \n\ngenoml discrete supervised munge \\\n--prefix outputs/test_discrete_geno \\\n--geno examples/discrete/training \\\n--pheno examples/discrete/training_pheno.csv \\\n--addit examples/discrete/training_addit.csv \\\n--feature_selection 50\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"--feature_selection")," flag uses extraTrees (",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.ExtraTreesClassifier.html"}),"classifier")," for discrete data; ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.ExtraTreesRegressor.html"}),"regressor")," for continuous data) to output a ",Object(r.b)("inlineCode",{parentName:"p"},"*.approx_feature_importance.txt")," file with the features most contributing to your model at the top. "),Object(r.b)("a",{id:"2"}))}u.isMDXComponent=!0}}]);