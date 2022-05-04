"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[216],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return k}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),o=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=o(e.components);return n.createElement(u.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=o(t),k=a,d=m["".concat(u,".").concat(k)]||m[k]||c[k]||s;return t?n.createElement(d,l(l({ref:r},p),{},{components:t})):n.createElement(d,l({ref:r},p))}));function k(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,l=new Array(s);l[0]=m;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var o=2;o<s;o++)l[o]=t[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7188:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return p},default:function(){return m}});var n=t(3117),a=t(102),s=(t(7294),t(3905)),l=["components"],i={},u=void 0,o={unversionedId:"api/spacy_api/rankers",id:"api/spacy_api/rankers",title:"rankers",description:"pymusas.spacy_api.rankers",source:"@site/docs/api/spacy_api/rankers.md",sourceDirName:"api/spacy_api",slug:"/api/spacy_api/rankers",permalink:"/pymusas/api/spacy_api/rankers",editUrl:"https://github.com/ucrel/pymusas/edit/main/docs/docs/api/spacy_api/rankers.md",tags:[],version:"current",lastUpdatedBy:"Andrew Moore",lastUpdatedAt:1651673952,formattedLastUpdatedAt:"5/4/2022",frontMatter:{},sidebar:"api",previous:{title:"pos_mapper",permalink:"/pymusas/api/spacy_api/pos_mapper"},next:{title:"utils",permalink:"/pymusas/api/spacy_api/utils"}},p=[{value:"contextual_rule_based_ranker",id:"contextual_rule_based_ranker",children:[],level:3}],c={toc:p};function m(e){var r=e.components,t=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"source-div"},(0,s.kt)("p",null,(0,s.kt)("i",null,"pymusas"),(0,s.kt)("i",null,".spacy_api"),(0,s.kt)("strong",null,".rankers")),(0,s.kt)("p",null,(0,s.kt)("a",{className:"sourcelink",href:"https://github.com/UCREL/pymusas/blob/main/pymusas/spacy_api/rankers.py"},"[SOURCE]"))),(0,s.kt)("div",null),(0,s.kt)("hr",null),(0,s.kt)("p",null,"spaCy registered functions for creating the following rankers:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/pymusas/api/rankers/lexicon_entry/#contextualrulebasedranker"},(0,s.kt)("inlineCode",{parentName:"a"},"pymusas.rankers.lexicon_entry.ContextualRuleBasedRanker")))),(0,s.kt)("a",{id:"pymusas.spacy_api.rankers.contextual_rule_based_ranker"}),(0,s.kt)("h3",{id:"contextual_rule_based_ranker"},"contextual","_","rule","_","based","_","ranker"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"@spacy.util.registry.misc('pymusas.rankers.ContextualRuleBasedRanker.v1')\ndef contextual_rule_based_ranker(\n    rules: List[Rule]\n) -> ContextualRuleBasedRanker\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"pymusas.rankers.ContextualRuleBasedRanker.v1")," is a registered function\nunder the ",(0,s.kt)("inlineCode",{parentName:"p"},"@misc")," function register."),(0,s.kt)("p",null,"The parameters of this function are passed to the\n",(0,s.kt)("a",{parentName:"p",href:"/pymusas/api/rankers/lexicon_entry/#get_construction_arguments"},(0,s.kt)("inlineCode",{parentName:"a"},"pymusas.rankers.lexicon_entry.get_construction_arguments")),"\nfunction of which the output of this function is then used as arguments\nto the ",(0,s.kt)("a",{parentName:"p",href:"/pymusas/api/rankers/lexicon_entry/#contextualrulebasedranker"},(0,s.kt)("inlineCode",{parentName:"a"},"pymusas.rankers.lexicon_entry.ContextualRuleBasedRanker")),"\nconstructor."),(0,s.kt)("h4",{id:"contextual_rule_based_ranker.parameters"},"Parameters",(0,s.kt)("a",{className:"headerlink",href:"#contextual_rule_based_ranker.parameters",title:"Permanent link"},"\xb6")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"rules")," : ",(0,s.kt)("inlineCode",{parentName:"li"},"List[Rule]")," ",(0,s.kt)("br",null),"\nA ",(0,s.kt)("inlineCode",{parentName:"li"},"List")," of ",(0,s.kt)("a",{parentName:"li",href:"/pymusas/api/taggers/rules/rule/#rule"},(0,s.kt)("inlineCode",{parentName:"a"},"pymusas.taggers.rules.rule.Rule")),".")),(0,s.kt)("h4",{id:"contextual_rule_based_ranker.returns"},"Returns",(0,s.kt)("a",{className:"headerlink",href:"#contextual_rule_based_ranker.returns",title:"Permanent link"},"\xb6")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/pymusas/api/rankers/lexicon_entry/#contextualrulebasedranker"},(0,s.kt)("inlineCode",{parentName:"a"},"pymusas.rankers.lexicon_entry.ContextualRuleBasedRanker"))," ",(0,s.kt)("br",null))))}m.isMDXComponent=!0}}]);