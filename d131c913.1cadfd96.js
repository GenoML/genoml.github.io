(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{102:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),o=t(7),r=(t(0),t(111)),i={last_modified_on:"2020-12-18",id:"configuration",title:"Configuration"},c={unversionedId:"setup/configuration",id:"setup/configuration",isDocsHomePage:!1,title:"Configuration",description:"Example dataset",source:"@site/docs/setup/configuration.md",slug:"/setup/configuration",permalink:"/docs/setup/configuration",editUrl:"https://github.com/genoml/genoml.github.io/edit/main/docs/setup/configuration.md",version:"current",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/setup/installation"},next:{title:"Input data",permalink:"/docs/guides/input"}},l=[{value:"Example dataset",id:"example-dataset",children:[]},{value:"OPTIONAL Setting up a virtual environment via Conda",id:"optional-setting-up-a-virtual-environment-via-conda",children:[]}],s={toc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"example-dataset"},"Example dataset"),Object(r.b)("p",null,"You can test GenoML on an example dataset. To install the ",Object(r.b)("inlineCode",{parentName:"p"},"examples/")," directory (~315 KB), you can use SVN (pre-installed on most Macs):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"svn export https://github.com/GenoML/genoml2.git/trunk/examples\n")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"When you ",Object(r.b)("inlineCode",{parentName:"p"},"pip install")," this package, the ",Object(r.b)("inlineCode",{parentName:"p"},"examples/")," folder is also downloaded! However, if you still want to download the directory and SVN is not pre-installed, you can download it via Homebrew if you have that installed using ",Object(r.b)("inlineCode",{parentName:"p"},"brew install svn"),". "))),Object(r.b)("h2",{id:"optional-setting-up-a-virtual-environment-via-conda"},"[OPTIONAL]"," Setting up a virtual environment via Conda"),Object(r.b)("p",null,"You can create a virtual environment to run GenoML, if you prefer.\nIf you already have the ",Object(r.b)("a",{parentName:"p",href:"https://www.anaconda.com/products/individual#download"},"Anaconda Distribution"),", this is fairly simple."),Object(r.b)("p",null,"To create and activate a virtual environment:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"# To create a virtual environment\nconda create -n GenoML python=3.7\n\n# To activate a virtual environment\nconda activate GenoML\n\n# To install requirements via pip \npip install -r requirements.txt\n    # If issues installing xgboost from requirements - (3 options)\n        # use Homebrew to \n            # xcode-select --install\n            # brew install gcc@7\n        # conda install -c conda-forge xgboost \n        # pip install xgboost==0.90\n\n## MISC\n# To deactivate the virtual environment\n# conda deactivate GenoML\n\n# To delete your virtual environment\n# conda env remove -n GenoML\n")),Object(r.b)("p",null,"To install the GenoML in the user's path in a virtual environment, you can do the following:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"# Install the package at this path\npip install .\n\n# MISC\n    # To save out the environment requirements to a .txt file\n# pip freeze > requirements.txt\n\n    # Removing a conda virtualenv\n# conda remove --name GenoML --all \n")))}p.isMDXComponent=!0},111:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return t?o.a.createElement(b,c(c({ref:n},s),{},{components:t})):o.a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);