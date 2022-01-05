"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[223],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||l;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},736:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),i=["components"],o={},u=void 0,s={unversionedId:"api/file_utils",id:"api/file_utils",title:"file_utils",description:"pymusas.file_utils",source:"@site/docs/api/file_utils.md",sourceDirName:"api",slug:"/api/file_utils",permalink:"/pymusas/api/file_utils",editUrl:"https://github.com/ucrel/pymusas/edit/main/docs/docs/api/file_utils.md",tags:[],version:"current",lastUpdatedBy:"Andrew Moore",lastUpdatedAt:1641381337,formattedLastUpdatedAt:"1/5/2022",frontMatter:{},sidebar:"api",previous:{title:"config",permalink:"/pymusas/api/config"},next:{title:"lexicon_collection",permalink:"/pymusas/api/lexicon_collection"}},p=[{value:"ensure_path",id:"ensure_path",children:[],level:3},{value:"download_url_file",id:"download_url_file",children:[],level:3}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"source-div"},(0,l.kt)("p",null,(0,l.kt)("i",null,"pymusas"),(0,l.kt)("strong",null,".file_utils")),(0,l.kt)("p",null,(0,l.kt)("a",{className:"sourcelink",href:"https://github.com/UCREL/pymusas/blob/main/pymusas/file_utils.py"},"[SOURCE]"))),(0,l.kt)("div",null),(0,l.kt)("hr",null),(0,l.kt)("a",{id:"pymusas.file_utils.ensure_path"}),(0,l.kt)("h3",{id:"ensure_path"},"ensure","_","path"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def ensure_path(path: Union[str, Path]) -> Path\n")),(0,l.kt)("p",null,"Ensure string is converted to a Path."),(0,l.kt)("p",null,"This is a more restrictive version of spaCy's ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/explosion/spaCy/blob/ac05de2c6c708e33ebad6c901e674e1e8bdc0688/spacy/util.py#L358"},"ensure_path")),(0,l.kt)("h4",{id:"ensure_path.parameters"},"Parameters",(0,l.kt)("a",{className:"headerlink",href:"#ensure_path.parameters",title:"Permanent link"},"\xb6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"path")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"Union[str, Path]")," ",(0,l.kt)("br",null),"\nIf string, it's converted to Path.")),(0,l.kt)("h4",{id:"ensure_path.returns"},"Returns",(0,l.kt)("a",{className:"headerlink",href:"#ensure_path.returns",title:"Permanent link"},"\xb6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Path")," ",(0,l.kt)("br",null))),(0,l.kt)("a",{id:"pymusas.file_utils.download_url_file"}),(0,l.kt)("h3",{id:"download_url_file"},"download","_","url","_","file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def download_url_file(url: str) -> str\n")),(0,l.kt)("p",null,"Returns a path to the contents download from the ",(0,l.kt)("inlineCode",{parentName:"p"},"url"),"."),(0,l.kt)("p",null,"This function will first check if the downloaded content already exists\nbased on a cached file within the ",(0,l.kt)("a",{parentName:"p",href:"/pymusas/api/config/#pymusas_cache_home"},(0,l.kt)("inlineCode",{parentName:"a"},"pymusas.config.PYMUSAS_CACHE_HOME"))," directory.\nIf it does then the cached file path will be returned else the the content\nwill be downloaded and cached."),(0,l.kt)("p",null,"Code reference ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/allenai/allennlp/blob/e5d332a592a8624e1f4ee7a9a7d30a90991db83c/allennlp/common/file_utils.py#L536"},"AllenNLP")),(0,l.kt)("h4",{id:"download_url_file.parameters"},"Parameters",(0,l.kt)("a",{className:"headerlink",href:"#download_url_file.parameters",title:"Permanent link"},"\xb6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"url")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"str")," ",(0,l.kt)("br",null),"\nThe URL address to the file to be downloaded.")),(0,l.kt)("h4",{id:"download_url_file.returns"},"Returns",(0,l.kt)("a",{className:"headerlink",href:"#download_url_file.returns",title:"Permanent link"},"\xb6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str")," ",(0,l.kt)("br",null))))}d.isMDXComponent=!0}}]);