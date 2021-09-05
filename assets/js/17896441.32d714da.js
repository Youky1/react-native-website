"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[27918],{40493:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var a=n(27378),r=n(24142),i=n(11787);var l=function(e){var t=e.metadata;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},a.createElement("div",{className:"pagination-nav__item"},t.previous&&a.createElement(r.Z,{className:"pagination-nav__link",to:t.previous.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&a.createElement(r.Z,{className:"pagination-nav__link",to:t.next.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},o=n(50353),s=n(76889),c=n(82551);var u={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function d(e){var t=u[e.versionMetadata.banner];return a.createElement(t,e)}function m(e){var t=e.versionLabel,n=e.to,l=e.onClick;return a.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(r.Z,{to:n,onClick:l},a.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){var t,n=e.versionMetadata,r=(0,o.Z)().siteConfig.title,i=(0,s.gA)({failfast:!0}).pluginId,l=(0,c.J)(i).savePreferredVersionName,u=(0,s.Jo)(i),v=u.latestDocSuggestion,f=u.latestVersionSuggestion,h=null!=v?v:(t=f).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},a.createElement("div",null,a.createElement(d,{siteTitle:r,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(m,{versionLabel:f.label,to:h.path,onClick:function(){return l(f.name)}})))}var f=function(e){var t=e.versionMetadata;return"none"===t.banner?a.createElement(a.Fragment,null):a.createElement(v,{versionMetadata:t})},h=n(71956);function p(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function g(e){var t=e.lastUpdatedBy;return a.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function E(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement(a.Fragment,null,a.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(p,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(g,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var b=n(91353),_=n(25773),w=n(30808),y=n(38944),k="iconEdit_1CBY",N=["className"],U=function(e){var t=e.className,n=(0,w.Z)(e,N);return a.createElement("svg",(0,_.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,y.Z)(k,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function L(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},a.createElement(U,null),a.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var Z=n(52332),T="docItemContainer_1EXp",C="lastUpdated_1szQ",A="docItemCol_2rXS";var B=function(e){var t,n=e.content,r=e.versionMetadata,i=n.metadata,o=n.frontMatter,c=o.image,u=o.keywords,d=o.hide_title,m=o.hide_table_of_contents,v=i.description,p=i.title,g=i.editUrl,_=i.lastUpdatedAt,w=i.formattedLastUpdatedAt,k=i.lastUpdatedBy,N=(0,s.gA)({failfast:!0}).pluginId,U=(0,s.gB)(N),B=(0,s.zu)(N),I=U.length>1&&!B.isLast,M=!d&&void 0===n.contentTitle;return a.createElement(a.Fragment,null,a.createElement(h.Z,{title:p,description:v,keywords:u,image:c}),a.createElement("div",{className:"row"},a.createElement("div",{className:(0,y.Z)("col",(t={},t[A]=!m,t))},a.createElement(f,{versionMetadata:r}),a.createElement("div",{className:T},a.createElement("article",null,I&&a.createElement("div",null,a.createElement("span",{className:"badge badge--secondary"},"\u7248\u672c: ",r.label)),a.createElement("div",{className:"markdown"},M&&a.createElement(Z.N,null,p),a.createElement(n,null)),(g||_||k)&&a.createElement("footer",{className:"docMetadata row docusaurus-mt-lg"},a.createElement("div",{className:"col"},g&&a.createElement(L,{editUrl:g})),a.createElement("div",{className:(0,y.Z)("col",C)},(_||k)&&a.createElement(E,{lastUpdatedAt:_,formattedLastUpdatedAt:w,lastUpdatedBy:k})))),a.createElement(l,{metadata:i}))),!m&&n.toc&&a.createElement("div",{className:"col col--3"},a.createElement(b.Z,{toc:n.toc}))))}},91353:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(27378),r=n(38944);var i=function(e,t,n){var r=(0,a.useState)(void 0),i=r[0],l=r[1];(0,a.useEffect)((function(){function a(){var a=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(a)for(var r=0,o=!1,s=document.getElementsByClassName(e);r<s.length&&!o;){var c=s[r],u=c.href,d=decodeURIComponent(u.substring(u.indexOf("#")+1));a.id===d&&(i&&i.classList.remove(t),c.classList.add(t),l(c),o=!0),r+=1}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},l="tableOfContents_rbnR",o="table-of-contents__link";function s(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(s,{isChild:!0,toc:e.children}))}))):null}var c=function(e){var t=e.toc;return i(o,"table-of-contents__link--active",100),a.createElement("div",{className:(0,r.Z)(l,"thin-scrollbar")},a.createElement(s,{toc:t}),a.createElement("div",{className:"wwads-cn wwads-vertical","data-id":"58",style:{maxWidth:200,marginTop:20}}))}},24142:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(30808),r=n(27378),i=n(4289),l=n(50353),o=n(45626),s=n(161),c=(0,r.createContext)({collectLink:function(){}}),u=n(98948),d=n(51721),m=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var v=function(e){var t,n,v=e.isNavLink,f=e.to,h=e.href,p=e.activeClassName,g=e.isActive,E=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,_=void 0===b||b,w=(0,a.Z)(e,m),y=(0,l.Z)().siteConfig,k=y.trailingSlash,N=y.baseUrl,U=(0,u.C)().withBaseUrl,L=(0,r.useContext)(c),Z=f||h,T=(0,o.Z)(Z),C=null==Z?void 0:Z.replace("pathname://",""),A=void 0!==C?(n=C,_&&function(e){return e.startsWith("/")}(n)?U(n):n):void 0;A&&T&&(A=(0,d.applyTrailingSlash)(A,{trailingSlash:k,baseUrl:N}));var B,I=(0,r.useRef)(!1),M=v?i.OL:i.rU,S=s.Z.canUseIntersectionObserver;(0,r.useEffect)((function(){return!S&&T&&null!=A&&window.docusaurus.prefetch(A),function(){S&&B&&B.disconnect()}}),[A,S,T]);var O=null!==(t=null==A?void 0:A.startsWith("#"))&&void 0!==t&&t,x=!A||!T||O;return A&&T&&!O&&!E&&L.collectLink(A),x?r.createElement("a",Object.assign({href:A},Z&&!T&&{target:"_blank",rel:"noopener noreferrer"},w)):r.createElement(M,Object.assign({},w,{onMouseEnter:function(){I.current||null==A||(window.docusaurus.preload(A),I.current=!0)},innerRef:function(e){var t,n;S&&e&&T&&(t=e,n=function(){null!=A&&window.docusaurus.prefetch(A)},(B=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(B.unobserve(t),B.disconnect(),n())}))}))).observe(t))},to:A||""},v&&{isActive:g,activeClassName:p}))}},11787:function(e,t,n){n.d(t,{Z:function(){return d},I:function(){return u}});var a=n(27378),r=/{\w+}/g,i="{}";function l(e,t){var n=[],l=e.replace(r,(function(e){var r=e.substr(1,e.length-2),l=null==t?void 0:t[r];if(void 0!==l){var o=a.isValidElement(l)?l:String(l);return n.push(o),i}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?l.split(i).reduce((function(e,t,a){var r;return e.concat(t).concat(null!==(r=n[a])&&void 0!==r?r:"")}),""):l.split(i).reduce((function(e,t,r){return[].concat(e,[a.createElement(a.Fragment,{key:r},t,n[r])])}),[])}function o(e){var t=e.children,n=e.values;if("string"!=typeof t)throw console.warn("Illegal <Interpolate> children",t),new Error("The Docusaurus <Interpolate> component only accept simple string values");return l(t,n)}var s=n(57529);function c(e){var t,n=e.id,a=e.message;return null!==(t=s[null!=n?n:a])&&void 0!==t?t:a}function u(e,t){var n,a=e.message;return l(null!==(n=c({message:a,id:e.id}))&&void 0!==n?n:a,t)}function d(e){var t,n=e.children,r=e.id,i=e.values;if("string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");var l=null!==(t=c({message:n,id:r}))&&void 0!==t?t:n;return a.createElement(o,{values:i},l)}},45626:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},98948:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return l}});var a=n(50353),r=n(45626);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,l=i.forcePrependBaseUrl,o=void 0!==l&&l,s=i.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(o)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(i,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},52332:function(e,t,n){n.d(t,{N:function(){return m},Z:function(){return v}});var a=n(30808),r=n(25773),i=n(27378),l=n(38944),o=n(11787),s=n(82551),c="enhancedAnchor_2Cjg",u="h1Heading_1Ib2",d=["id"],m=function(e){var t=Object.assign({},e);return i.createElement("header",null,i.createElement("h1",(0,r.Z)({},t,{id:void 0,className:u}),t.children))},v=function(e){return"h1"===e?m:(t=e,function(e){var n,r=e.id,u=(0,a.Z)(e,d),m=(0,s.LU)().navbar.hideOnScroll;return r?i.createElement(t,u,i.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor",(n={},n[c]=!m,n)),id:r}),u.children,i.createElement("a",{className:"hash-link",href:"#"+r,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):i.createElement(t,u)});var t}},71956:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(27378),r=n(55361),i=n(82551),l=n(98948);function o(e){var t=e.title,n=e.description,o=e.keywords,s=e.image,c=(0,i.LU)().image,u=(0,i.pe)(t),d=(0,l.Z)(s||c,{absolute:!0});return a.createElement(r.Z,null,t&&a.createElement("title",null,u),t&&a.createElement("meta",{property:"og:title",content:u}),n&&a.createElement("meta",{name:"description",content:n}),n&&a.createElement("meta",{property:"og:description",content:n}),o&&a.createElement("meta",{name:"keywords",content:Array.isArray(o)?o.join(","):o}),d&&a.createElement("meta",{property:"og:image",content:d}),d&&a.createElement("meta",{name:"twitter:image",content:d}))}},42520:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,a=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var r,i=e.split(/[#?]/)[0],l="/"===i||i===a?i:(r=i,n?function(e){return e.endsWith("/")?e:e+"/"}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));return e.replace(i,l)}},51721:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(42520);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=n(29219);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(i).default}})},29219:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);