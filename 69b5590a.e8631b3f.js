(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{309:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return d}));var a=r(3),n=r(8),l=(r(0),r(584)),b={id:"progressbarandroid",title:"\ud83d\udea7 ProgressBarAndroid"},o={unversionedId:"progressbarandroid",id:"version-0.64/progressbarandroid",isDocsHomePage:!1,title:"\ud83d\udea7 ProgressBarAndroid",description:"\u5df2\u8fc7\u65f6\u3002 Use @react-native-community/progress-bar-android instead.",source:"@site/versioned_docs/version-0.64/progressbarandroid.md",slug:"/progressbarandroid",permalink:"/docs/progressbarandroid",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.64/progressbarandroid.md",version:"0.64",lastUpdatedAt:1615789874},c=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"Props",id:"props",children:[{value:"<code>animating</code>",id:"animating",children:[]},{value:"<code>color</code>",id:"color",children:[]},{value:"<code>indeterminate</code>",id:"indeterminate",children:[]},{value:"<code>progress</code>",id:"progress",children:[]},{value:"<code>styleAttr</code>",id:"styleattr",children:[]},{value:"<code>testID</code>",id:"testid",children:[]}]}],i={toc:c};function d(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"\u5df2\u8fc7\u65f6\u3002")," Use ",Object(l.b)("a",{parentName:"p",href:"https://github.com/react-native-community/progress-bar-android"},"@react-native-community/progress-bar-android")," instead.")),Object(l.b)("p",null,"\u5c01\u88c5\u4e86 Android \u5e73\u53f0\u4e0a\u7684",Object(l.b)("inlineCode",{parentName:"p"},"ProgressBar"),"\u7684 React \u7ec4\u4ef6\u3002\u8fd9\u4e2a\u7ec4\u4ef6\u53ef\u4ee5\u7528\u6765\u8868\u793a\u5e94\u7528\u6b63\u5728\u52a0\u8f7d\u6216\u8005\u6709\u4e9b\u4e8b\u60c5\u6b63\u5728\u8fdb\u884c\u4e2d\u3002"),Object(l.b)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(l.b)("div",{className:"snack-player","data-snack-name":"ProgressBarAndroid","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7BView%2C%20StyleSheet%2C%20ProgressBarAndroid%2C%20Text%7D%20from%20'react-native'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3ECircle%20Progress%20Indicator%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CProgressBarAndroid%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3EHorizontal%20Progress%20Indicator%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CProgressBarAndroid%20styleAttr%3D%22Horizontal%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3EColored%20Progress%20Indicator%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CProgressBarAndroid%20styleAttr%3D%22Horizontal%22%20color%3D%22%232196F3%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3EFixed%20Progress%20Value%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CProgressBarAndroid%0A%20%20%20%20%20%20%20%20%20%20styleAttr%3D%22Horizontal%22%0A%20%20%20%20%20%20%20%20%20%20indeterminate%3D%7Bfalse%7D%0A%20%20%20%20%20%20%20%20%20%20progress%3D%7B0.5%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%7D%2C%0A%20%20example%3A%20%7B%0A%20%20%20%20marginVertical%3A%2024%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(l.b)("hr",null),Object(l.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("h3",{id:"animating"},Object(l.b)("inlineCode",{parentName:"h3"},"animating")),Object(l.b)("p",null,"\u662f\u5426\u663e\u793a\u8fdb\u5ea6\u6761\uff08\u9ed8\u8ba4\u4e3a true \u663e\u793a\uff09\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(l.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"color"},Object(l.b)("inlineCode",{parentName:"h3"},"color")),Object(l.b)("p",null,"\u8fdb\u5ea6\u6761\u7684\u989c\u8272\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(l.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/docs/colors"},"color")),Object(l.b)("td",{parentName:"tr",align:null},"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"indeterminate"},Object(l.b)("inlineCode",{parentName:"h3"},"indeterminate")),Object(l.b)("p",null,"\u51b3\u5b9a\u8fdb\u5ea6\u6761\u662f\u5426\u8981\u663e\u793a\u4e00\u4e2a\u4e0d\u786e\u5b9a\u7684\u8fdb\u5ea6\u3002\u6ce8\u610f\u8fd9\u4e2a\u5728 styleAttr \u662f Horizontal \u7684\u65f6\u5019\u5fc5\u987b\u662f false\uff0c\u5e76\u4e14\u9700\u8981\u8bbe\u7f6e",Object(l.b)("inlineCode",{parentName:"p"},"progress"),"\u503c\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(l.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"indeterminateType"),Object(l.b)("td",{parentName:"tr",align:null},"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"progress"},Object(l.b)("inlineCode",{parentName:"h3"},"progress")),Object(l.b)("p",null,"\u5f53\u524d\u7684\u8fdb\u5ea6\u503c\uff08\u5728 0 \u5230 1 \u4e4b\u95f4\uff09\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(l.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"styleattr"},Object(l.b)("inlineCode",{parentName:"h3"},"styleAttr")),Object(l.b)("p",null,"\u8fdb\u5ea6\u6761\u7684\u6837\u5f0f\u3002\u53ef\u53d6\u503c\u6709\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Horizontal"),Object(l.b)("li",{parentName:"ul"},"Normal (default)"),Object(l.b)("li",{parentName:"ul"},"Small"),Object(l.b)("li",{parentName:"ul"},"Large"),Object(l.b)("li",{parentName:"ul"},"Inverse"),Object(l.b)("li",{parentName:"ul"},"SmallInverse"),Object(l.b)("li",{parentName:"ul"},"LargeInverse")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(l.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"enum('Horizontal', 'Normal', 'Small', 'Large', 'Inverse', 'SmallInverse', 'LargeInverse')"),Object(l.b)("td",{parentName:"tr",align:null},"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"testid"},Object(l.b)("inlineCode",{parentName:"h3"},"testID")),Object(l.b)("p",null,"\u7528\u6765\u5728\u7aef\u5230\u7aef\u6d4b\u8bd5\u4e2d\u5b9a\u4f4d\u8fd9\u4e2a\u89c6\u56fe\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(l.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"\u5426")))))}d.isMDXComponent=!0},584:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),d=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,u=p["".concat(b,".").concat(m)]||p[m]||s[m]||l;return r?n.a.createElement(u,o(o({ref:t},i),{},{components:r})):n.a.createElement(u,o({ref:t},i))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,b=new Array(l);b[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,b[1]=o;for(var i=2;i<l;i++)b[i]=r[i];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);