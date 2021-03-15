(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{308:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return c}));var o=t(3),i=t(8),a=(t(0),t(584)),r={id:"custom-webview-ios",title:"Custom WebView"},s={unversionedId:"custom-webview-ios",id:"custom-webview-ios",isDocsHomePage:!1,title:"Custom WebView",description:"While the built-in web view has a lot of features, it is not possible to handle every use-case in React Native. You can, however, extend the web view with native code without forking React Native or duplicating all the existing web view code.",source:"@site/../cndocs/custom-webview-ios.md",slug:"/custom-webview-ios",permalink:"/docs/next/custom-webview-ios",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/custom-webview-ios.md",version:"current",lastUpdatedAt:1615789874},p=[{value:"Native Code",id:"native-code",children:[{value:"Adding New Events and Properties",id:"adding-new-events-and-properties",children:[]},{value:"Extending Existing Events",id:"extending-existing-events",children:[]}]},{value:"JavaScript Interface",id:"javascript-interface",children:[]}],l={toc:p};function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"While the built-in web view has a lot of features, it is not possible to handle every use-case in React Native. You can, however, extend the web view with native code without forking React Native or duplicating all the existing web view code."),Object(a.b)("p",null,"Before you do this, you should be familiar with the concepts in ",Object(a.b)("a",{parentName:"p",href:"native-components-ios"},"native UI components"),". You should also familiarise yourself with the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/React/Views/RCTWebViewManager.m"},"native code for web views"),", as you will have to use this as a reference when implementing new features\u2014although a deep understanding is not required."),Object(a.b)("h2",{id:"native-code"},"Native Code"),Object(a.b)("p",null,"Like for regular native components, you need a view manager and an web view."),Object(a.b)("p",null,"For the view, you'll need to make a subclass of ",Object(a.b)("inlineCode",{parentName:"p"},"RCTWebView"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-objc"},'// RCTCustomWebView.h\n#import <React/RCTWebView.h>\n\n@interface RCTCustomWebView : RCTWebView\n\n@end\n\n// RCTCustomWebView.m\n#import "RCTCustomWebView.h"\n\n@interface RCTCustomWebView ()\n\n@end\n\n@implementation RCTCustomWebView { }\n\n@end\n')),Object(a.b)("p",null,"For the view manager, you need to make a subclass ",Object(a.b)("inlineCode",{parentName:"p"},"RCTWebViewManager"),". You must still include:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"(UIView *)view")," that returns your custom view"),Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"RCT_EXPORT_MODULE()")," tag")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-objc"},'// RCTCustomWebViewManager.h\n#import <React/RCTWebViewManager.h>\n\n@interface RCTCustomWebViewManager : RCTWebViewManager\n\n@end\n\n// RCTCustomWebViewManager.m\n#import "RCTCustomWebViewManager.h"\n#import "RCTCustomWebView.h"\n\n@interface RCTCustomWebViewManager () <RCTWebViewDelegate>\n\n@end\n\n@implementation RCTCustomWebViewManager { }\n\nRCT_EXPORT_MODULE()\n\n- (UIView *)view\n{\n  RCTCustomWebView *webView = [RCTCustomWebView new];\n  webView.delegate = self;\n  return webView;\n}\n\n@end\n')),Object(a.b)("h3",{id:"adding-new-events-and-properties"},"Adding New Events and Properties"),Object(a.b)("p",null,"Adding new properties and events is the same as regular UI components. For properties, you define an ",Object(a.b)("inlineCode",{parentName:"p"},"@property")," in the header. For events, you define a ",Object(a.b)("inlineCode",{parentName:"p"},"RCTDirectEventBlock")," in the view's ",Object(a.b)("inlineCode",{parentName:"p"},"@interface"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-objc"},"// RCTCustomWebView.h\n@property (nonatomic, copy) NSString *finalUrl;\n\n// RCTCustomWebView.m\n@interface RCTCustomWebView ()\n\n@property (nonatomic, copy) RCTDirectEventBlock onNavigationCompleted;\n\n@end\n")),Object(a.b)("p",null,"Then expose it in the view manager's ",Object(a.b)("inlineCode",{parentName:"p"},"@implementation"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-objc"},"// RCTCustomWebViewManager.m\nRCT_EXPORT_VIEW_PROPERTY(onNavigationCompleted, RCTDirectEventBlock)\nRCT_EXPORT_VIEW_PROPERTY(finalUrl, NSString)\n")),Object(a.b)("h3",{id:"extending-existing-events"},"Extending Existing Events"),Object(a.b)("p",null,"You should refer to ",Object(a.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/React/Views/RCTWebView.m"},"RCTWebView.m")," in the React Native codebase to see what handlers are available and how they are implemented. You can extend any methods here to provide extra functionality."),Object(a.b)("p",null,"By default, most methods aren't exposed from RCTWebView. If you need to expose them, you need to create an ",Object(a.b)("a",{parentName:"p",href:"https://developer.apple.com/library/content/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/CustomizingExistingClasses/CustomizingExistingClasses.html"},"Objective C category"),", and then expose all the methods you need to use."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-objc"},"// RCTWebView+Custom.h\n#import <React/RCTWebView.h>\n\n@interface RCTWebView (Custom)\n- (BOOL)webView:(__unused UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType;\n- (NSMutableDictionary<NSString *, id> *)baseEvent;\n@end\n")),Object(a.b)("p",null,"Once these are exposed, you can reference them in your custom web view class."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-objc"},'// RCTCustomWebView.m\n\n// Remember to import the category file.\n#import "RCTWebView+Custom.h"\n\n- (BOOL)webView:(__unused UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request\n navigationType:(UIWebViewNavigationType)navigationType\n{\n  BOOL allowed = [super webView:webView shouldStartLoadWithRequest:request navigationType:navigationType];\n\n  if (allowed) {\n    NSString* url = request.URL.absoluteString;\n    if (url && [url isEqualToString:_finalUrl]) {\n      if (_onNavigationCompleted) {\n        NSMutableDictionary<NSString *, id> *event = [self baseEvent];\n        _onNavigationCompleted(event);\n      }\n    }\n  }\n\n  return allowed;\n}\n')),Object(a.b)("h2",{id:"javascript-interface"},"JavaScript Interface"),Object(a.b)("p",null,"To use your custom web view, you'll need to create a class for it. Your class must:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Export all the prop types from ",Object(a.b)("inlineCode",{parentName:"li"},"WebView.propTypes")),Object(a.b)("li",{parentName:"ul"},"Return a ",Object(a.b)("inlineCode",{parentName:"li"},"WebView")," component with the prop ",Object(a.b)("inlineCode",{parentName:"li"},"nativeConfig.component")," set to your native component (see below)")),Object(a.b)("p",null,"To get your native component, you must use ",Object(a.b)("inlineCode",{parentName:"p"},"requireNativeComponent"),": the same as for regular custom components. However, you must pass in an extra third argument, ",Object(a.b)("inlineCode",{parentName:"p"},"WebView.extraNativeComponentConfig"),". This third argument contains prop types that are only required for native code."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React, {Component, PropTypes} from 'react';\nimport {WebView, requireNativeComponent, NativeModules} from 'react-native';\nconst {CustomWebViewManager} = NativeModules;\n\nexport default class CustomWebView extends Component {\n  static propTypes = WebView.propTypes;\n\n  render() {\n    return (\n      <WebView\n        {...this.props}\n        nativeConfig={{\n          component: RCTCustomWebView,\n          viewManager: CustomWebViewManager,\n        }}\n      />\n    );\n  }\n}\n\nconst RCTCustomWebView = requireNativeComponent(\n  'RCTCustomWebView',\n  CustomWebView,\n  WebView.extraNativeComponentConfig\n);\n")),Object(a.b)("p",null,"If you want to add custom props to your native component, you can use ",Object(a.b)("inlineCode",{parentName:"p"},"nativeConfig.props")," on the web view. For iOS, you should also set the ",Object(a.b)("inlineCode",{parentName:"p"},"nativeConfig.viewManager")," prop with your custom WebView ViewManager as in the example above."),Object(a.b)("p",null,"For events, the event handler must always be set to a function. This means it isn't safe to use the event handler directly from ",Object(a.b)("inlineCode",{parentName:"p"},"this.props"),", as the user might not have provided one. The standard approach is to create a event handler in your class, and then invoking the event handler given in ",Object(a.b)("inlineCode",{parentName:"p"},"this.props")," if it exists."),Object(a.b)("p",null,"If you are unsure how something should be implemented from the JS side, look at ",Object(a.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/Libraries/Components/WebView/WebView.ios.js"},"WebView.ios.js")," in the React Native source."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"export default class CustomWebView extends Component {\n  static propTypes = {\n    ...WebView.propTypes,\n    finalUrl: PropTypes.string,\n    onNavigationCompleted: PropTypes.func,\n  };\n\n  static defaultProps = {\n    finalUrl: 'about:blank',\n  };\n\n  _onNavigationCompleted = (event) => {\n    const {onNavigationCompleted} = this.props;\n    onNavigationCompleted && onNavigationCompleted(event);\n  };\n\n  render() {\n    return (\n      <WebView\n        {...this.props}\n        nativeConfig={{\n          component: RCTCustomWebView,\n          props: {\n            finalUrl: this.props.finalUrl,\n            onNavigationCompleted: this._onNavigationCompleted,\n          },\n          viewManager: CustomWebViewManager,\n        }}\n      />\n    );\n  }\n}\n")),Object(a.b)("p",null,"Just like for regular native components, you must provide all your prop types in the component to have them forwarded on to the native component. However, if you have some prop types that are only used internally in component, you can add them to the ",Object(a.b)("inlineCode",{parentName:"p"},"nativeOnly")," property of the third argument previously mentioned. For event handlers, you have to use the value ",Object(a.b)("inlineCode",{parentName:"p"},"true")," instead of a regular prop type."),Object(a.b)("p",null,"For example, if you wanted to add an internal event handler called ",Object(a.b)("inlineCode",{parentName:"p"},"onScrollToBottom"),", you would use,"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"const RCTCustomWebView = requireNativeComponent(\n  'RCTCustomWebView',\n  CustomWebView,\n  {\n    ...WebView.extraNativeComponentConfig,\n    nativeOnly: {\n      ...WebView.extraNativeComponentConfig.nativeOnly,\n      onScrollToBottom: true,\n    },\n  }\n);\n")))}c.isMDXComponent=!0},584:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var o=t(0),i=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),c=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},b=function(e){var n=c(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=c(t),m=o,d=b["".concat(r,".").concat(m)]||b[m]||u[m]||a;return t?i.a.createElement(d,s(s({ref:n},l),{},{components:t})):i.a.createElement(d,s({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<a;l++)r[l]=t[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);