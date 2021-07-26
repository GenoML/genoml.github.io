(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(7),r=(n(0),n(110)),o=["components"],s={last_modified_on:"2020-12-18",id:"input",title:"Input data"},p={unversionedId:"guides/input",id:"guides/input",isDocsHomePage:!1,title:"Input data",description:"Here is a quick walkthrough of input file formats and general suggestions.",source:"@site/docs/guides/input.md",slug:"/guides/input",permalink:"/docs/guides/input",editUrl:"https://github.com/genoml/genoml.github.io/edit/main/docs/guides/input.md",version:"current",sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/setup/configuration"},next:{title:"Data munging",permalink:"/docs/guides/munging"}},l=[{value:"Phenotypes (Required)",id:"phenotypes-required",children:[]},{value:"Genotypes (Optional)",id:"genotypes-optional",children:[]},{value:"Additional Data (Optional)",id:"additional-data-optional",children:[]},{value:"GWAS Summary Statistics (Optional)",id:"gwas-summary-statistics-optional",children:[]}],c={toc:l};function u(e){var t=e.components,n=Object(i.a)(e,o);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Here is a quick walkthrough of input file formats and general suggestions. "),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You always need a ",Object(r.b)("strong",{parentName:"p"},"phenotype")," file and at least ",Object(r.b)("strong",{parentName:"p"},"genotype")," or ",Object(r.b)("strong",{parentName:"p"},"additional")," feature data. You have to have sn input to predict the phenotype."))),Object(r.b)("h2",{id:"phenotypes-required"},"Phenotypes (Required)"),Object(r.b)("p",null,"A basic two-column CSV with ",Object(r.b)("strong",{parentName:"p"},"ID")," and ",Object(r.b)("strong",{parentName:"p"},"PHENO")," corresponding to samples in the genotype data.",Object(r.b)("br",{parentName:"p"}),"\n","ID must be a string, i.e., composed of letters and possibly some combination of letters and numbers.\nIn general, there should be no missing data.  Please code discrete phenotypes as 0/1, with 1 as a case and 0 as a control. Continuous phenotypes should be relatively normally distributed if possible."),Object(r.b)("h2",{id:"genotypes-optional"},"Genotypes (Optional)"),Object(r.b)("p",null,"Generally, these should be single nucleotide polymorphisms and samples passing standard GWAS type quality controls."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If using imputed data, we suggest filtering at an imputation quality > 0.8 and using the hard call genotypes"),Object(r.b)("li",{parentName:"ul"},"Additionally, rarer variants can be problematic, and we suggest filtering at a minor allele frequency > 1% (or > 5%) if sample size permits. The fewer samples you have, the less you should focus on variants that have lower minor allele frequencies"),Object(r.b)("li",{parentName:"ul"},"Limiting missingness in these files is helpful even though there is secondary imputation as part of GenoML.")),Object(r.b)("p",null,"This input data is the standard .bed, .bim and .fam binaries from ",Object(r.b)("a",{parentName:"p",href:"https://www.cog-genomics.org/plink/1.9/input#bed"},"PLINK"),".  "),Object(r.b)("p",null,"We are working on teaching GenoML to eat more file types; if you have some favorite formats for genotypes, please get in touch either by posting an issue on GitHub or via ",Object(r.b)("a",{parentName:"p",href:"https://twitter.com/geno_ml"},"Twitter"),"."),Object(r.b)("h2",{id:"additional-data-optional"},"Additional Data (Optional)"),Object(r.b)("p",null,"Comma-delimited file with the first header columns ",Object(r.b)("strong",{parentName:"p"},"ID"),", the following columns can contain any numeric data deemed necessary.",Object(r.b)("br",{parentName:"p"}),"\n","In general, we use this for parameters we want to use as predictors that aren't SNPs.  For example, this could include clinical data or thousands of gene expression probes, whatever you want.  Please make sure the file has headers that are strings (i.e., not just numbers)"),Object(r.b)("h2",{id:"gwas-summary-statistics-optional"},"GWAS Summary Statistics (Optional)"),Object(r.b)("p",null,"This is a big comma delimited text file of genome-wide association study summary stats.\nThis file must have a header as follows, ",Object(r.b)("em",{parentName:"p"},"SNP A1 A2 freq b se p N"),", where ",Object(r.b)("em",{parentName:"p"},"SNP")," is a unique variant ID, ",Object(r.b)("em",{parentName:"p"},"A1")," is the effect allele, ",Object(r.b)("em",{parentName:"p"},"A2")," is the reference allele, ",Object(r.b)("em",{parentName:"p"},"freq")," is the frequency of A1, ",Object(r.b)("em",{parentName:"p"},"b")," is the beta coefficient from GWAS, ",Object(r.b)("em",{parentName:"p"},"se")," is the standard error from GWAS, ",Object(r.b)("em",{parentName:"p"},"p")," is the p-value from GWAS and ",Object(r.b)("em",{parentName:"p"},"N")," is the sample size. No missing data is allowed."))}u.isMDXComponent=!0},110:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),c=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||r;return n?i.a.createElement(b,s(s({ref:t},l),{},{components:n})):i.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);