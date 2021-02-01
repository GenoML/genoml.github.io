(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(r,".").concat(d)]||u[d]||b[d]||i;return n?o.a.createElement(h,s(s({ref:t},c),{},{components:n})):o.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),i=(n(0),n(105)),r={last_modified_on:"2020-12-18",title:"What is GenoML?"},s={unversionedId:"about/what-is-genoml",id:"about/what-is-genoml",isDocsHomePage:!1,title:"What is GenoML?",description:"** GenoML workflow image",source:"@site/docs/about/what-is-genoml.md",slug:"/about/what-is-genoml",permalink:"/docs/about/what-is-genoml",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/about/what-is-genoml.md",version:"current",sidebar:"docs",next:{title:"Principles and philosophy",permalink:"/docs/about/principles"}},l=[{value:"Backgound",id:"backgound",children:[]},{value:"GenoML as a package",id:"genoml-as-a-package",children:[]},{value:"GenoML as a community",id:"genoml-as-a-community",children:[]},{value:"Issues, Suggestions, or Need Help?",id:"issues-suggestions-or-need-help",children:[]},{value:"Team",id:"team",children:[]},{value:"Acknowledgement",id:"acknowledgement",children:[]},{value:"Citations",id:"citations",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"**")," GenoML workflow image "),Object(i.b)("p",null,"GenoML is more than a tool; it is a community for democratizing and automating machine learning workflows for genomics and multi-omics with an #OpenScience philosophy."),Object(i.b)("h2",{id:"backgound"},"Backgound"),Object(i.b)("p",null,"In recent years, the demand for machine learning experts has outpaced the supply, despite the surge of people entering the field. To address this gap, there have been significant strides in the development of user-friendly machine learning software that can be used by non-experts. The first steps toward simplifying machine learning involved developing simple, unified interfaces to a variety of machine learning algorithms (e.g., ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://scikit-learn.org/stable/"}),"scikit-learn"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://xgboost.readthedocs.io/en/latest/"}),"XGBoost"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://lightgbm.readthedocs.io/en/latest/"}),"LightGBM"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.tensorflow.org"}),"TensorFlow"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://pytorch.org"}),"PyTorch"),"). Although these packages have made it easy to experiment with machine learning, there is still a fair bit of knowledge and background in data science required to produce high-performing and usable machine learning models. The development of machine learning models for genomic data, in particular, is notoriously difficult for a non-expert. Genomic and multi-omics require significant domain expertise to clean, pre-process, harmonize, and QC the data. Furthermore, tuning, validation, and interpretation involve taking into account the biology and possibly the limitations of the underlying data collection procedures and technology. "),Object(i.b)("h2",{id:"genoml-as-a-package"},"GenoML as a package"),Object(i.b)("p",null,"For machine learning software to truly be accessible to non-experts, we have designed an easy-to-use tool that automates the full development, evaluation, and deployment process. GenoML automates the most tedious part of the process, such as data pre-processing and cleaning, to more advanced training and tuning. GenoML intelligently explores many possible techniques to find the best model for the specific input data. "),Object(i.b)("p",null,"GenoML is also helpful to advanced users. GenoML provides a high-level wrapper performing many modeling tasks that would typically require many code lines. "),Object(i.b)("h2",{id:"genoml-as-a-community"},"GenoML as a community"),Object(i.b)("p",null,"GenoML is a diverse community with integrative expertise in data science, bioinformatics, computer science, software engineering, biology, and healthcare. We are staunch advocates of open science, striving to make data and code easily accessible to the scientific community. Please join us and contribute to the development of GenoML."),Object(i.b)("h2",{id:"issues-suggestions-or-need-help"},"Issues, Suggestions, or Need Help?"),Object(i.b)("p",null,"If anything is broken, confusing, or you just want new features, please hit us up on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://twitter.com/geno_ml"}),"Twitter")," or submit a ticket to our ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/GenoML/genoml/issues"}),"GitHub issues"),'.\nIf you want to try and troubleshoot your issue by yourself, please try running your command with the "',Object(i.b)("inlineCode",{parentName:"p"},"-v"),' "or "',Object(i.b)("inlineCode",{parentName:"p"},"-vvv"),' "options at the end to generate verbose outputs. ',Object(i.b)("strong",{parentName:"p"},"If you'd like to get more involved in GenoML and the community we are trying to build, please see the ",Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"/docs/about/contribute"}),"collaborations page")," for additional info.")),Object(i.b)("h2",{id:"team"},"Team"),Object(i.b)("h4",{id:"core"},"Core"),Object(i.b)("p",null,"Mary Makarious (NIA-NIH)\nHampton Leonard (NIA-NIH / DTI)\nDan Vitale (NIA-NIH / DTI)\nSayed Hadi Hashemi (UIUC)\nDavid Saffo (NEU)\nEduardo Salmer\xf3n Casta\xf1o (UM)\nCornelis Blauwendraat (NIA-NIH)\nHirotaka Iwaki (NIA-NIH / MJFF / DTI)\nRoy H. Campbell (UIUC)\nAndrew B. Singleton (NIA-NIH)\nJuan A. Botia (UM)\nFaraz Faghri (NIA-NIH / UIUC / DTI)\nMike A. Nalls (NIA-NIH / DTI) "),Object(i.b)("h4",{id:"collaborators"},"Collaborators"),Object(i.b)("p",null,"Lana Sargeant (VCU)\nSusan Chacko (Biowulf-NIH)\nRafael Jord\xe1 Mu\xf1oz (UM) "),Object(i.b)("h4",{id:"affiliations"},"Affiliations"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.nia.nih.gov/research/labs/lng"}),"Laboratory of Neurogenetics"),", ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.nia.nih.gov"}),"National Institute on Aging"),", ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.nih.gov"}),"National Institutes of Health")," (LNG-NIA-NIH) "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.nia.nih.gov/news/new-nih-alzheimers-center-accelerate-translational-research"}),"Center for Alzheimer's and Related Dementias"),", ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.nih.gov"}),"National Institutes of Health")," (CARD-NIH)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.datatecnica.com/"}),"Data Tecnica International")," (DTI) "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://srg.cs.illinois.edu"}),"Systems Research Group"),", Department of Computer Science, University of Illinois at Urbana-Champaign (UIUC) "),Object(i.b)("li",{parentName:"ul"},"College of Computer Sciences, Northeastern University (NEU) "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.michaeljfox.org"}),"The Michael J. Fox Foundation")," (MJFF) "),Object(i.b)("li",{parentName:"ul"},"Biowulf High-Performance Computing Cluster, National Institutes of Health (Biowulf-NIH) "),Object(i.b)("li",{parentName:"ul"},"School of Nursing, VCU Health, Geriatric Health Clinic, Virginia Commonwealth University (VCU) "),Object(i.b)("li",{parentName:"ul"},"University of Murcia (UM) ")),Object(i.b)("h2",{id:"acknowledgement"},"Acknowledgement"),Object(i.b)("p",null,"This work is a collaborative effort in open source software supported by the Laboratory of Neurogenetics, and the Center for Alzheimer's and Related Dementias at the National Institute on Aging (National Institutes of Health), the Biowulf High-Performance Computing Cluster (National Institutes of Health), the Michael J Fox Foundation, University of Murcia, the Global Parkinson's Genetics Program, Chan Zuckerberg Initiative, and Data Tecnica Int'l. "),Object(i.b)("h2",{id:"citations"},"Citations"),Object(i.b)("h4",{id:"if-using-genoml-for-a-publication-we-ask-that-you-cite-the-dependencies-for-the-pre-filtering-snp-pruning-aspects-of-the-pipeline-including"},"If using GenoML for a publication, we ask that you cite the dependencies for the pre-filtering (SNP pruning) aspects of the pipeline, including:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Purcell, Shaun, et al. "PLINK: A Tool Set for Whole-Genome Association and Population-Based Linkage Analyses." American Journal of Human Genetics, vol. 81, no. 3, Sept. 2007, pp. 559\u201375.'),Object(i.b)("li",{parentName:"ul"},'Chang, Christopher C., et al. "Second-Generation PLINK: Rising to the Challenge of Larger and Richer Datasets." GigaScience, vol. 4, Feb. 2015, p. 7.')),Object(i.b)("h4",{id:"genoml-would-not-be-possible-without-these-excellent-resources-from-the-python-community-lets-give-some-credit-where-its-due"},"GenoML would not be possible without these excellent resources from the python community (let's give some credit where it's due):"),Object(i.b)("p",null,"joblib, pyparsing, numpy, kiwisolver, six, cycler, python-dateutil, matplotlib, numexpr, tables, pytz, pandas, pyyaml, toolz, locket, partd, fsspec, dask, packaging, zipp, importlib-metadata, pluggy, wcwidth, more-itertools, py, attrs, pytest, pycparser, cffi, zstandard, xarray, tqdm, wrapt, Deprecated, pandas-plink, urllib3, idna, chardet, requests, threadpoolctl, scipy, scikit-learn, seaborn, patsy, statsmodels, xgboost"))}p.isMDXComponent=!0}}]);