(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{268:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(8),l=(r(0),r(584)),b={id:"progressviewios",title:"\ud83d\udea7 ProgressViewIOS"},c={unversionedId:"progressviewios",id:"version-0.63/progressviewios",isDocsHomePage:!1,title:"\ud83d\udea7 ProgressViewIOS",description:"\u5df2\u8fc7\u65f6\u3002 Use @react-native-community/progress-view instead.",source:"@site/versioned_docs/version-0.63/progressviewios.md",slug:"/progressviewios",permalink:"/docs/0.63/progressviewios",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.63/progressviewios.md",version:"0.63",lastUpdatedAt:1615789874},o=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"Props",id:"props",children:[{value:"<code>progress</code>",id:"progress",children:[]},{value:"<code>progressImage</code>",id:"progressimage",children:[]},{value:"<code>progressTintColor</code>",id:"progresstintcolor",children:[]},{value:"<code>progressViewStyle</code>",id:"progressviewstyle",children:[]},{value:"<code>trackImage</code>",id:"trackimage",children:[]},{value:"<code>trackTintColor</code>",id:"tracktintcolor",children:[]}]}],i={toc:o};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"\u5df2\u8fc7\u65f6\u3002")," Use ",Object(l.b)("a",{parentName:"p",href:"https://github.com/react-native-community/progress-view"},"@react-native-community/progress-view")," instead.")),Object(l.b)("p",null,"\u4f7f\u7528",Object(l.b)("inlineCode",{parentName:"p"},"ProgressViewIOS"),"\u6765\u5728 iOS \u4e0a\u6e32\u67d3\u4e00\u4e2a UIProgressView\u3002"),Object(l.b)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(l.b)("div",{className:"snack-player","data-snack-name":"ProgressViewIOS","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7BView%2C%20StyleSheet%2C%20ProgressViewIOS%2C%20Text%7D%20from%20'react-native'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3EProgress%20Bar%20-%200%25%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CProgressViewIOS%20style%3D%7Bstyles.progress%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3EColored%20Progress%20Bar%20-%2050%25%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CProgressViewIOS%0A%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.progress%7D%0A%20%20%20%20%20%20%20%20%20%20progressTintColor%3D%22%22%0A%20%20%20%20%20%20%20%20%20%20progress%3D%7B0.5%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%3CText%3EProgress%20Bar%20-%20100%25%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CProgressViewIOS%0A%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.progress%7D%0A%20%20%20%20%20%20%20%20%20%20progressTintColor%3D%22black%22%0A%20%20%20%20%20%20%20%20%20%20progress%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%7D%2C%0A%20%20example%3A%20%7B%0A%20%20%20%20marginVertical%3A%2020%2C%0A%20%20%7D%2C%0A%20%20progress%3A%20%7B%0A%20%20%20%20width%3A%20200%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(l.b)("hr",null),Object(l.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("h3",{id:"progress"},Object(l.b)("inlineCode",{parentName:"h3"},"progress")),Object(l.b)("p",null,"\u5f53\u524d\u7684\u8fdb\u5ea6\u503c\uff080 \u5230 1 \u4e4b\u95f4\uff09\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(l.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"progressimage"},Object(l.b)("inlineCode",{parentName:"h3"},"progressImage")),Object(l.b)("p",null,"\u4e00\u4e2a\u53ef\u4ee5\u62c9\u4f38\u7684\u56fe\u7247\uff0c\u7528\u4e8e\u663e\u793a\u8fdb\u5ea6\u6761\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(l.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Image.propTypes.source"),Object(l.b)("td",{parentName:"tr",align:null},"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"progresstintcolor"},Object(l.b)("inlineCode",{parentName:"h3"},"progressTintColor")),Object(l.b)("p",null,"\u8fdb\u5ea6\u6761\u672c\u8eab\u67d3\u4e0a\u7684\u989c\u8272\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(l.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"progressviewstyle"},Object(l.b)("inlineCode",{parentName:"h3"},"progressViewStyle")),Object(l.b)("p",null,"\u8fdb\u5ea6\u6761\u7684\u6837\u5f0f\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(l.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"enum('default', 'bar')"),Object(l.b)("td",{parentName:"tr",align:null},"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"trackimage"},Object(l.b)("inlineCode",{parentName:"h3"},"trackImage")),Object(l.b)("p",null,"\u4e00\u4e2a\u53ef\u62c9\u4f38\u7684\u56fe\u7247\uff0c\u7528\u4e8e\u663e\u793a\u8fdb\u5ea6\u6761\u540e\u9762\u7684\u8f68\u9053\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(l.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Image.propTypes.source"),Object(l.b)("td",{parentName:"tr",align:null},"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"tracktintcolor"},Object(l.b)("inlineCode",{parentName:"h3"},"trackTintColor")),Object(l.b)("p",null,"\u8fdb\u5ea6\u6761\u8f68\u9053\u67d3\u4e0a\u7684\u989c\u8272\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(l.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm10000"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",Object(l.b)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(100.00%)"))}s.isMDXComponent=!0},584:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=s(r),u=n,m=p["".concat(b,".").concat(u)]||p[u]||d[u]||l;return r?a.a.createElement(m,c(c({ref:t},i),{},{components:r})):a.a.createElement(m,c({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,b=new Array(l);b[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var i=2;i<l;i++)b[i]=r[i];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);