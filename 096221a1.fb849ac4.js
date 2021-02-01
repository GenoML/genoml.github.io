(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||a;return n?i.a.createElement(m,c(c({ref:t},u),{},{components:n})):i.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),a=(n(0),n(105)),o={last_modified_on:"2020-12-18",id:"training",title:"Model training"},c={unversionedId:"guides/training",id:"guides/training",isDocsHomePage:!1,title:"Model training",description:"Training with GenoML evaluates several different algorithms and outputs the best algorithm based on a specific metric that can be tweaked using the --metric_max flag (default is AUC).",source:"@site/docs/guides/training.md",slug:"/guides/training",permalink:"/docs/guides/training",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/guides/training.md",version:"current",sidebar:"docs",previous:{title:"Data munging",permalink:"/docs/guides/munging"},next:{title:"Model tuning",permalink:"/docs/guides/tuning"}},l=[],u={toc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Training with GenoML evaluates several different algorithms and outputs the best algorithm based on a specific metric that can be tweaked using the ",Object(a.b)("inlineCode",{parentName:"p"},"--metric_max")," flag ",Object(a.b)("em",{parentName:"p"},"(default is AUC)"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Required")," arguments for GenoML are the following: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"data")," : Is the data ",Object(a.b)("inlineCode",{parentName:"li"},"continuous")," or ",Object(a.b)("inlineCode",{parentName:"li"},"discrete"),"?"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"method"),": Do you want to use ",Object(a.b)("inlineCode",{parentName:"li"},"supervised")," or ",Object(a.b)("inlineCode",{parentName:"li"},"unsupervised")," machine learning? ",Object(a.b)("em",{parentName:"li"},"(unsupervised currently under development)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"mode"),":  would you like to ",Object(a.b)("inlineCode",{parentName:"li"},"munge"),", ",Object(a.b)("inlineCode",{parentName:"li"},"train"),", ",Object(a.b)("inlineCode",{parentName:"li"},"tune"),", or ",Object(a.b)("inlineCode",{parentName:"li"},"test")," your model?"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--prefix")," : Where would you like your outputs to be saved?")),Object(a.b)("p",null,"The most basic command to train your model looks like the following; it looks for the ",Object(a.b)("inlineCode",{parentName:"p"},"*.dataForML")," file that was generated in the munging step: "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"# Running GenoML supervised training after munging on discrete data\n\ngenoml discrete supervised train \\\n--prefix outputs/test_discrete_geno\n")),Object(a.b)("p",null,"If you would like to determine the best competing algorithm by something other than the AUC, you can do so by changing the ",Object(a.b)("inlineCode",{parentName:"p"},"--metric_max")," flag (Options include ",Object(a.b)("inlineCode",{parentName:"p"},"AUC"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Balanced_Accuracy"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Sensitivity"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"Specificity"),") :"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"# Running GenoML supervised training after munging on discrete data and specifying the metric to maximize by \n\ngenoml discrete supervised train \\\n--prefix outputs/test_discrete_geno \\\n--metric_max Sensitivity\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("em",{parentName:"p"},"Note:")," The ",Object(a.b)("inlineCode",{parentName:"p"},"--metric_max")," flag is only available for discrete datasets.")),Object(a.b)("a",{id:"3"}))}s.isMDXComponent=!0}}]);