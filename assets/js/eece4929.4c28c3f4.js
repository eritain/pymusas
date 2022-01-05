"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return t?a.createElement(g,s(s({ref:n},c),{},{components:t})):a.createElement(g,s({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=m;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var p=2;p<i;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9369:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=t(3117),o=t(102),i=(t(7294),t(3905)),s=["components"],r={title:"Tag Text",sidebar_position:1},l=void 0,p={unversionedId:"usage/how_to/tag_text",id:"usage/how_to/tag_text",title:"Tag Text",description:"In this guide we are going to show you how to tag text using the USASRuleBasedTagger, the guide is broken down into different languages, each language guide is almost identical with the exception of the USAS lexicon used and the spaCy pipeline that is required for lemmatisation and Part Of Speech (POS) tagging. In each of the language examples we will download the small version of the spaCy pipeline, but any version of the spaCy pipeline can be used.",source:"@site/docs/usage/how_to/tag_text.md",sourceDirName:"usage/how_to",slug:"/usage/how_to/tag_text",permalink:"/pymusas/usage/how_to/tag_text",editUrl:"https://github.com/ucrel/pymusas/edit/main/docs/docs/usage/how_to/tag_text.md",tags:[],version:"current",lastUpdatedBy:"Andrew Moore",lastUpdatedAt:1641381337,formattedLastUpdatedAt:"1/5/2022",sidebarPosition:1,frontMatter:{title:"Tag Text",sidebar_position:1},sidebar:"docs",previous:{title:"Using PyMUSAS",permalink:"/pymusas/using"}},c=[{value:"Chinese",id:"chinese",children:[],level:2},{value:"Dutch",id:"dutch",children:[],level:2},{value:"French",id:"french",children:[],level:2},{value:"Italian",id:"italian",children:[],level:2},{value:"Portuguese",id:"portuguese",children:[],level:2},{value:"Spanish",id:"spanish",children:[],level:2}],u={toc:c};function m(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this guide we are going to show you how to tag text using the ",(0,i.kt)("a",{parentName:"p",href:"/api/spacy_api/taggers/rule_based#usasrulebasedtagger"},"USASRuleBasedTagger"),", the guide is broken down into different languages, each language guide is almost identical with the exception of the USAS lexicon used and the spaCy pipeline that is required for lemmatisation and Part Of Speech (POS) tagging. In each of the language examples we will download the small version of the spaCy pipeline, but any version of the spaCy pipeline can be used."),(0,i.kt)("h2",{id:"chinese"},"Chinese"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand"),(0,i.kt)("p",null,"First download the relevant spaCy pipeline, through the command line, link to ",(0,i.kt)("a",{parentName:"p",href:"https://spacy.io/models/zh"},"Chinese spaCy models"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python -m spacy download zh_core_web_sm\n")),(0,i.kt)("p",null,"Then create the tagger, in a Python script:"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"That we only use the tokeniser of the spaCy pipeline as currently there is not lemmatisation component in the spaCy pipeline and the POS model tagset within the spaCy pipeline is the Chinese Treebank tagset which PyMUSAS does not support currently."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import spacy\n\nfrom pymusas.lexicon_collection import LexiconCollection\nfrom pymusas.spacy_api.taggers import rule_based\n\n# We exclude all of the components as all we need is the tokeniser. \nnlp = spacy.load('zh_core_web_sm', exclude=['parser', 'ner', 'tagger', 'tok2vec', 'attribute_ruler'])\n# Adds the tagger to the pipeline and returns the tagger \nusas_tagger = nlp.add_pipe('usas_tagger')\n\n# Rule based tagger requires a USAS lexicon\nchinese_usas_lexicon_url = 'https://raw.githubusercontent.com/UCREL/Multilingual-USAS/master/Chinese/semantic_lexicon_chi.tsv'\n# As we are not using the POS information we exclude it from the lexicon\n# NOTE: in this context lemma here means token.\nchinese_lemma_lexicon_lookup = LexiconCollection.from_tsv(chinese_usas_lexicon_url, \n                                                          include_pos=False)\n# Add the lemma lexicon information to the USAS tagger within the pipeline\nusas_tagger.lemma_lexicon_lookup = chinese_lemma_lexicon_lookup\n")),(0,i.kt)("p",null,"The tagger is now setup for tagging text through the spaCy pipeline like so (this example follows on from the last). The example text is taken from the Chinese Wikipedia page on the topic of ",(0,i.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E9%8A%80%E8%A1%8C"},(0,i.kt)("inlineCode",{parentName:"a"},"Bank")," as a financial institution."),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"text = \"\u9280\u884c\u662f\u5438\u6536\u516c\u4f17\u5b58\u6b3e\u3001\u53d1\u653e\u8cb8\u6b3e\u3001\u529e\u7406\u7ed3\u7b97\u7b49\u696d\u52d9\u7684\u91d1\u878d\u6a5f\u69cb\u3002\"\n\noutput_doc = nlp(text)\n\nprint(f'Text\\tUSAS Tags')\nfor token in output_doc:\n    print(f'{token.text}\\t{token._.usas_tags}')\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsv"},"Text    USAS Tags\n\u9280\u884c  ['Z99']\n\u662f   ['A3', 'Z5']\n\u5438\u6536  ['A1.1.1', 'T1.3+', 'X2.3+', 'X5.2+', 'C1', 'M2', 'A9+', 'X5.1+', 'I1.2', 'O4.2+', 'X2.1', 'K5.1', 'I3.1/A9+', 'S5+', 'N5', 'O4.1', 'A2.1/O1.2', 'A6.1+/A2.1']\n\u516c\u4f17  ['A10+', 'G3/S7.1+/S2mf', 'B3/H1', 'N5+', 'A4.2-', 'S5+', 'S5+c']\n\u5b58\u6b3e  ['S7.1-/A2.1']\n\u3001   ['Z99']\n\u53d1\u653e  ['A9-', 'A1.1.1', 'Q2.2', 'S6+', 'I1', 'O4.5']\n\u8cb8\u6b3e  ['Z99']\n\u3001   ['Z99']\n\u529e\u7406  ['A1.1.1', 'S7.1+', 'X9.2+', 'I2.2', 'S1.1.1', 'S7.1+c']\n\u7ed3\u7b97  ['M2', 'A7+', 'A10+', 'I1.1', 'B4', 'O4.1']\n\u7b49   ['T1.3', 'A3+', 'S1.1.1']\n\u696d\u52d9  ['Z99']\n\u7684   ['Z5']\n\u91d1\u878d  ['I1']\n\u6a5f\u69cb  ['Z99']\n\u3002   ['Z99']\n"))),(0,i.kt)("h2",{id:"dutch"},"Dutch"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand"),(0,i.kt)("p",null,"First download the relevant spaCy pipeline, through the command line, link to ",(0,i.kt)("a",{parentName:"p",href:"https://spacy.io/models/nl"},"Dutch spaCy models"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python -m spacy download nl_core_news_sm\n")),(0,i.kt)("p",null,"Then create the tagger, in a Python script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import spacy\n\nfrom pymusas.lexicon_collection import LexiconCollection\nfrom pymusas.spacy_api.taggers import rule_based\nfrom pymusas.pos_mapper import UPOS_TO_USAS_CORE\n\n# We exclude the following components as we do not need them. \nnlp = spacy.load('nl_core_news_sm', exclude=['parser', 'ner', 'tagger'])\n# Adds the tagger to the pipeline and returns the tagger \nusas_tagger = nlp.add_pipe('usas_tagger')\n\n# Rule based tagger requires a USAS lexicon\ndutch_usas_lexicon_url = 'https://raw.githubusercontent.com/UCREL/Multilingual-USAS/master/Dutch/semantic_lexicon_dut.tsv'\n# Includes the POS information\ndutch_lexicon_lookup = LexiconCollection.from_tsv(dutch_usas_lexicon_url)\n# excludes the POS information\ndutch_lemma_lexicon_lookup = LexiconCollection.from_tsv(dutch_usas_lexicon_url, \n                                                        include_pos=False)\n# Add the lexicon information to the USAS tagger within the pipeline\nusas_tagger.lexicon_lookup = dutch_lexicon_lookup\nusas_tagger.lemma_lexicon_lookup = dutch_lemma_lexicon_lookup\n# Maps from the POS model tagset to the lexicon POS tagset\nusas_tagger.pos_mapper = UPOS_TO_USAS_CORE\n")),(0,i.kt)("p",null,"The tagger is now setup for tagging text through the spaCy pipeline like so (this example follows on from the last). The example text is taken from the Dutch Wikipedia page on the topic of ",(0,i.kt)("a",{parentName:"p",href:"https://nl.wikipedia.org/wiki/Bank_(financi%C3%ABle_instelling)"},(0,i.kt)("inlineCode",{parentName:"a"},"Bank")," as a financial institution."),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"text = \"Een bank of een kredietinstelling is een financieel instituut dat bewaring van geld, leningen, betaalverkeer en diverse andere diensten aanbiedt.\"\n\noutput_doc = nlp(text)\n\nprint(f'Text\\tLemma\\tPOS\\tUSAS Tags')\nfor token in output_doc:\n    print(f'{token.text}\\t{token.lemma_}\\t{token.pos_}\\t{token._.usas_tags}')\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsv"},"Text    Lemma   POS USAS Tags\nEen een DET ['Z5']\nbank    bank    NOUN    ['Z99']\nof  of  CCONJ   ['Z5']\neen een DET ['Z5']\nkredietinstelling   kredietinstelling   NOUN    ['Z99']\nis  is  AUX ['Z99']\neen een DET ['Z5']\nfinancieel  financieel  ADJ ['I1']\ninstituut   instituut   NOUN    ['P1/S5+c', 'X2.4/S5+c', 'S5+c', 'T2+']\ndat dat SCONJ   ['A13.3', 'A6.1+', 'Z5', 'Z8']\nbewaring    bewaring    NOUN    ['Z99']\nvan van ADP ['Z5']\ngeld    geld    NOUN    ['I1']\n,   ,   PUNCT   ['PUNCT']\nleningen    lening  NOUN    ['A9-', 'I1.2']\n,   ,   PUNCT   ['PUNCT']\nbetaalverkeer   betaalverkeer   PROPN   ['Z99']\nen  en  CCONJ   ['Z5']\ndiverse divers  ADJ ['A6.3+']\nandere  ander   ADJ ['A6.1-', 'A6.1-/Z8']\ndiensten    dienst  NOUN    ['A1.1.1', 'S8+', 'S7.1-', 'I2.2', 'S9', 'I3.1', 'F1', 'G3@', 'G1.1@', 'G2.1@']\naanbiedt    aanbieden   VERB    ['A9-', 'Q2.2']\n.   .   PUNCT   ['PUNCT']\n"))),(0,i.kt)("h2",{id:"french"},"French"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand"),(0,i.kt)("p",null,"First download the relevant spaCy pipeline, through the command line, link to ",(0,i.kt)("a",{parentName:"p",href:"https://spacy.io/models/fr"},"French spaCy models"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python -m spacy download fr_core_news_sm\n")),(0,i.kt)("p",null,"Then create the tagger, in a Python script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import spacy\n\nfrom pymusas.lexicon_collection import LexiconCollection\nfrom pymusas.spacy_api.taggers import rule_based\nfrom pymusas.pos_mapper import UPOS_TO_USAS_CORE\n\n# We exclude the following components as we do not need them. \nnlp = spacy.load('fr_core_news_sm', exclude=['parser', 'ner'])\n# Adds the tagger to the pipeline and returns the tagger \nusas_tagger = nlp.add_pipe('usas_tagger')\n\n# Rule based tagger requires a USAS lexicon\nfrench_usas_lexicon_url = 'https://raw.githubusercontent.com/UCREL/Multilingual-USAS/master/French/semantic_lexicon_fr.tsv'\n# Includes the POS information\nfrench_lexicon_lookup = LexiconCollection.from_tsv(french_usas_lexicon_url)\n# excludes the POS information\nfrench_lemma_lexicon_lookup = LexiconCollection.from_tsv(french_usas_lexicon_url, \n                                                         include_pos=False)\n# Add the lexicon information to the USAS tagger within the pipeline\nusas_tagger.lexicon_lookup = french_lexicon_lookup\nusas_tagger.lemma_lexicon_lookup = french_lemma_lexicon_lookup\n# Maps from the POS model tagset to the lexicon POS tagset\nusas_tagger.pos_mapper = UPOS_TO_USAS_CORE\n")),(0,i.kt)("p",null,"The tagger is now setup for tagging text through the spaCy pipeline like so (this example follows on from the last). The example text is taken from the French Wikipedia page on the topic of ",(0,i.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/Banque"},(0,i.kt)("inlineCode",{parentName:"a"},"Bank")," as a financial institution."),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"text = \"Une banque est une institution financi\xe8re qui fournit des services bancaires, soit notamment de d\xe9p\xf4t, de cr\xe9dit et paiement.\"\n\noutput_doc = nlp(text)\n\nprint(f'Text\\tLemma\\tPOS\\tUSAS Tags')\nfor token in output_doc:\n    print(f'{token.text}\\t{token.lemma_}\\t{token.pos_}\\t{token._.usas_tags}')\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsv"},"Text    Lemma   POS USAS Tags\nUne un  DET ['Z5']\nbanque  banque  NOUN    ['I1.1', 'X2.6+', 'M1', 'I1/H1', 'I1.1/I2.1c', 'W3/M4', 'A9+/H1', 'O2', 'M6']\nest \xeatre    AUX ['M6']\nune un  DET ['Z5']\ninstitution institution NOUN    ['S5+c', 'S7.1+', 'H1c', 'S1.1.1', 'T2+']\nfinanci\xe8re  financier   ADJ ['Z99']\nqui qui PRON    ['Z8']\nfournit fournir VERB    ['Z99']\ndes de  ADP ['Z5']\nservices    service NOUN    ['A1.1.1', 'S8+', 'S7.1-', 'I2.2', 'S9', 'I3.1', 'F1', 'G3@', 'G1.1@', 'G2.1@']\nbancaires   bancaire    NOUN    ['I1.1', 'X2.6+', 'M1', 'H1']\n,   ,   PUNCT   ['PUNCT']\nsoit    soit    CCONJ   ['Z99']\nnotamment   notamment   ADV ['A14', 'A13.3']\nde  de  ADP ['Z5']\nd\xe9p\xf4t   d\xe9p\xf4t   NOUN    ['Z99']\n,   ,   PUNCT   ['PUNCT']\nde  de  ADP ['Z5']\ncr\xe9dit  cr\xe9dit  NOUN    ['I1.1', 'A5.1+', 'X2.1', 'P1']\net  et  CCONJ   ['Z5']\npaiement    paiement    NOUN    ['I1.1']\n.   .   PUNCT   ['PUNCT']\n"))),(0,i.kt)("h2",{id:"italian"},"Italian"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand"),(0,i.kt)("p",null,"First download the relevant spaCy pipeline, through the command line, link to ",(0,i.kt)("a",{parentName:"p",href:"https://spacy.io/models/it"},"Italian spaCy models"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python -m spacy download it_core_news_sm\n")),(0,i.kt)("p",null,"Then create the tagger, in a Python script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import spacy\n\nfrom pymusas.lexicon_collection import LexiconCollection\nfrom pymusas.spacy_api.taggers import rule_based\nfrom pymusas.pos_mapper import UPOS_TO_USAS_CORE\n\n# We exclude the following components as we do not need them. \nnlp = spacy.load('it_core_news_sm', exclude=['parser', 'ner', 'tagger'])\n# Adds the tagger to the pipeline and returns the tagger \nusas_tagger = nlp.add_pipe('usas_tagger')\n\n# Rule based tagger requires a USAS lexicon\nitalian_usas_lexicon_url = 'https://raw.githubusercontent.com/UCREL/Multilingual-USAS/master/Italian/semantic_lexicon_ita.tsv'\n# Includes the POS information\nitalian_lexicon_lookup = LexiconCollection.from_tsv(italian_usas_lexicon_url)\n# excludes the POS information\nitalian_lemma_lexicon_lookup = LexiconCollection.from_tsv(italian_usas_lexicon_url, \n                                                          include_pos=False)\n# Add the lexicon information to the USAS tagger within the pipeline\nusas_tagger.lexicon_lookup = italian_lexicon_lookup\nusas_tagger.lemma_lexicon_lookup = italian_lemma_lexicon_lookup\n# Maps from the POS model tagset to the lexicon POS tagset\nusas_tagger.pos_mapper = UPOS_TO_USAS_CORE\n")),(0,i.kt)("p",null,"The tagger is now setup for tagging text through the spaCy pipeline like so (this example follows on from the last). The example text is taken from the Italian Wikipedia page on the topic of ",(0,i.kt)("a",{parentName:"p",href:"https://it.wikipedia.org/wiki/Banca"},(0,i.kt)("inlineCode",{parentName:"a"},"Bank")," as a financial institution."),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"text = \"Una banca (detta anche istituto di credito) \xe8 un istituto pubblico o privato che esercita congiuntamente l'attivit\xe0 di raccolta del risparmio tra il pubblico e di esercizio del credito (attivit\xe0 bancaria) verso i propri clienti (imprese e privati cittadini); costituisce raccolta del risparmio l'acquisizione di fondi con obbligo di rimborso.\"\n\noutput_doc = nlp(text)\n\nprint(f'Text\\tLemma\\tPOS\\tUSAS Tags')\nfor token in output_doc:\n    print(f'{token.text}\\t{token.lemma_}\\t{token.pos_}\\t{token._.usas_tags}')\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsv"},"Text    Lemma   POS USAS Tags\nUna uno DET ['N1']\nbanca   banca   NOUN    ['I2.1']\n(   (   PUNCT   ['PUNCT']\ndetta   dire    VERB    ['Q2.2']\nanche   anche   ADV ['Z5']\nistituto    istituto    NOUN    ['P1/S5+c', 'X2.4/S5+c']\ndi  di  ADP ['Z5']\ncredito credito NOUN    ['I1.1', 'A5.1+', 'X2.1', 'P1', 'Q1.2', 'X3.2', 'T1.3', 'L2']\n)   )   PUNCT   ['PUNCT']\n\xe8   essere  AUX ['A5.1', 'S7.1++', 'X3.2', 'Q2.2', 'A8', 'N3.1%']\nun  uno DET ['Z5']\nistituto    istituto    NOUN    ['P1/S5+c', 'X2.4/S5+c']\npubblico    pubblico    ADJ ['A10+']\no   o   CCONJ   ['Z5']\nprivato privato ADJ ['S1.2.1+', 'A1.7-']\nche che PRON    ['Z8']\nesercita    esercitare  VERB    ['A1.1.1', 'S7.1+', 'X8+', 'X2.4', 'M1', 'A9-', 'K5.1', 'A1.5.1']\ncongiuntamente  congiuntamente  ADV ['Z99']\nl'  il  DET ['Z5']\nattivit\xe0    attivit\xe0    NOUN    ['A1.1.1', 'X8+', 'X2.4', 'M1']\ndi  di  ADP ['Z5']\nraccolta    raccolta    NOUN    ['F4', 'N4', 'Q4.3%', 'S9%', 'N5+', 'A9+']\ndel del ADP ['Z5']\nrisparmio   risparmio   NOUN    ['I2.1', 'I1.3-', 'A1.5.1/A1.3+', 'A1.9']\ntra tra ADP ['Z5']\nil  il  DET ['Z5']\npubblico    pubblico    NOUN    ['S1.1.3+', 'S5+']\ne   e   CCONJ   ['Z5']\ndi  di  ADP ['Z5']\nesercizio   esercizio   NOUN    ['K5.1', 'P1', 'A1.1.1', 'G3@', 'O2', 'G3', 'B5']\ndel del ADP ['Z5']\ncredito credito NOUN    ['I1.1', 'A5.1+', 'X2.1', 'P1', 'Q1.2', 'X3.2', 'T1.3', 'L2']\n(   (   PUNCT   ['PUNCT']\nattivit\xe0    attivit\xe0    NOUN    ['A1.1.1', 'X8+', 'X2.4', 'M1']\nbancaria    bancario    ADJ ['M1', 'M2', 'I1.2']\n)   )   PUNCT   ['PUNCT']\nverso   verso   ADP ['Z5', 'M6']\ni   il  DET ['Z5']\npropri  proprio DET ['Z5']\nclienti cliente NOUN    ['I2.2/S2mf']\n(   (   PUNCT   ['PUNCT']\nimprese impresa NOUN    ['A12-']\ne   e   CCONJ   ['Z5']\nprivati privato NOUN    ['S1.2.1+', 'A1.7-']\ncittadini   cittadino   NOUN    ['M7/S2mf']\n)   )   PUNCT   ['PUNCT']\n;   ;   PUNCT   ['PUNCT']\ncostituisce costituire  VERB    ['A1.1.1', 'A9+', 'A2.2', 'S6+', 'A3+', 'A9-', 'X9.2+', 'X6+']\nraccolta    raccolta    NOUN    ['F4', 'N4', 'Q4.3%', 'S9%', 'N5+', 'A9+']\ndel del ADP ['Z5']\nrisparmio   risparmio   NOUN    ['I2.1', 'I1.3-', 'A1.5.1/A1.3+', 'A1.9']\nl'  il  DET ['Z5']\nacquisizione    acquisizione    NOUN    ['Z99']\ndi  di  ADP ['Z5']\nfondi   fondo   NOUN    ['M6']\ncon con ADP ['Z5']\nobbligo obbligo NOUN    ['S6+']\ndi  di  ADP ['Z5']\nrimborso    rimborso    NOUN    ['I1.1', 'I1.1+/A9-', 'I1.2-', 'S1.1.2+', 'S8-']\n.   .   PUNCT   ['PUNCT']\n"))),(0,i.kt)("h2",{id:"portuguese"},"Portuguese"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand"),(0,i.kt)("p",null,"First download the relevant spaCy pipeline, through the command line, link to ",(0,i.kt)("a",{parentName:"p",href:"https://spacy.io/models/pt"},"Portuguese spaCy models"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python -m spacy download pt_core_news_sm\n")),(0,i.kt)("p",null,"Then create the tagger, in a Python script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import spacy\n\nfrom pymusas.lexicon_collection import LexiconCollection\nfrom pymusas.spacy_api.taggers import rule_based\nfrom pymusas.pos_mapper import UPOS_TO_USAS_CORE\n\n# We exclude the following components as we do not need them. \nnlp = spacy.load('pt_core_news_sm', exclude=['parser', 'ner'])\n# Adds the tagger to the pipeline and returns the tagger \nusas_tagger = nlp.add_pipe('usas_tagger')\n\n# Rule based tagger requires a USAS lexicon\nportuguese_usas_lexicon_url = 'https://raw.githubusercontent.com/UCREL/Multilingual-USAS/master/Portuguese/semantic_lexicon_pt.tsv'\n# Includes the POS information\nportuguese_lexicon_lookup = LexiconCollection.from_tsv(portuguese_usas_lexicon_url)\n# excludes the POS information\nportuguese_lemma_lexicon_lookup = LexiconCollection.from_tsv(portuguese_usas_lexicon_url, \n                                                             include_pos=False)\n# Add the lexicon information to the USAS tagger within the pipeline\nusas_tagger.lexicon_lookup = portuguese_lexicon_lookup\nusas_tagger.lemma_lexicon_lookup = portuguese_lemma_lexicon_lookup\n# Maps from the POS model tagset to the lexicon POS tagset\nusas_tagger.pos_mapper = UPOS_TO_USAS_CORE\n")),(0,i.kt)("p",null,"The tagger is now setup for tagging text through the spaCy pipeline like so (this example follows on from the last). The example text is taken from the Portuguese Wikipedia page on the topic of ",(0,i.kt)("a",{parentName:"p",href:"https://pt.wikipedia.org/wiki/Banco"},(0,i.kt)("inlineCode",{parentName:"a"},"Bank")," as a financial institution."),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"text = \"Banco (do germ\xe2nico banki, atrav\xe9s do latim vulgar) \xe9 uma institui\xe7\xe3o financeira intermedi\xe1ria entre agentes superavit\xe1rios e agentes deficit\xe1rios.\"\n\noutput_doc = nlp(text)\n\nprint(f'Text\\tLemma\\tPOS\\tUSAS Tags')\nfor token in output_doc:\n    print(f'{token.text}\\t{token.lemma_}\\t{token.pos_}\\t{token._.usas_tags}')\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsv"},"Text    Lemma   POS USAS Tags\nBanco   Banco   PROPN   ['H5', 'B1%', 'I1/H1', 'I1.1/I2.1c', 'W3/M4', 'A9+/H1', 'O2', 'M6', 'G2.1c']\n(   (   PUNCT   ['PUNCT']\ndo  do  ADP ['Z5']\ngerm\xe2nico   germ\xe2nico   ADJ ['Z2', 'Z2/Q3']\nbanki   banki   ADJ ['Z99']\n,   ,   PUNCT   ['PUNCT']\natrav\xe9s atrav\xe9s ADV ['M6', 'Z5']\ndo  do  ADP ['Z5']\nlatim   latim   NOUN    ['Z2/Q3', 'Z2/S2mf']\nvulgar  vulgar  VERB    ['A6.2+', 'A5.1', 'N2', 'N5++', 'S5+', 'O4.2-', 'M7', 'S1.2.4-']\n)   )   PUNCT   ['PUNCT']\n\xe9   ser AUX ['A3+', 'Z5']\numa umar    DET ['Z99']\ninstitui\xe7\xe3o institui\xe7\xe3o NOUN    ['S5+c', 'S7.1+', 'H1c', 'S1.1.1', 'T2+']\nfinanceira  financeiro  ADJ ['I1', 'I1/G1.1']\nintermedi\xe1ria   intermedi\xe1rio   ADJ ['N5', 'N4', 'S8+/S2mf']\nentre   entrar  ADP ['M1', 'S5+', 'T2+', 'A1.8+', 'Y2']\nagentes agente  NOUN    ['I2.1/S2mf', 'G1.1/X2.2+/S2mf', 'K4/S2mf', 'I2.2/S2.2m', 'S8+/S2.2m']\nsuperavit\xe1rios  superavit\xe1rios  ADJ ['Z99']\ne   e   CCONJ   ['Z5']\nagentes agente  NOUN    ['I2.1/S2mf', 'G1.1/X2.2+/S2mf', 'K4/S2mf', 'I2.2/S2.2m', 'S8+/S2.2m']\ndeficit\xe1rios    deficit\xe1rio ADJ ['Z99']\n.   .   PUNCT   ['PUNCT']\n"))),(0,i.kt)("h2",{id:"spanish"},"Spanish"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand"),(0,i.kt)("p",null,"First download the relevant spaCy pipeline, through the command line, link to ",(0,i.kt)("a",{parentName:"p",href:"https://spacy.io/models/es"},"Spanish spaCy models"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python -m spacy download es_core_news_sm\n")),(0,i.kt)("p",null,"Then create the tagger, in a Python script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import spacy\n\nfrom pymusas.lexicon_collection import LexiconCollection\nfrom pymusas.spacy_api.taggers import rule_based\nfrom pymusas.pos_mapper import UPOS_TO_USAS_CORE\n\n# We exclude the following components as we do not need them. \nnlp = spacy.load('es_core_news_sm', exclude=['parser', 'ner'])\n# Adds the tagger to the pipeline and returns the tagger \nusas_tagger = nlp.add_pipe('usas_tagger')\n\n# Rule based tagger requires a USAS lexicon\nspanish_usas_lexicon_url = 'https://raw.githubusercontent.com/UCREL/Multilingual-USAS/master/Spanish/semantic_lexicon_es.tsv'\n# Includes the POS information\nspanish_lexicon_lookup = LexiconCollection.from_tsv(spanish_usas_lexicon_url)\n# excludes the POS information\nspanish_lemma_lexicon_lookup = LexiconCollection.from_tsv(spanish_usas_lexicon_url, \n                                                          include_pos=False)\n# Add the lexicon information to the USAS tagger within the pipeline\nusas_tagger.lexicon_lookup = spanish_lexicon_lookup\nusas_tagger.lemma_lexicon_lookup = spanish_lemma_lexicon_lookup\n# Maps from the POS model tagset to the lexicon POS tagset\nusas_tagger.pos_mapper = UPOS_TO_USAS_CORE\n")),(0,i.kt)("p",null,"The tagger is now setup for tagging text through the spaCy pipeline like so (this example follows on from the last). The example text is taken from the Spanish Wikipedia page on the topic of ",(0,i.kt)("a",{parentName:"p",href:"https://es.wikipedia.org/wiki/Banco"},(0,i.kt)("inlineCode",{parentName:"a"},"Bank")," as a financial institution."),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"text = \"Un banco, tambi\xe9n conocido como entidad de cr\xe9dito o entidad de dep\xf3sito es una empresa financiera que acepta dep\xf3sitos del p\xfablico y crea dep\xf3sitos a la vista, lo que coloquialmente se denominan cuentas bancarias; as\xed mismo proveen otro tipo de servicios financieros, como cr\xe9ditos.\"\n\noutput_doc = nlp(text)\n\nprint(f'Text\\tLemma\\tPOS\\tUSAS Tags')\nfor token in output_doc:\n    print(f'{token.text}\\t{token.lemma_}\\t{token.pos_}\\t{token._.usas_tags}')\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsv"},"Text    Lemma   POS USAS Tags\nUn  uno DET ['Z5', 'N1']\nbanco   banco   NOUN    ['I2', 'M7']\n,   ,   PUNCT   ['PUNCT']\ntambi\xe9n tambi\xe9n ADV ['N5++', 'Z5']\nconocido    conocido    ADJ ['Z99']\ncomo    como    SCONJ   ['Z5']\nentidad entidad NOUN    ['I2.1.3', 'G1', 'A3', 'S7.2+', 'S5+']\nde  de  ADP ['Z5']\ncr\xe9dito cr\xe9dito NOUN    ['I2.1']\no   o   CCONJ   ['Z5', 'A1.8-']\nentidad entidad NOUN    ['I2.1.3', 'G1', 'A3', 'S7.2+', 'S5+']\nde  de  ADP ['Z5']\ndep\xf3sito    dep\xf3sito    NOUN    ['Z99']\nes  ser AUX ['Z5', 'A3+']\nuna uno DET ['Z5', 'Z8', 'N1']\nempresa empresa NOUN    ['I1.2.1.3', 'X6/X7']\nfinanciera  financiero  ADJ ['I1', 'S2mf', 'S7']\nque que PRON    ['Z5', 'Z8']\nacepta  aceptar VERB    ['A9+', 'X2.5+', 'S7.4+', 'S9@']\ndep\xf3sitos   dep\xf3sito    NOUN    ['Z99']\ndel del ADP ['Z5']\np\xfablico p\xfablico NOUN    ['K1/S2mfc', 'S2mfc', 'S1.1.3+', 'S5+c', 'A10+']\ny   y   CCONJ   ['Z5', 'A1.8+']\ncrea    crea    VERB    ['Z99']\ndep\xf3sitos   dep\xf3sito    NOUN    ['Z99']\na   a   ADP ['Z5']\nla  el  DET ['Z5']\nvista   vista   NOUN    ['X3.4', 'M5', 'B2', 'G2.1']\n,   ,   PUNCT   ['PUNCT']\nlo  \xe9l  PRON    ['Z5', 'Z8']\nque que PRON    ['Z5', 'Z8']\ncoloquialmente  coloquialmentar VERB    ['Z99']\nse  \xe9l  PRON    ['Z5', 'Z8', 'S1.1']\ndenominan   denominar   VERB    ['Z99']\ncuentas cuenta  NOUN    ['I1.1/N2/Y2', 'N5', 'N5.1+', 'I1.3.1', 'O2']\nbancarias   bancario    ADJ ['Z99']\n;   ;   PUNCT   ['PUNCT']\nas\xed as\xed ADV ['Z5', 'A8', 'N3']\nmismo   mismo   PRON    ['A6']\nproveen proveer VERB    ['A9+', 'S6+']\notro    otro    DET ['Z8', 'A6.1-m', 'N5++']\ntipo    tipo    NOUN    ['A4.1', 'A6.1', 'S2.2m', 'Y2', 'I1.2', 'I1.3']\nde  de  ADP ['Z5']\nservicios   servicio    NOUN    ['I1', 'S8+', 'G1']\nfinancieros financiero  ADJ ['I1', 'S2mf', 'S7']\n,   ,   PUNCT   ['PUNCT']\ncomo    como    SCONJ   ['Z5']\ncr\xe9ditos    cr\xe9dito NOUN    ['I2.1']\n.   .   PUNCT   ['PUNCT']\n"))))}m.isMDXComponent=!0}}]);