(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{190:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var r=a(3),o=a(8),n=(a(0),a(584)),l=(a(588),a(589),a(590),{id:"platformcolor",title:"PlatformColor"}),i={unversionedId:"platformcolor",id:"platformcolor",isDocsHomePage:!1,title:"PlatformColor",description:"`js",source:"@site/../cndocs/platformcolor.md",slug:"/platformcolor",permalink:"/docs/next/platformcolor",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/platformcolor.md",version:"current",lastUpdatedAt:1615789874,sidebar:"api",previous:{title:"Platform",permalink:"/docs/next/platform"},next:{title:"Share",permalink:"/docs/next/share"}},c=[{value:"Supported colors",id:"supported-colors",children:[]},{value:"Example",id:"example",children:[]}],s={toc:c};function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"PlatformColor(color1, [color2, ...colorN]);\n")),Object(n.b)("p",null,"You can use the ",Object(n.b)("inlineCode",{parentName:"p"},"PlatformColor")," function to access native colors on the target platform by supplying the native color\u2019s corresponding string value. You pass a string to the ",Object(n.b)("inlineCode",{parentName:"p"},"PlatformColor")," function and, provided it exists on that platform, it will return the corresponding native color, which you can apply in any part of your application."),Object(n.b)("p",null,"If you pass more than one string value to the ",Object(n.b)("inlineCode",{parentName:"p"},"PlatformColor")," function, it will treat the first value as the default and the rest as fallback."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"PlatformColor('bogusName', 'linkColor');\n")),Object(n.b)("p",null,"Since native colors can be sensitive to themes and/or high contrast, this platform specific logic also translates inside your components."),Object(n.b)("h3",{id:"supported-colors"},"Supported colors"),Object(n.b)("p",null,"For a full list of the types of system colors supported, see:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Android:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://developer.android.com/reference/android/R.attr"},"R.attr")," - ",Object(n.b)("inlineCode",{parentName:"li"},"?attr")," prefix"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://developer.android.com/reference/android/R.color"},"R.color")," - ",Object(n.b)("inlineCode",{parentName:"li"},"@android:color")," prefix"))),Object(n.b)("li",{parentName:"ul"},"iOS (Objective-C and Swift notations):",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://developer.apple.com/documentation/uikit/uicolor/standard_colors"},"UIColor Standard Colors")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://developer.apple.com/documentation/uikit/uicolor/ui_element_colors"},"UIColor UI Element Colors"))))),Object(n.b)("h2",{id:"example"},"Example"),Object(n.b)("div",{className:"snack-player","data-snack-name":"PlatformColor Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Platform%2C%0A%20%20PlatformColor%2C%0A%20%20StyleSheet%2C%0A%20%20Text%2C%0A%20%20View%0A%7D%20from%20'react-native'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.label%7D%3E%0A%20%20%20%20%20%20I%20am%20a%20special%20label%20color!%0A%20%20%20%20%3C%2FText%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20label%3A%20%7B%0A%20%20%20%20padding%3A%2016%2C%0A%20%20%20%20...Platform.select(%7B%0A%20%20%20%20%20%20ios%3A%20%7B%0A%20%20%20%20%20%20%20%20color%3A%20PlatformColor('label')%2C%0A%20%20%20%20%20%20%20%20backgroundColor%3A%0A%20%20%20%20%20%20%20%20%20%20PlatformColor('systemTealColor')%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20android%3A%20%7B%0A%20%20%20%20%20%20%20%20color%3A%20PlatformColor('%3Fandroid%3Aattr%2FtextColor')%2C%0A%20%20%20%20%20%20%20%20backgroundColor%3A%0A%20%20%20%20%20%20%20%20%20%20PlatformColor('%40android%3Acolor%2Fholo_blue_bright')%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20default%3A%20%7B%20color%3A%20'black'%20%7D%0A%20%20%20%20%7D)%0A%20%20%7D%2C%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(n.b)("p",null,"The string value provided to the ",Object(n.b)("inlineCode",{parentName:"p"},"PlatformColor")," function must match the string as it exists on the native platform where the app is running. In order to avoid runtime errors, the function should be wrapped in a platform check, either through a ",Object(n.b)("inlineCode",{parentName:"p"},"Platform.OS === 'platform'")," or a ",Object(n.b)("inlineCode",{parentName:"p"},"Platform.select()"),", as shown on the example above."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," You can find a complete example that demonstrates proper, intended use of ",Object(n.b)("inlineCode",{parentName:"p"},"PlatformColor")," in ",Object(n.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/PlatformColor/PlatformColorExample.js"},"PlatformColorExample.js"),".")))}u.isMDXComponent=!0},584:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var r=a(0),o=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,b=p["".concat(l,".").concat(m)]||p[m]||d[m]||n;return a?o.a.createElement(b,i(i({ref:t},s),{},{components:a})):o.a.createElement(b,i({ref:t},s))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<n;s++)l[s]=a[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},585:function(e,t,a){"use strict";function r(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},586:function(e,t,a){"use strict";var r=a(0),o=a(587);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},587:function(e,t,a){"use strict";var r=a(0),o=Object(r.createContext)(void 0);t.a=o},588:function(e,t,a){"use strict";var r=a(0),o=a.n(r),n=a(586),l=a(585),i=a(67),c=a.n(i),s=37,u=39;t.a=function(e){var t=e.lazy,a=e.block,i=e.defaultValue,p=e.values,d=e.groupId,m=e.className,b=Object(n.a)(),f=b.tabGroupChoices,v=b.setTabGroupChoices,h=Object(r.useState)(i),O=h[0],j=h[1],y=r.Children.toArray(e.children);if(null!=d){var C=f[d];null!=C&&C!==O&&p.some((function(e){return e.value===C}))&&j(C)}var g=function(e){j(e),null!=d&&v(d,e)},A=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},m)},p.map((function(e){var t=e.value,a=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return A.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(A,e.target,e)},onFocus:function(){return g(t)},onClick:function(){g(t)}},a)}))),t?Object(r.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},589:function(e,t,a){"use strict";var r=a(0),o=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},590:function(e,t,a){"use strict";var r=a(7),o=!!r.a.canUseDOM&&navigator.platform.startsWith("Mac"),n=!!r.a.canUseDOM&&navigator.platform.startsWith("Win"),l=o?"ios":"android",i=o?"macos":n?"windows":"linux";t.a={defaultGuide:"native",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}}}]);