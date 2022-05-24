"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9003:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],l={title:"Multi Word Expression Syntax",sidebar_position:1},s=void 0,u={unversionedId:"usage/notes/mwe_syntax",id:"usage/notes/mwe_syntax",title:"Multi Word Expression Syntax",description:"These notes explain how to interpret the Multi Word Expression (MWE) syntax that is contained in the MWE lexicon files, which can be found in the Multilingual-USAS GitHub repository. The MWE syntax has also been defined and used in previous papers on the USAS semantic tagger, e.g. figure 1 of Extracting Multiword Expressions with A Semantic Tagger by Piao et al. 2003 and figure 3 of The UCREL Semantic Analysis System by Rayson et al. 2004. Within this documentation an example that uses the MWE syntax will be called a MWE template. An example of the MWE syntax can be seen below, whereby this pattern would capture words like Pacific Ocean and Atlantic Ocean.",source:"@site/docs/usage/notes/mwe_syntax.md",sourceDirName:"usage/notes",slug:"/usage/notes/mwe_syntax",permalink:"/pymusas/usage/notes/mwe_syntax",editUrl:"https://github.com/ucrel/pymusas/edit/main/docs/docs/usage/notes/mwe_syntax.md",tags:[],version:"current",lastUpdatedBy:"Andrew Moore",lastUpdatedAt:1653408794,formattedLastUpdatedAt:"5/24/2022",sidebarPosition:1,frontMatter:{title:"Multi Word Expression Syntax",sidebar_position:1},sidebar:"docs",previous:{title:"Tag CoNLL-U Files",permalink:"/pymusas/usage/how_to/tag_conll_u_files"}},p=[{value:"General syntax structure",id:"general-syntax-structure",children:[],level:2},{value:"Syntax symbol definitions",id:"syntax-symbol-definitions",children:[{value:"Wildcard",id:"wildcard",children:[{value:"Examples",id:"examples",children:[],level:4}],level:3},{value:"Curly Braces",id:"curly-braces",children:[{value:"Examples",id:"examples-1",children:[],level:4}],level:3}],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"These notes explain how to interpret the Multi Word Expression (MWE) syntax that is contained in the MWE lexicon files, which can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/UCREL/Multilingual-USAS#multi-word-expression-mwe-lexicon-file-format"},"Multilingual-USAS GitHub repository"),". The MWE syntax has also been defined and used in previous papers on the USAS semantic tagger, e.g. figure 1 of ",(0,o.kt)("a",{parentName:"p",href:"https://aclanthology.org/W03-1807.pdf"},"Extracting Multiword Expressions with A Semantic Tagger by Piao et al. 2003")," and figure 3 of ",(0,o.kt)("a",{parentName:"p",href:"https://www.lancaster.ac.uk/staff/rayson/publications/usas_lrec04ws.pdf"},"The UCREL Semantic Analysis System by Rayson et al. 2004"),". Within this documentation an example that uses the MWE syntax will be called a ",(0,o.kt)("strong",{parentName:"p"},"MWE template"),". An example of the MWE syntax can be seen below, whereby this pattern would capture words like ",(0,o.kt)("inlineCode",{parentName:"p"},"Pacific Ocean")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Atlantic Ocean"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="MWE template example"',title:'"MWE',template:!0,'example"':!0},"*_* Ocean_N*1\n")),(0,o.kt)("p",null,"The MWE syntax is best described as a simplified pattern matching syntax/code, like a regular expression, that is used to capture MWEs that have similar structure."),(0,o.kt)("p",null,"Structure of this documentation page:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#general-syntax-structure"},"General syntax structure")," - explains the general MWE syntax structure."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#syntax-symbol-definitions"},"Syntax symbol definitions")," - will define special syntax symbols that allow the MWE syntax to capture more complicated MWE, e.g. inflection variants and discontinuous MWE.")),(0,o.kt)("h2",{id:"general-syntax-structure"},"General syntax structure"),(0,o.kt)("p",null,"The general syntax can be best seen below, in which the MWE syntax is sequence of words/tokens and Part Of Speech (POS) tags joined together by an underscore and separated by a single whitespace:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="MWE general structure"',title:'"MWE',general:!0,'structure"':!0},"word1_POS1 word2_POS2 word3_POS3\n")),(0,o.kt)("p",null,"This general syntax allows us to find MWE within text using both the token and the corresponding POS. For instance given the text:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"I went to the river bank after walking back from the bank.\n")),(0,o.kt)("p",null,"and the following MWE template:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"river_noun bank_noun\n")),(0,o.kt)("p",null,"The MWE ",(0,o.kt)("inlineCode",{parentName:"p"},"river bank")," would be extracted from the given text."),(0,o.kt)("h2",{id:"syntax-symbol-definitions"},"Syntax symbol definitions"),(0,o.kt)("h3",{id:"wildcard"},"Wildcard"),(0,o.kt)("p",null,"The wildcard symbol, ",(0,o.kt)("inlineCode",{parentName:"p"},"*"),", states that zero or more characters may appear after the word token and/or Part Of Speech (POS) tag."),(0,o.kt)("p",null,"This can be most useful for capturing inflectional variants and increasing the recall of your MWE."),(0,o.kt)("h4",{id:"examples"},"Examples"),(0,o.kt)("p",null,"To take into account that ",(0,o.kt)("inlineCode",{parentName:"p"},"Amazon")," could be a proper noun (POS tag = ",(0,o.kt)("inlineCode",{parentName:"p"},"pnoun"),") or a common noun (POS tag = ",(0,o.kt)("inlineCode",{parentName:"p"},"noun"),") we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," at the start of the POS tag ",(0,o.kt)("inlineCode",{parentName:"p"},"noun")," to allow for both ",(0,o.kt)("inlineCode",{parentName:"p"},"pnoun")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"noun")," as the POS tag for the token ",(0,o.kt)("inlineCode",{parentName:"p"},"Amazon"),", whereby in the example MWE template below we are trying to capture the MWE that represents the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Amazon_rainforest"},"Amazon rainforest")," in a text."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"Amazon_*noun rainforest_noun\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," to state that it can be any token or POS, for instance if we want to capture the text of any type of boot, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"ski boot"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ski boots"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"walking boot"),", etc. we could write the following MWE template:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"*_noun boot*_noun\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"If the POS tagset you are working with is more fine grained than having just ",(0,o.kt)("inlineCode",{parentName:"p"},"pnoun")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"noun")," for all types of nouns, e.g. for ",(0,o.kt)("a",{parentName:"p",href:"https://ucrel.lancs.ac.uk/claws7tags.html"},"CLAWS 7 tagset")," which includes ",(0,o.kt)("inlineCode",{parentName:"p"},"NN1")," for a singular common noun and ",(0,o.kt)("inlineCode",{parentName:"p"},"NN2")," for a plural common noun, then you could write the MWE template like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"*_NN1 boot*_NN*\n")),(0,o.kt)("h3",{id:"curly-braces"},"Curly Braces"),(0,o.kt)("p",null,"The curly braces, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"{}")," can be used to match discontinuous MWE. "),(0,o.kt)("p",null,"The only symbols that can be used within a curly brace are: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"word tokens"),(0,o.kt)("li",{parentName:"ul"},"POS tags"),(0,o.kt)("li",{parentName:"ul"},'the item "Np"'),(0,o.kt)("li",{parentName:"ul"},"The wildcard symbol attached to a word token or POS tag"),(0,o.kt)("li",{parentName:"ul"},"A slash (",(0,o.kt)("inlineCode",{parentName:"li"},"/"),") to separate the words and/or POS tags.")),(0,o.kt)("p",null,"The curly braces format states that word tokens and/or the POS types defined within the curly brace can ",(0,o.kt)("strong",{parentName:"p"},"optionally")," appear, i.e. zero or more times, at that point between the two tokens in the discontinuous MWE. The slash allows you to have more than one type of word and/or POS tag defined within the curly brace. The ordering of the elements between slashes is not significant. Items inside the curly braces are not considered part of the MWE, i.e. not semantically tagged as such, but just as intervening items (and given their semantic tags from other methods)."),(0,o.kt)("p",null,'The item "Np" is interpreted as an intervening noun phrase between two tokens of a MWE if a noun phrase chunker has been used to mark up noun phrases in the text.'),(0,o.kt)("p",null,"A curly brace sequence ",(0,o.kt)("strong",{parentName:"p"},"cannot")," start or end a MWE template, it must appear between tokens, but more than one set of curly braces can appear in an MWE template."),(0,o.kt)("h4",{id:"examples-1"},"Examples"),(0,o.kt)("p",null,'To capture "asked to" as a discontinuous MWE in the following text:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"I asked David Brown to go over to the house next door.\n")),(0,o.kt)("p",null,"You can use the following MWE template:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"asked_verb {noun} to_prep\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,'To capture "stub out" as a discontinuous expression in the following text:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"I asked him to stub the cigarette out.\n")),(0,o.kt)("p",null,"You can use the following MWE template:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"stub_verb {noun/det} out_adv\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,'Similarly, the tag "brushed off" as a discontinuous MWE in the following text:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"She brushed the whole thing off.\n")),(0,o.kt)("p",null,'You can use the following MWE template in conjunction with a noun phrase parser which identifies "the whole thing" as a noun phrase:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"brush*_* {Np} off_*\n")))}d.isMDXComponent=!0}}]);