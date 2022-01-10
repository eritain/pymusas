"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return _}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(r),_=a,d=m["".concat(i,".").concat(_)]||m[_]||c[_]||s;return r?n.createElement(d,p(p({ref:t},u),{},{components:r})):n.createElement(d,p({ref:t},u))}));function _(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,p=new Array(s);p[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var l=2;l<s;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1742:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var n=r(3117),a=r(102),s=(r(7294),r(3905)),p=["components"],o={},i=void 0,l={unversionedId:"api/pos_mapper",id:"api/pos_mapper",title:"pos_mapper",description:"pymusas.pos_mapper",source:"@site/docs/api/pos_mapper.md",sourceDirName:"api",slug:"/api/pos_mapper",permalink:"/pymusas/api/pos_mapper",editUrl:"https://github.com/ucrel/pymusas/edit/main/docs/docs/api/pos_mapper.md",tags:[],version:"current",lastUpdatedBy:"Paul Rayson",lastUpdatedAt:1641803503,formattedLastUpdatedAt:"1/10/2022",frontMatter:{},sidebar:"api",previous:{title:"lexicon_collection",permalink:"/pymusas/api/lexicon_collection"},next:{title:"rule_based",permalink:"/pymusas/api/taggers/rule_based"}},u=[{value:"UPOS_TO_USAS_CORE",id:"upos_to_usas_core",children:[],level:4},{value:"PENN_CHINESE_TREEBANK_TO_USAS_CORE",id:"penn_chinese_treebank_to_usas_core",children:[],level:4},{value:"upos_to_usas_core",id:"upos_to_usas_core-1",children:[],level:3}],c={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,p);return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"source-div"},(0,s.kt)("p",null,(0,s.kt)("i",null,"pymusas"),(0,s.kt)("strong",null,".pos_mapper")),(0,s.kt)("p",null,(0,s.kt)("a",{className:"sourcelink",href:"https://github.com/UCREL/pymusas/blob/main/pymusas/pos_mapper.py"},"[SOURCE]"))),(0,s.kt)("div",null),(0,s.kt)("hr",null),(0,s.kt)("h4",{id:"pymusas.pos_mapper.attributes"},"Attributes",(0,s.kt)("a",{className:"headerlink",href:"#pymusas.pos_mapper.attributes",title:"Permanent link"},"\xb6")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"UPOS","_","TO","_","USAS","_","CORE")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"Dict[str, List[str]]")," ",(0,s.kt)("br",null),"\nA mapping from the Universal Part Of Speech (UPOS) tagset to the USAS core tagset. The UPOS tagset used\nhere is the same as that used by the ",(0,s.kt)("a",{parentName:"p",href:"https://universaldependencies.org/u/pos/"},"Universal Dependencies Treebank project"),".\nThis is slightly different to the original presented in the\n",(0,s.kt)("a",{parentName:"p",href:"http://www.lrec-conf.org/proceedings/lrec2012/pdf/274_Paper.pdf"},"paper by Petrov et al. 2012"),",\nfor this original tagset see the following ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/slavpetrov/universal-pos-tags"},"GitHub repository"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"PENN","_","CHINESE","_","TREEBANK","_","TO","_","USAS","_","CORE")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"Dict[str, List[str]]")," ",(0,s.kt)("br",null),"\nA mapping from the ",(0,s.kt)("a",{parentName:"p",href:"https://verbs.colorado.edu/chinese/posguide.3rd.ch.pdf"},"Penn Chinese Treebank tagset"),"\nto the USAS core tagset. The Penn Chinese Treebank tagset here is slightly different to the original\nas it contains three extra tags, ",(0,s.kt)("inlineCode",{parentName:"p"},"X"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"URL"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"INF"),", that appear to be unique to\nthe ",(0,s.kt)("a",{parentName:"p",href:"https://spacy.io/models/zh"},"spaCy Chinese models"),". For more information on how this mapping was\ncreated, see the following ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/UCREL/pymusas/issues/19"},"GitHub issue"),"."))),(0,s.kt)("a",{id:"pymusas.pos_mapper.UPOS_TO_USAS_CORE"}),(0,s.kt)("h4",{id:"upos_to_usas_core"},"UPOS","_","TO","_","USAS","_","CORE"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"UPOS_TO_USAS_CORE: Dict[str, List[str]] = {\n    'ADJ': ['adj'],\n    'ADP': ['prep'],\n    'ADV': ['adv'],\n    'AUX': ['verb'],\n    'CCONJ': ['c ...\n")),(0,s.kt)("a",{id:"pymusas.pos_mapper.PENN_CHINESE_TREEBANK_TO_USAS_CORE"}),(0,s.kt)("h4",{id:"penn_chinese_treebank_to_usas_core"},"PENN","_","CHINESE","_","TREEBANK","_","TO","_","USAS","_","CORE"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"PENN_CHINESE_TREEBANK_TO_USAS_CORE: Dict[str, List[str]] = {\n    'AS': ['part'],\n    'DEC': ['part'],\n    'DEG': ['part'],\n    'DER': ['part'],\n    'DEV': ['pa ...\n")),(0,s.kt)("a",{id:"pymusas.pos_mapper.upos_to_usas_core"}),(0,s.kt)("h3",{id:"upos_to_usas_core-1"},"upos","_","to","_","usas","_","core"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def upos_to_usas_core(upos_tag: str) -> List[str]\n")),(0,s.kt)("p",null,"Given a ",(0,s.kt)("a",{parentName:"p",href:"http://www.lrec-conf.org/proceedings/lrec2012/pdf/274_Paper.pdf"},"Universal Part Of Speech (UPOS) tag"),"\nit returns a ",(0,s.kt)("inlineCode",{parentName:"p"},"List")," of USAS core POS tags that are equivalent, whereby if the\nlength of the ",(0,s.kt)("inlineCode",{parentName:"p"},"List")," is greater than ",(0,s.kt)("inlineCode",{parentName:"p"},"1")," then the first tag in the ",(0,s.kt)("inlineCode",{parentName:"p"},"List"),"\nis the most equivalent tag."),(0,s.kt)("p",null,"If the List is empty then an invalid UPOS tag was given."),(0,s.kt)("p",null,"The mappings between UPOS and USAS core can be seen in ",(0,s.kt)("a",{parentName:"p",href:"#upos_to_usas_core"},(0,s.kt)("inlineCode",{parentName:"a"},"UPOS_TO_USAS_CORE"))),(0,s.kt)("h4",{id:"upos_to_usas_core.parameters"},"Parameters",(0,s.kt)("a",{className:"headerlink",href:"#upos_to_usas_core.parameters",title:"Permanent link"},"\xb6")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"upos","_","tag")," : ",(0,s.kt)("inlineCode",{parentName:"li"},"str")," ",(0,s.kt)("br",null),"\nUPOS tag, expected to be all upper case.")),(0,s.kt)("h4",{id:"upos_to_usas_core.returns"},"Returns",(0,s.kt)("a",{className:"headerlink",href:"#upos_to_usas_core.returns",title:"Permanent link"},"\xb6")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"List[str]")," ",(0,s.kt)("br",null))),(0,s.kt)("h4",{id:"upos_to_usas_core.examples"},"Examples",(0,s.kt)("a",{className:"headerlink",href:"#upos_to_usas_core.examples",title:"Permanent link"},"\xb6")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"from pymusas.pos_mapper import upos_to_usas_core\nassert upos_to_usas_core('CCONJ') == ['conj']\n# Most equivalent tag for 'X' is 'fw'\nassert upos_to_usas_core('X') == ['fw', 'xx']\nassert upos_to_usas_core('Unknown') == []\n")))}m.isMDXComponent=!0}}]);