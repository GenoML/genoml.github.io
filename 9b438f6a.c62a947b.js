(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return _}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),c=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,_=u["".concat(r,".").concat(m)]||u[m]||p[m]||o;return n?i.a.createElement(_,s(s({ref:t},d),{},{components:n})):i.a.createElement(_,s({ref:t},d))}));function _(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(7),o=(n(0),n(110)),r=["components"],s={last_modified_on:"2020-12-18",id:"validation",title:"Testing and validation"},l={unversionedId:"guides/validation",id:"guides/validation",isDocsHomePage:!1,title:"Testing and validation",description:"To properly test how your model performs on a dataset it's never seen before, the process includes:",source:"@site/docs/guides/validation.md",slug:"/guides/validation",permalink:"/docs/guides/validation",editUrl:"https://github.com/genoml/genoml.github.io/edit/main/docs/guides/validation.md",version:"current",sidebar:"docs",previous:{title:"Model tuning",permalink:"/docs/guides/tuning"},next:{title:"Experimental features",permalink:"/docs/guides/experimental"}},d=[],c={toc:d};function u(e){var t=e.components,n=Object(i.a)(e,r);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To properly test how your model performs on a dataset it's never seen before, the process includes: "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'Munge and train your first dataset. That will be your "reference" model'),Object(o.b)("li",{parentName:"ol"},"Use the outputs of step 1's munge for your reference model to harmonize your incoming validation dataset"),Object(o.b)("li",{parentName:"ol"},"Run through the harmonization step with your validation dataset"),Object(o.b)("li",{parentName:"ol"},"Run through munging with your newly harmonized dataset"),Object(o.b)("li",{parentName:"ol"},"Retrain your reference model with only the matching columns of your unseen data. Given the nature of ML algorithms, you cannot test a model on a set of data that does not have identical features"),Object(o.b)("li",{parentName:"ol"},"Test your newly retrained reference model on the unseen data")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If you are using an external validation dataset, Steps 1-4 are performed as part of the ",Object(o.b)("a",{parentName:"p",href:"/docs/guides/hamonization"},"harmonization")," process. Steps 5-6 are described next. "))),Object(o.b)("p",null,"After munging and training your reference model and harmonizing and munging your unseen test data, ",Object(o.b)("strong",{parentName:"p"},"you will retrain your reference model to include only matching features"),". Given ML algorithms' nature, you cannot test a model on a set of data that does not have identical features. "),Object(o.b)("p",null,"To retrain your model appropriately, after munging your test data with the ",Object(o.b)("inlineCode",{parentName:"p"},"--ref_cols_harmonize ")," flag, a final columns list will be generated at ",Object(o.b)("inlineCode",{parentName:"p"},"*.finalHarmonizedCols_toKeep.txt"),". This includes all the features that match between your unseen test data and your reference model. Use the ",Object(o.b)("inlineCode",{parentName:"p"},"--matching_columns")," flag when retraining your reference model to use the appropriate features."),Object(o.b)("p",null,"When retraining of the reference model is complete, you are ready to test!"),Object(o.b)("p",null,"A step-by-step guide on how to achieve this is listed below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"# 0. MUNGE THE REFERENCE DATASET\ngenoml discrete supervised munge \\\n--prefix outputs/test_discrete_geno \\\n--geno examples/discrete/training \\\n--pheno examples/discrete/training_pheno.csv\n# Files made: \n    # outputs/test_discrete_geno.dataForML.h5\n    # outputs/test_discrete_geno.list_features.txt\n    # outputs/test_discrete_geno.variants_and_alleles.tab\n\n# 1. TRAIN THE REFERENCE DATASET\ngenoml discrete supervised train \\\n--prefix outputs/test_discrete_geno\n# Files made: \n    # outputs/test_discrete_geno.best_algorithm.txt\n    # outputs/test_discrete_geno.trainedModel.joblib\n    # outputs/test_discrete_geno.trainedModel_trainingSample_Predictions.csv\n    # outputs/test_discrete_geno.trainedModel_withheldSample_Predictions.csv\n    # outputs/test_discrete_geno.trainedModel_withheldSample_ROC.png\n    # outputs/test_discrete_geno.trainedModel_withheldSample_probabilities.png\n    # outputs/test_discrete_geno.training_withheldSamples_performanceMetrics.csv\n\n# 2. HARMONIZE TEST DATASET IF USING PLINK/GENOTYPES\ngenoml harmonize \\\n--test_geno_prefix examples/discrete/validation \\\n--test_prefix outputs/validation_test_discrete_geno \\\n--ref_model_prefix outputs/test_discrete_geno \\\n--training_snps_alleles outputs/test_discrete_geno.variants_and_alleles.tab\n# Files made: \n    # outputs/validation_test_discrete_geno.refColsHarmonize_toKeep.txt\n    # outputs/validation_test_discrete_geno.refSNPs_andAlleles.bed\n    # outputs/validation_test_discrete_geno.refSNPs_andAlleles.bim\n    # outputs/validation_test_discrete_geno.refSNPs_andAlleles.fam\n\n# 3. MUNGE THE TEST DATASET ON REFERENCE MODEL COLUMNS\ngenoml discrete supervised munge \\\n--prefix outputs/validation_test_discrete_geno \\\n--geno outputs/validation_test_discrete_geno.refSNPs_andAlleles \\\n--pheno examples/discrete/validation_pheno.csv \\\n--addit examples/discrete/validation_addit.csv \\\n--ref_cols_harmonize outputs/validation_test_discrete_geno.refColsHarmonize_toKeep.txt\n# Files made: \n    # outputs/validation_test_discrete_geno.finalHarmonizedCols_toKeep.txt\n    # outputs/validation_test_discrete_geno.list_features.txt\n    # outputs/test_discrete_geno.variants_and_alleles.tab\n    # outputs/validation_test_discrete_geno.dataForML.h5\n\n# 4. RETRAIN REFERENCE MODEL ON INTERSECTING COLUMNS BETWEEN REFERENCE AND TEST\ngenoml discrete supervised train \\\n--prefix outputs/test_discrete_geno \\\n--matching_columns outputs/validation_test_discrete_geno.finalHarmonizedCols_toKeep.txt\n# Note: This replaces the trained model you made in step 1! \n# Files made: \n    # outputs/test_discrete_geno.best_algorithm.txt\n    # outputs/test_discrete_geno.trainedModel.joblib\n    # outputs/test_discrete_geno.trainedModel_trainingSample_Predictions.csv\n    # outputs/test_discrete_geno.trainedModel_withheldSample_Predictions.csv\n    # outputs/test_discrete_geno.trainedModel_withheldSample_ROC.png\n    # outputs/test_discrete_geno.trainedModel_withheldSample_probabilities.png\n    # outputs/test_discrete_geno.training_withheldSamples_performanceMetrics.csv\n\n\n# 5. TEST RETRAINED REFERENCE MODEL ON UNSEEN DATA\ngenoml discrete supervised test \\\n--prefix outputs/validation_test_discrete_geno \\\n--test_prefix outputs/validation_test_discrete_geno \\\n--ref_model_prefix outputs/test_discrete_geno.trainedModel\n# Files made: \n    # outputs/validation_test_discrete_geno.testedModel_allSample_predictions.csv\n    # outputs/validation_test_discrete_geno.testedModel_allSample_probabilities.png\n    # outputs/validation_test_discrete_geno.testedModel_allSample_ROC.png\n    # outputs/validation_test_discrete_geno.testedModel_allSamples_performanceMetrics.csv\n")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"When munging the test dataset on the reference model columns using the ",Object(o.b)("inlineCode",{parentName:"p"},"--ref_cols_harmonize"),", be sure not to include the ",Object(o.b)("inlineCode",{parentName:"p"},"--feature_selection")," flag, as you have already specified the columns to keep moving forward."))),Object(o.b)("a",{id:"5"}))}u.isMDXComponent=!0}}]);