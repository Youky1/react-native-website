(window.webpackJsonp=window.webpackJsonp||[]).push([[471],{554:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(8),c=(n(0),n(584)),o={id:"clipboard",title:"\ud83d\udea7 Clipboard"},i={unversionedId:"clipboard",id:"clipboard",isDocsHomePage:!1,title:"\ud83d\udea7 Clipboard",description:"Deprecated. Use one of the community packages instead.",source:"@site/../cndocs/clipboard.md",slug:"/clipboard",permalink:"/docs/next/clipboard",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/clipboard.md",version:"current",lastUpdatedAt:1615789874},l=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>getString()</code>",id:"getstring",children:[]},{value:"<code>setString()</code>",id:"setstring",children:[]}]}],p={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"Deprecated.")," Use one of the ",Object(c.b)("a",{parentName:"p",href:"https://reactnative.directory/?search=clipboard"},"community packages")," instead.")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Clipboard"),"\u7ec4\u4ef6\u53ef\u4ee5\u5728 iOS \u548c Android \u7684\u526a\u8d34\u677f\u4e2d\u8bfb\u5199\u5185\u5bb9\u3002"),Object(c.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Clipboard API Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%0Aimport%20%7B%20SafeAreaView%2C%20View%2C%20Text%2C%20TouchableOpacity%2C%20Clipboard%2C%20StyleSheet%20%7D%20from%20'react-native'%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BcopiedText%2C%20setCopiedText%5D%20%3D%20useState('')%0A%20%20const%20copyToClipboard%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Clipboard.setString('hello%20world')%0A%20%20%7D%0A%20%20const%20fetchCopiedText%20%3D%20async%20()%20%3D%3E%20%7B%0A%20%20%20%20const%20text%20%3D%20await%20Clipboard.getString()%0A%20%20%20%20setCopiedText(text)%0A%20%20%7D%0A%20%20return%20(%0A%20%20%20%20%3CSafeAreaView%20style%3D%7B%7B%20flex%3A%201%20%7D%7D%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CTouchableOpacity%20onPress%3D%7B()%20%3D%3E%20copyToClipboard()%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%3EClick%20here%20to%20copy%20to%20Clipboard%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%20%20%3CTouchableOpacity%20onPress%3D%7B()%20%3D%3E%20fetchCopiedText()%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%3EView%20copied%20text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.copiedText%7D%3E%7BcopiedText%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FSafeAreaView%3E%0A%20%20)%0A%7D%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20alignItems%3A%20'center'%0A%20%20%7D%2C%0A%20%20copiedText%3A%20%7B%0A%20%20%20%20marginTop%3A%2010%2C%0A%20%20%20%20color%3A%20'red'%0A%20%20%7D%0A%7D)%0Aexport%20default%20App","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(c.b)("hr",null),Object(c.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(c.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(c.b)("h3",{id:"getstring"},Object(c.b)("inlineCode",{parentName:"h3"},"getString()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static getString()\n")),Object(c.b)("p",null,"\u83b7\u53d6\u526a\u8d34\u677f\u7684\u6587\u672c\u5185\u5bb9\u3002\u8fd4\u56de\u4e00\u4e2a",Object(c.b)("inlineCode",{parentName:"p"},"Promise"),"\uff0c\u7136\u540e\u4f60\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u65b9\u5f0f\u6765\u8bfb\u53d6\u526a\u8d34\u677f\u5185\u5bb9\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"async _getContent() {\n  const content = await Clipboard.getString();\n}\n")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"setstring"},Object(c.b)("inlineCode",{parentName:"h3"},"setString()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static setString(content)\n")),Object(c.b)("p",null,"\u8bbe\u7f6e\u526a\u8d34\u677f\u7684\u6587\u672c\u5185\u5bb9\uff0c\u7136\u540e\u4f60\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u65b9\u5f0f\u6765\u8bbe\u7f6e\u526a\u8d34\u677f\u5185\u5bb9\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"_setContent() {\n  Clipboard.setString('hello world');\n}\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"\u540d\u79f0"),Object(c.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(c.b)("th",{parentName:"tr",align:null},"Required"),Object(c.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"content"),Object(c.b)("td",{parentName:"tr",align:null},"string"),Object(c.b)("td",{parentName:"tr",align:null},"Yes"),Object(c.b)("td",{parentName:"tr",align:null},"The content to be stored in the clipboard")))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Notice")),Object(c.b)("p",null,"Be careful when you're trying to copy to clipboard any data except ",Object(c.b)("inlineCode",{parentName:"p"},"string")," and ",Object(c.b)("inlineCode",{parentName:"p"},"number"),", some data need additional stringification. For example, if you will try to copy array - Android will raise an exception, but iOS will not."))}b.isMDXComponent=!0},584:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=b(n),u=r,m=d["".concat(o,".").concat(u)]||d[u]||s[u]||c;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);