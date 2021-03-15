(window.webpackJsonp=window.webpackJsonp||[]).push([[473],{556:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),i=(n(0),n(584)),o={id:"navigation",title:"\u4f7f\u7528\u5bfc\u822a\u5668\u8df3\u8f6c\u9875\u9762"},c={unversionedId:"navigation",id:"navigation",isDocsHomePage:!1,title:"\u4f7f\u7528\u5bfc\u822a\u5668\u8df3\u8f6c\u9875\u9762",description:"\u79fb\u52a8\u5e94\u7528\u57fa\u672c\u4e0d\u4f1a\u53ea\u7531\u4e00\u4e2a\u9875\u9762\u7ec4\u6210\u3002\u7ba1\u7406\u591a\u4e2a\u9875\u9762\u7684\u5448\u73b0\u3001\u8df3\u8f6c\u7684\u7ec4\u4ef6\u5c31\u662f\u6211\u4eec\u901a\u5e38\u6240\u8bf4\u7684\u5bfc\u822a\u5668\uff08navigator\uff09\u3002",source:"@site/../cndocs/navigation.md",slug:"/navigation",permalink:"/docs/next/navigation",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/navigation.md",version:"current",lastUpdatedAt:1615789874,sidebar:"docs",previous:{title:"\u5904\u7406\u89e6\u6478\u4e8b\u4ef6",permalink:"/docs/next/handling-touches"},next:{title:"\u52a8\u753b",permalink:"/docs/next/animations"}},p=[{value:"React Navigation",id:"react-navigation",children:[]}],u={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u79fb\u52a8\u5e94\u7528\u57fa\u672c\u4e0d\u4f1a\u53ea\u7531\u4e00\u4e2a\u9875\u9762\u7ec4\u6210\u3002\u7ba1\u7406\u591a\u4e2a\u9875\u9762\u7684\u5448\u73b0\u3001\u8df3\u8f6c\u7684\u7ec4\u4ef6\u5c31\u662f\u6211\u4eec\u901a\u5e38\u6240\u8bf4\u7684\u5bfc\u822a\u5668\uff08navigator\uff09\u3002"),Object(i.b)("p",null,"\u672c\u6587\u6863\u603b\u7ed3\u5bf9\u6bd4\u4e86 React Native \u4e2d\u73b0\u6709\u7684\u51e0\u4e2a\u5bfc\u822a\u7ec4\u4ef6\u3002\u5982\u679c\u4f60\u521a\u5f00\u59cb\u63a5\u89e6\uff0c\u90a3\u4e48\u76f4\u63a5\u9009\u62e9",Object(i.b)("a",{parentName:"p",href:"/docs/next/navigation#react-navigation"},"React Navigation"),"\u5c31\u597d\u3002 React Navigation \u63d0\u4f9b\u4e86\u7b80\u5355\u6613\u7528\u7684\u8de8\u5e73\u53f0\u5bfc\u822a\u65b9\u6848\uff0c\u5728 iOS \u548c Android \u4e0a\u90fd\u53ef\u4ee5\u8fdb\u884c\u7ffb\u9875\u5f0f\u3001tab \u9009\u9879\u5361\u5f0f\u548c\u62bd\u5c49\u5f0f\u7684\u5bfc\u822a\u5e03\u5c40\u3002"),Object(i.b)("p",null,"\u5982\u679c\u4f60\u60f3\u540c\u65f6\u5728iOS\u548cAndroid\u4e0a\u8fbe\u5230\u770b\u8d77\u6765\u50cf\u539f\u751f\uff0c\u6216\u8005\u4f60\u60f3\u628aRN\u6574\u5408\u5230\u4e00\u4e2a\u5df2\u7ecf\u6709\u539f\u751f\u5bfc\u822a\u7ba1\u7406\u7684APP\u91cc, \u4e0b\u9762\u8fd9\u4e2a\u5e93\u63d0\u4f9b\u4e86\u5728\u4e24\u4e2a\u5e73\u53f0\u90fd\u9002\u7528\u7684\u539f\u751f\u5bfc\u822a: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/wix/react-native-navigation"},"react-native-navigation"),"."),Object(i.b)("h2",{id:"react-navigation"},"React Navigation"),Object(i.b)("p",null,"\u793e\u533a\u4eca\u540e\u4e3b\u63a8\u7684\u65b9\u6848\u662f\u4e00\u4e2a\u5355\u72ec\u7684\u5bfc\u822a\u5e93",Object(i.b)("inlineCode",{parentName:"p"},"react-navigation"),"\uff0c\u5b83\u7684\u4f7f\u7528\u5341\u5206\u7b80\u5355\u3002React Navigation \u4e2d\u7684\u89c6\u56fe\u662f\u539f\u751f\u7ec4\u4ef6\uff0c\u540c\u65f6\u7528\u5230\u4e86\u8fd0\u884c\u5728\u539f\u751f\u7ebf\u7a0b\u4e0a\u7684",Object(i.b)("inlineCode",{parentName:"p"},"Animated"),"\u52a8\u753b\u5e93\uff0c\u56e0\u800c\u6027\u80fd\u8868\u73b0\u5341\u5206\u6d41\u7545\u3002\u6b64\u5916\u5176\u52a8\u753b\u5f62\u5f0f\u548c\u624b\u52bf\u90fd\u975e\u5e38\u4fbf\u4e8e\u5b9a\u5236\u3002"),Object(i.b)("p",null,"\u8981\u60f3\u8be6\u7ec6\u4e86\u89e3 React Navigation\u7684\u5177\u4f53\u7528\u6cd5\uff0c\u8bf7\u8bbf\u95ee\u5176",Object(i.b)("a",{parentName:"p",href:"https://reactnavigation.org/"},"\u5b98\u65b9\u7f51\u7ad9"),"\uff0c\u7f51\u7ad9\u53f3\u4e0a\u89d2\u6709\u4e2d\u6587\u7ffb\u8bd1\uff0c\u4f46\u5185\u5bb9\u53ef\u80fd\u4f1a\u6709\u6240\u6ede\u540e\u3002"))}l.isMDXComponent=!0},584:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return v}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,v=b["".concat(o,".").concat(d)]||b[d]||s[d]||i;return n?a.a.createElement(v,c(c({ref:t},u),{},{components:n})):a.a.createElement(v,c({ref:t},u))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);