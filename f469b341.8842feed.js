(window.webpackJsonp=window.webpackJsonp||[]).push([[476],{558:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),i=(a(0),a(584)),l=a(588),o=a(589),c=a(590),s={id:"share",title:"Share"},d={unversionedId:"share",id:"version-0.64/share",isDocsHomePage:!1,title:"Share",description:"\u793a\u4f8b",source:"@site/versioned_docs/version-0.64/share.md",slug:"/share",permalink:"/docs/share",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.64/share.md",version:"0.64",lastUpdatedAt:1615789874,sidebar:"version-0.64/api",previous:{title:"PlatformColor",permalink:"/docs/platformcolor"},next:{title:"StyleSheet",permalink:"/docs/stylesheet"}},b=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>share()</code>",id:"share",children:[]}]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[{value:"<code>sharedAction</code>",id:"sharedaction",children:[]},{value:'<code>dismissedAction</code> <div class="label ios">iOS</div>',id:"dismissedaction-ios",children:[]}]}],u={toc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(i.b)(l.a,{groupId:"syntax",defaultValue:c.a.defaultSyntax,values:c.a.syntax,mdxType:"Tabs"},Object(i.b)(o.a,{value:"functional",mdxType:"TabItem"},Object(i.b)("div",{className:"snack-player","data-snack-name":"Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Share%2C%20View%2C%20Button%20%7D%20from%20'react-native'%3B%0A%0Aconst%20ShareExample%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20onShare%20%3D%20async%20()%20%3D%3E%20%7B%0A%20%20%20%20try%20%7B%0A%20%20%20%20%20%20const%20result%20%3D%20await%20Share.share(%7B%0A%20%20%20%20%20%20%20%20message%3A%0A%20%20%20%20%20%20%20%20%20%20'React%20Native%20%7C%20A%20framework%20for%20building%20native%20apps%20using%20React'%2C%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20if%20(result.action%20%3D%3D%3D%20Share.sharedAction)%20%7B%0A%20%20%20%20%20%20%20%20if%20(result.activityType)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20shared%20with%20activity%20type%20of%20result.activityType%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20shared%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%20else%20if%20(result.action%20%3D%3D%3D%20Share.dismissedAction)%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20dismissed%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%20catch%20(error)%20%7B%0A%20%20%20%20%20%20alert(error.message)%3B%0A%20%20%20%20%7D%0A%20%20%7D%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7B%7B%20marginTop%3A%2050%20%7D%7D%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7BonShare%7D%20title%3D%22Share%22%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aexport%20default%20ShareExample%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),Object(i.b)(o.a,{value:"classical",mdxType:"TabItem"},Object(i.b)("div",{className:"snack-player","data-snack-name":"Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Share%2C%20View%2C%20Button%20%7D%20from%20'react-native'%3B%0A%0Aclass%20ShareExample%20extends%20Component%20%7B%0A%20%20onShare%20%3D%20async%20()%20%3D%3E%20%7B%0A%20%20%20%20try%20%7B%0A%20%20%20%20%20%20const%20result%20%3D%20await%20Share.share(%7B%0A%20%20%20%20%20%20%20%20message%3A%0A%20%20%20%20%20%20%20%20%20%20'React%20Native%20%7C%20A%20framework%20for%20building%20native%20apps%20using%20React'%2C%0A%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20if%20(result.action%20%3D%3D%3D%20Share.sharedAction)%20%7B%0A%20%20%20%20%20%20%20%20if%20(result.activityType)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20shared%20with%20activity%20type%20of%20result.activityType%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20shared%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%20else%20if%20(result.action%20%3D%3D%3D%20Share.dismissedAction)%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20dismissed%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%20catch%20(error)%20%7B%0A%20%20%20%20%20%20alert(error.message)%3B%0A%20%20%20%20%7D%0A%20%20%7D%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20marginTop%3A%2050%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20onPress%3D%7Bthis.onShare%7D%20title%3D%22Share%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aexport%20default%20ShareExample%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),Object(i.b)("hr",null),Object(i.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(i.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(i.b)("h3",{id:"share"},Object(i.b)("inlineCode",{parentName:"h3"},"share()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static share(content, options)\n")),Object(i.b)("p",null,"\u6253\u5f00\u4e00\u4e2a\u5bf9\u8bdd\u6846\u6765\u5206\u4eab\u6587\u672c\u5185\u5bb9\u3002"),Object(i.b)("p",null,"\u5728 iOS \u4e2d\uff0c\u8fd4\u56de\u4e00\u4e2a Promise\uff0c\u6700\u7ec8\u4f1a\u89e3\u6790\u4e3a\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5305\u542b\u6709",Object(i.b)("inlineCode",{parentName:"p"},"action"),"\u548c",Object(i.b)("inlineCode",{parentName:"p"},"activityType"),"\u4e24\u4e2a\u5c5e\u6027\u3002\u5982\u679c\u7528\u6237\u53d6\u6d88\u5bf9\u8bdd\u6846\uff0c\u5219 Promise \u4ecd\u5c06\u88ab\u89e3\u6790\uff0c\u6700\u7ec8\u8fd4\u56de\u7684",Object(i.b)("inlineCode",{parentName:"p"},"action"),"\u5c5e\u6027\u4f1a\u662f",Object(i.b)("inlineCode",{parentName:"p"},"Share.dismissedAction"),"\uff0c\u800c\u5176\u4ed6\u5c5e\u6027\u4e3a undefined\u3002Note that some share options will not appear or work on the iOS simulator."),Object(i.b)("p",null,"\u5728 Android \u4e2d\u540c\u6837\u8fd4\u56de\u4e00\u4e2a Promise\uff0c\u4f46\u8fd4\u56de\u7684",Object(i.b)("inlineCode",{parentName:"p"},"action"),"\u59cb\u7ec8\u4e3a",Object(i.b)("inlineCode",{parentName:"p"},"Share.sharedAction"),"\u3002"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u5c5e\u6027\uff1a")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"\u540d\u79f0"),Object(i.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(i.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"content ",Object(i.b)("div",{className:"label basic required"},"\u5fc5\u9700")),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"message")," - \u8981\u5206\u4eab\u7684\u6d88\u606f",Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"url")," - \u8981\u5206\u4eab\u7684\u7f51\u5740 ",Object(i.b)("div",{class:"label ios"},"iOS"),Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"title")," - \u6d88\u606f\u7684\u6807\u9898 ",Object(i.b)("div",{class:"label android"},"Android"),Object(i.b)("hr",null),Object(i.b)("inlineCode",{parentName:"td"},"url"),"\u6216",Object(i.b)("inlineCode",{parentName:"td"},"message"),"\u81f3\u5c11\u8981\u63d0\u4f9b\u4e00\u4e2a")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"options"),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"dialogTitle")," ",Object(i.b)("div",{class:"label android"},"Android"),Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"excludedActivityTypes")," ",Object(i.b)("div",{class:"label ios"},"iOS"),Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"subject")," - \u901a\u8fc7\u90ae\u4ef6\u5206\u4eab\u7684\u6807\u9898 ",Object(i.b)("div",{class:"label ios"},"iOS"),Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"tintColor")," ",Object(i.b)("div",{class:"label ios"},"iOS"))))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),Object(i.b)("h3",{id:"sharedaction"},Object(i.b)("inlineCode",{parentName:"h3"},"sharedAction")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static sharedAction\n")),Object(i.b)("p",null,"\u8868\u793a\u5185\u5bb9\u5df2\u6210\u529f\u5206\u4eab\u3002"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"dismissedaction-ios"},Object(i.b)("inlineCode",{parentName:"h3"},"dismissedAction")," ",Object(i.b)("div",{class:"label ios"},"iOS")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static dismissedAction\n")),Object(i.b)("p",null,"\u8868\u793a\u5bf9\u8bdd\u6846\u88ab\u53d6\u6d88\u3002"))}p.isMDXComponent=!0},584:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=d(a),p=n,m=b["".concat(l,".").concat(p)]||b[p]||u[p]||i;return a?r.a.createElement(m,o(o({ref:t},s),{},{components:a})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},585:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},586:function(e,t,a){"use strict";var n=a(0),r=a(587);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},587:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},588:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(586),l=a(585),o=a(67),c=a.n(o),s=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,b=e.values,u=e.groupId,p=e.className,m=Object(i.a)(),f=m.tabGroupChoices,O=m.setTabGroupChoices,v=Object(n.useState)(o),h=v[0],j=v[1],A=n.Children.toArray(e.children);if(null!=u){var y=f[u];null!=y&&y!==h&&b.some((function(e){return e.value===y}))&&j(y)}var g=function(e){j(e),null!=u&&O(u,e)},D=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},p)},b.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return D.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(D,e.target,e)},onFocus:function(){return g(t)},onClick:function(){g(t)}},a)}))),t?Object(n.cloneElement)(A.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},A.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},589:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},590:function(e,t,a){"use strict";var n=a(7),r=!!n.a.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!n.a.canUseDOM&&navigator.platform.startsWith("Win"),l=r?"ios":"android",o=r?"macos":i?"windows":"linux";t.a={defaultGuide:"native",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}}}]);