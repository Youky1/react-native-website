"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[91444],{35318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,v=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(v,l(l({ref:t},d),{},{components:n})):a.createElement(v,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45981:function(e,t,n){var a=n(161),r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=r?"ios":"android",o=r?"macos":i?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},70517:function(e,t,n){var a=n(27378);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},64535:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(27378),r=n(84956);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(38944),o="tabItem_c0e5",s="tabItemActive_28AG";var c=37,d=39;var u=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,u=e.values,p=e.groupId,m=e.className,v=i(),f=v.tabGroupChoices,A=v.setTabGroupChoices,h=(0,a.useState)(r),b=h[0],y=h[1],g=a.Children.toArray(e.children),k=[];if(null!=p){var C=f[p];null!=C&&C!==b&&u.some((function(e){return e.value===C}))&&y(C)}var E=function(e){var t=e.currentTarget,n=k.indexOf(t),a=u[n].value;y(a),null!=p&&(A(p,a),setTimeout((function(){var e,n,a,r,i,l,o,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,c=l.innerWidth,n>=0&&i<=c&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},D=function(e){var t,n;switch(e.keyCode){case d:var a=k.indexOf(e.target)+1;n=k[a]||k[0];break;case c:var r=k.indexOf(e.target)-1;n=k[r]||k[k.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:D,onFocus:E,onClick:E},n)}))),t?(0,a.cloneElement)(g.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},84956:function(e,t,n){var a=(0,n(27378).createContext)(void 0);t.Z=a},42917:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var a=n(25773),r=n(30808),i=(n(27378),n(35318)),l=n(64535),o=n(70517),s=n(45981),c=["components"],d={id:"systrace",title:"Systrace"},u=void 0,p={unversionedId:"systrace",id:"version-0.65/systrace",isDocsHomePage:!1,title:"Systrace",description:"Systrace is a standard Android marker-based profiling tool (and is installed when you install the Android platform-tools package). Profiled code blocks are surrounded by start/end markers which are then visualized in a colorful chart format. Both the Android SDK and React Native framework provide standard markers that you can visualize.",source:"@site/versioned_docs/version-0.65/systrace.md",sourceDirName:".",slug:"/systrace",permalink:"/docs/systrace",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/systrace.md",version:"0.65",frontMatter:{id:"systrace",title:"Systrace"},sidebar:"version-0.65/api",previous:{title:"StyleSheet",permalink:"/docs/stylesheet"},next:{title:"Transforms",permalink:"/docs/transforms"}},m=[{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>installReactHook()</code>",id:"installreacthook",children:[]},{value:"<code>setEnabled()</code>",id:"setenabled",children:[]},{value:"<code>isEnabled()</code>",id:"isenabled",children:[]},{value:"<code>beginEvent()</code>",id:"beginevent",children:[]},{value:"<code>endEvent()</code>",id:"endevent",children:[]},{value:"<code>beginAsyncEvent()</code>",id:"beginasyncevent",children:[]},{value:"<code>endAsyncEvent()</code>",id:"endasyncevent",children:[]},{value:"<code>counterEvent()</code>",id:"counterevent",children:[]}]}],v={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Systrace")," is a standard Android marker-based profiling tool (and is installed when you install the Android platform-tools package). Profiled code blocks are surrounded by start/end markers which are then visualized in a colorful chart format. Both the Android SDK and React Native framework provide standard markers that you can visualize."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Systrace")," allows you to mark JavaScript (JS) events with a tag and an integer value. Capture the non-Timed JS events in EasyProfiler."),(0,i.kt)(l.Z,{groupId:"syntax",defaultValue:s.Z.defaultSyntax,values:s.Z.syntax,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"functional",mdxType:"TabItem"},(0,i.kt)("div",{className:"snack-player","data-snack-name":"Systrace Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20Text%2C%20View%2C%20StyleSheet%2C%20Systrace%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%20%7B%0A%0A%20%20const%20enableProfiling%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Systrace.setEnabled(true)%3B%20%2F%2F%20Call%20setEnabled%20to%20turn%20on%20the%20profiling.%0A%20%20%20%20Systrace.beginEvent('event_label')%0A%20%20%20%20Systrace.counterEvent('event_label'%2C%2010)%3B%0A%20%20%7D%0A%0A%20%20const%20stopProfiling%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Systrace.endEvent()%0A%20%20%7D%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.header%2C%20styles.paragraph%5D%7D%3EReact%20Native%20Systrace%20API%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%20title%3D%22Capture%20the%20non-Timed%20JS%20events%20in%20EasyProfiler%22%20onPress%3D%7B()%3D%3E%20enableProfiling()%7D%2F%3E%0A%20%20%20%20%20%20%3CButton%20title%3D%22Stop%20capturing%22%20onPress%3D%7B()%3D%3E%20stopProfiling()%7D%20color%3D%22%23FF0000%22%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20backgroundColor%3A%20'%23fff'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20paddingTop%3A%2044%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20%20header%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20paragraph%3A%20%7B%0A%20%20%20%20margin%3A%2024%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,i.kt)(o.Z,{value:"classical",mdxType:"TabItem"},(0,i.kt)("div",{className:"snack-player","data-snack-name":"Systrace Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20Text%2C%20View%2C%20StyleSheet%2C%20Systrace%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%0A%20%20enableProfiling%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Systrace.setEnabled(true)%3B%20%2F%2F%20Call%20setEnabled%20to%20turn%20on%20the%20profiling.%0A%20%20%20%20Systrace.beginEvent('event_label')%0A%20%20%20%20Systrace.counterEvent('event_label'%2C%2010)%3B%0A%20%20%7D%0A%0A%20%20stopProfiling%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Systrace.endEvent()%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.header%2C%20styles.paragraph%5D%7D%3EReact%20Native%20Systrace%20API%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Capture%20the%20non-Timed%20JS%20events%20in%20EasyProfiler%22%20onPress%3D%7B()%3D%3E%20this.enableProfiling()%7D%2F%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Stop%20capturing%22%20onPress%3D%7B()%3D%3E%20this.stopProfiling()%7D%20color%3D%22%23FF0000%22%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20backgroundColor%3A%20'%23fff'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20paddingTop%3A%2044%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20%20header%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20paragraph%3A%20%7B%0A%20%20%20%20margin%3A%2024%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"reference"},"Reference"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"installreacthook"},(0,i.kt)("inlineCode",{parentName:"h3"},"installReactHook()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"static installReactHook(useFiber)\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setenabled"},(0,i.kt)("inlineCode",{parentName:"h3"},"setEnabled()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"static setEnabled(enabled)\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isenabled"},(0,i.kt)("inlineCode",{parentName:"h3"},"isEnabled()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"static isEnabled()\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"beginevent"},(0,i.kt)("inlineCode",{parentName:"h3"},"beginEvent()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"static beginEvent(profileName?, args?)\n")),(0,i.kt)("p",null,"beginEvent/endEvent for starting and then ending a profile within the same call stack frame."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"endevent"},(0,i.kt)("inlineCode",{parentName:"h3"},"endEvent()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"static endEvent()\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"beginasyncevent"},(0,i.kt)("inlineCode",{parentName:"h3"},"beginAsyncEvent()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"static beginAsyncEvent(profileName?)\n")),(0,i.kt)("p",null,"beginAsyncEvent/endAsyncEvent for starting and then ending a profile where the end can either occur on another thread or out of the current stack frame, eg await the returned cookie variable should be used as input into the endAsyncEvent call to end the profile."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"endasyncevent"},(0,i.kt)("inlineCode",{parentName:"h3"},"endAsyncEvent()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"static endAsyncEvent(profileName?, cookie?)\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"counterevent"},(0,i.kt)("inlineCode",{parentName:"h3"},"counterEvent()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"static counterEvent(profileName?, value?)\n")),(0,i.kt)("p",null,"Register the value to the profileName on the systrace timeline."))}f.isMDXComponent=!0}}]);