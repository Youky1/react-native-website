(window.webpackJsonp=window.webpackJsonp||[]).push([[433],{516:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),b=(n(0),n(584)),l={id:"datepickerios",title:"\ud83d\udea7 DatePickerIOS"},c={unversionedId:"datepickerios",id:"datepickerios",isDocsHomePage:!1,title:"\ud83d\udea7 DatePickerIOS",description:"Deprecated. Use one of the community packages instead.",source:"@site/../cndocs/datepickerios.md",slug:"/datepickerios",permalink:"/docs/next/datepickerios",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/datepickerios.md",version:"current",lastUpdatedAt:1615789874},i=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"Props",id:"props",children:[{value:"<code>date</code>",id:"date",children:[]},{value:"<code>onChange</code>",id:"onchange",children:[]},{value:"<code>onDateChange</code>",id:"ondatechange",children:[]},{value:"<code>maximumDate</code>",id:"maximumdate",children:[]},{value:"<code>minimumDate</code>",id:"minimumdate",children:[]},{value:"<code>minuteInterval</code>",id:"minuteinterval",children:[]},{value:"<code>mode</code>",id:"mode",children:[]},{value:"<code>locale</code>",id:"locale",children:[]},{value:"<code>timeZoneOffsetInMinutes</code>",id:"timezoneoffsetinminutes",children:[]},{value:"<code>initialDate</code>",id:"initialdate",children:[]}]}],o={toc:i};function d(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,l,{components:t,mdxType:"MDXLayout"}),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"Deprecated.")," Use one of the ",Object(b.b)("a",{parentName:"p",href:"https://reactnative.directory/?search=datepicker"},"community packages")," instead.")),Object(b.b)("p",null,"\u4f7f\u7528",Object(b.b)("inlineCode",{parentName:"p"},"DatePickerIOS"),"\u6765\u5728 iOS \u5e73\u53f0\u4e0a\u6e32\u67d3\u4e00\u4e2a\u65e5\u671f/\u65f6\u95f4\u9009\u62e9\u5668\u3002\u8fd9\u662f\u4e00\u4e2a\u53d7\u7ea6\u675f\u7684(Controlled)\u7ec4\u4ef6\uff0c\u6240\u4ee5\u4f60\u5fc5\u987b\u76d1\u542c",Object(b.b)("inlineCode",{parentName:"p"},"onDateChange"),"\u56de\u8c03\u51fd\u6570\u5e76\u4e14\u53ca\u65f6\u66f4\u65b0",Object(b.b)("inlineCode",{parentName:"p"},"date"),"\u5c5e\u6027\u6765\u4f7f\u5f97\u7ec4\u4ef6\u66f4\u65b0\uff0c\u5426\u5219\u7528\u6237\u7684\u4fee\u6539\u4f1a\u7acb\u523b\u88ab\u64a4\u9500\u6765\u786e\u4fdd\u5f53\u524d\u663e\u793a\u503c\u548c",Object(b.b)("inlineCode",{parentName:"p"},"props.date"),"\u4e00\u81f4\u3002"),Object(b.b)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"import React, { Component } from 'react'\nimport {\n  DatePickerIOS,\n  View,\n  StyleSheet,\n} from 'react-native'\n\nexport default class App extends Component {\n  constructor(props) {\n    super(props);\n    this.state = { chosenDate: new Date() };\n\n    this.setDate = this.setDate.bind(this);\n  }\n\n  setDate(newDate) {\n    this.setState({chosenDate: newDate})\n  }\n\n  render() {\n    return (\n      <View style={styles.container}>\n        <DatePickerIOS\n          date={this.state.chosenDate}\n          onDateChange={this.setDate}\n        />\n      </View>\n    )\n  }\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center'\n  },\n})\n")),Object(b.b)("center",null,Object(b.b)("img",{src:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/assets/DatePickerIOS/example.gif",width:"360"})),Object(b.b)("hr",null),Object(b.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("h3",{id:"date"},Object(b.b)("inlineCode",{parentName:"h3"},"date")),Object(b.b)("p",null,"\u5f53\u524d\u88ab\u9009\u4e2d\u7684\u65e5\u671f\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(b.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Date"),Object(b.b)("td",{parentName:"tr",align:null},"\u662f")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onchange"},Object(b.b)("inlineCode",{parentName:"h3"},"onChange")),Object(b.b)("p",null,"Date change handler."),Object(b.b)("p",null,"This is called when the user changes the date or time in the UI. The first and only argument is an Event. For getting the date the picker was changed to, use onDateChange instead."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"function"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"ondatechange"},Object(b.b)("inlineCode",{parentName:"h3"},"onDateChange")),Object(b.b)("p",null,"\u65e5\u671f/\u65f6\u95f4\u53d8\u5316\u7684\u76d1\u542c\u51fd\u6570\u3002"),Object(b.b)("p",null,"\u5f53\u7528\u6237\u4fee\u6539\u65e5\u671f\u6216\u65f6\u95f4\u65f6\u8c03\u7528\u6b64\u56de\u8c03\u51fd\u6570\u3002\u552f\u4e00\u7684\u53c2\u6570\u662f\u4e00\u4e2a\u65e5\u671f\u5bf9\u8c61\uff0c\u8868\u793a\u65b0\u7684\u65e5\u671f\u548c\u65f6\u95f4\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(b.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"function"),Object(b.b)("td",{parentName:"tr",align:null},"\u662f")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"maximumdate"},Object(b.b)("inlineCode",{parentName:"h3"},"maximumDate")),Object(b.b)("p",null,"\u53ef\u9009\u7684\u6700\u5927\u65e5\u671f\u3002"),Object(b.b)("p",null,"\u9650\u5236\u53ef\u9009\u7684\u65e5\u671f/\u65f6\u95f4\u8303\u56f4\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(b.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Date"),Object(b.b)("td",{parentName:"tr",align:null},"\u5426")))),Object(b.b)("p",null,"Example with ",Object(b.b)("inlineCode",{parentName:"p"},"maximumDate")," set to December 31, 2017:"),Object(b.b)("center",null,Object(b.b)("img",{src:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/assets/DatePickerIOS/maximumDate.gif",width:"360"})),Object(b.b)("hr",null),Object(b.b)("h3",{id:"minimumdate"},Object(b.b)("inlineCode",{parentName:"h3"},"minimumDate")),Object(b.b)("p",null,"\u53ef\u9009\u7684\u6700\u5c0f\u65e5\u671f\u3002"),Object(b.b)("p",null,"\u9650\u5236\u53ef\u9009\u7684\u65e5\u671f/\u65f6\u95f4\u8303\u56f4\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(b.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Date"),Object(b.b)("td",{parentName:"tr",align:null},"\u5426")))),Object(b.b)("p",null,"See ",Object(b.b)("a",{parentName:"p",href:"/docs/next/datepickerios#maximumdate"},Object(b.b)("inlineCode",{parentName:"a"},"maximumDate"))," for an example image."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"minuteinterval"},Object(b.b)("inlineCode",{parentName:"h3"},"minuteInterval")),Object(b.b)("p",null,"\u53ef\u9009\u7684\u6700\u5c0f\u7684\u5206\u949f\u5355\u4f4d\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(b.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"enum(1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30)"),Object(b.b)("td",{parentName:"tr",align:null},"\u5426")))),Object(b.b)("p",null,"Example with ",Object(b.b)("inlineCode",{parentName:"p"},"minuteInterval")," set to ",Object(b.b)("inlineCode",{parentName:"p"},"10"),":"),Object(b.b)("center",null,Object(b.b)("img",{src:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/assets/DatePickerIOS/minuteInterval.png",width:"360"})),Object(b.b)("hr",null),Object(b.b)("h3",{id:"mode"},Object(b.b)("inlineCode",{parentName:"h3"},"mode")),Object(b.b)("p",null,"\u9009\u62e9\u5668\u6a21\u5f0f\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"enum('date', 'time', 'datetime', 'countdown')"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("p",null,"Example with ",Object(b.b)("inlineCode",{parentName:"p"},"mode")," set to ",Object(b.b)("inlineCode",{parentName:"p"},"date"),", ",Object(b.b)("inlineCode",{parentName:"p"},"time"),", and ",Object(b.b)("inlineCode",{parentName:"p"},"datetime"),": ",Object(b.b)("img",{src:n(735).default})),Object(b.b)("hr",null),Object(b.b)("h3",{id:"locale"},Object(b.b)("inlineCode",{parentName:"h3"},"locale")),Object(b.b)("p",null,"The locale for the date picker. Value needs to be a ",Object(b.b)("a",{parentName:"p",href:"https://developer.apple.com/library/content/documentation/MacOSX/Conceptual/BPInternational/LanguageandLocaleIDs/LanguageandLocaleIDs.html"},"Locale ID"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(b.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"String"),Object(b.b)("td",{parentName:"tr",align:null},"\u5426")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"timezoneoffsetinminutes"},Object(b.b)("inlineCode",{parentName:"h3"},"timeZoneOffsetInMinutes")),Object(b.b)("p",null,"\u65f6\u533a\u5dee\uff0c\u5355\u4f4d\u662f\u5206\u949f\u3002"),Object(b.b)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u9009\u62e9\u5668\u4f1a\u9009\u62e9\u8bbe\u5907\u7684\u9ed8\u8ba4\u65f6\u533a\u3002\u901a\u8fc7\u6b64\u53c2\u6570\uff0c\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u65f6\u533a\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u8981\u4f7f\u7528\u5317\u4eac\u65f6\u95f4\uff08\u4e1c\u516b\u533a\uff09\uff0c\u53ef\u4ee5\u4f20\u9012 8 ","*"," 60\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(b.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"\u5426")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"initialdate"},Object(b.b)("inlineCode",{parentName:"h3"},"initialDate")),Object(b.b)("p",null,"Provides an initial value that will change when the user starts selecting a date. It is useful for simple use-cases where you do not want to deal with listening to events and updating the date prop to keep the controlled state in sync. The controlled state has known bugs which causes it to go out of sync with native. The initialDate prop is intended to allow you to have native be source of truth."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Date"),Object(b.b)("td",{parentName:"tr",align:null},"No")))))}d.isMDXComponent=!0},584:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,O=p["".concat(l,".").concat(u)]||p[u]||m[u]||b;return n?r.a.createElement(O,c(c({ref:t},o),{},{components:n})):r.a.createElement(O,c({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,l=new Array(b);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<b;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},735:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/mode-089618b034a4d64bad0b39c4be929f4a.png"}}]);