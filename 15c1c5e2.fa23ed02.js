(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{152:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return p}));var n=a(3),l=a(8),r=(a(0),a(584)),b=a(588),i=a(589),c=a(590),o={id:"alert",title:"Alert"},s={unversionedId:"alert",id:"version-0.63/alert",isDocsHomePage:!1,title:"Alert",description:"\u542f\u52a8\u4e00\u4e2a\u63d0\u793a\u5bf9\u8bdd\u6846\uff0c\u5305\u542b\u5bf9\u5e94\u7684\u6807\u9898\u548c\u4fe1\u606f\u3002",source:"@site/versioned_docs/version-0.63/alert.md",slug:"/alert",permalink:"/docs/0.63/alert",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.63/alert.md",version:"0.63",lastUpdatedAt:1615789874,sidebar:"version-0.63/api",previous:{title:"AccessibilityInfo",permalink:"/docs/0.63/accessibilityinfo"},next:{title:"Animated",permalink:"/docs/0.63/animated"}},d=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"iOS",id:"ios",children:[]},{value:"Android",id:"android",children:[{value:'\u793a\u4f8b <div class="label android">Android</div>',id:"\u793a\u4f8b-android",children:[]}]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>alert()</code>",id:"alert",children:[]},{value:'<code>prompt()</code> <div class="label ios">iOS</div>',id:"prompt-ios",children:[]}]},{value:"\u7c7b\u578b\u5b9a\u4e49",id:"\u7c7b\u578b\u5b9a\u4e49",children:[{value:'AlertButtonStyle <div class="label ios">iOS</div>',id:"alertbuttonstyle-ios",children:[]},{value:'AlertType <div class="label ios">iOS</div>',id:"alerttype-ios",children:[]},{value:"Buttons",id:"buttons",children:[]},{value:'Options <div class="label android">Android</div>',id:"options-android",children:[]}]}],u={toc:d};function p(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u542f\u52a8\u4e00\u4e2a\u63d0\u793a\u5bf9\u8bdd\u6846\uff0c\u5305\u542b\u5bf9\u5e94\u7684\u6807\u9898\u548c\u4fe1\u606f\u3002"),Object(r.b)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u6307\u5b9a\u4e00\u7cfb\u5217\u7684\u6309\u94ae\uff0c\u70b9\u51fb\u5bf9\u5e94\u7684\u6309\u94ae\u4f1a\u8c03\u7528\u5bf9\u5e94\u7684 onPress \u56de\u8c03\u5e76\u4e14\u5173\u95ed\u63d0\u793a\u6846\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5bf9\u8bdd\u6846\u4f1a\u4ec5\u6709\u4e00\u4e2a'\u786e\u5b9a'\u6309\u94ae\u3002"),Object(r.b)("p",null,"\u672c\u63a5\u53e3\u53ef\u4ee5\u5728 iOS \u548c Android \u4e0a\u663e\u793a\u4e00\u4e2a\u9759\u6001\u7684\u63d0\u793a\u6846\u3002\u53ea\u6709 iOS \u7cfb\u7edf\u652f\u6301\u5728\u63d0\u793a\u6846\u4e2d\u52a0\u5165\u6587\u672c\u6846\u3002"),Object(r.b)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(r.b)(b.a,{groupId:"syntax",defaultValue:c.a.defaultSyntax,values:c.a.syntax,mdxType:"Tabs"},Object(r.b)(i.a,{value:"functional",mdxType:"TabItem"},Object(r.b)("div",{className:"snack-player","data-snack-name":"Alert Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Button%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20createTwoButtonAlert%20%3D%20()%20%3D%3E%0A%20%20%20%20Alert.alert(%0A%20%20%20%20%20%20%22Alert%20Title%22%2C%0A%20%20%20%20%20%20%22My%20Alert%20Msg%22%2C%0A%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%22Cancel%20Pressed%22)%2C%0A%20%20%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20text%3A%20%22OK%22%2C%20onPress%3A%20()%20%3D%3E%20console.log(%22OK%20Pressed%22)%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20)%3B%0A%0A%20%20const%20createThreeButtonAlert%20%3D%20()%20%3D%3E%0A%20%20%20%20Alert.alert(%0A%20%20%20%20%20%20%22Alert%20Title%22%2C%0A%20%20%20%20%20%20%22My%20Alert%20Msg%22%2C%0A%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20text%3A%20%22Ask%20me%20later%22%2C%0A%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%22Ask%20me%20later%20pressed%22)%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%22Cancel%20Pressed%22)%2C%0A%20%20%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20text%3A%20%22OK%22%2C%20onPress%3A%20()%20%3D%3E%20console.log(%22OK%20Pressed%22)%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CButton%20title%3D%7B%222-Button%20Alert%22%7D%20onPress%3D%7BcreateTwoButtonAlert%7D%20%2F%3E%0A%20%20%20%20%20%20%3CButton%20title%3D%7B%223-Button%20Alert%22%7D%20onPress%3D%7BcreateThreeButtonAlert%7D%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22space-around%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),Object(r.b)(i.a,{value:"classical",mdxType:"TabItem"},Object(r.b)("div",{className:"snack-player","data-snack-name":"Alert Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Button%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20createTwoButtonAlert%20%3D%20()%20%3D%3E%0A%20%20%20%20Alert.alert(%0A%20%20%20%20%20%20%22Alert%20Title%22%2C%0A%20%20%20%20%20%20%22My%20Alert%20Msg%22%2C%0A%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%22Cancel%20Pressed%22)%2C%0A%20%20%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20text%3A%20%22OK%22%2C%20onPress%3A%20()%20%3D%3E%20console.log(%22OK%20Pressed%22)%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20)%3B%0A%0A%20%20createThreeButtonAlert%20%3D%20()%20%3D%3E%0A%20%20%20%20Alert.alert(%0A%20%20%20%20%20%20%22Alert%20Title%22%2C%0A%20%20%20%20%20%20%22My%20Alert%20Msg%22%2C%0A%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20text%3A%20%22Ask%20me%20later%22%2C%0A%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%22Ask%20me%20later%20pressed%22)%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%22Cancel%20Pressed%22)%2C%0A%20%20%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20text%3A%20%22OK%22%2C%20onPress%3A%20()%20%3D%3E%20console.log(%22OK%20Pressed%22)%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20)%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%7B%222-Button%20Alert%22%7D%20onPress%3D%7Bthis.createTwoButtonAlert%7D%20%2F%3E%0A%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%7B%223-Button%20Alert%22%7D%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis.createThreeButtonAlert%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22space-around%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),Object(r.b)("h2",{id:"ios"},"iOS"),Object(r.b)("p",null,"\u5728 iOS \u4e0a\u4f60\u53ef\u4ee5\u6307\u5b9a\u4efb\u610f\u6570\u91cf\u7684\u6309\u94ae\u3002\u6bcf\u4e2a\u6309\u94ae\u8fd8\u90fd\u53ef\u4ee5\u6307\u5b9a\u81ea\u5df1\u7684\u6837\u5f0f\uff0c\u6b64\u5916\u8fd8\u53ef\u4ee5\u6307\u5b9a\u63d0\u793a\u7684\u7c7b\u522b\u3002\u53c2\u9605",Object(r.b)("a",{parentName:"p",href:"#alertbuttonstyle.md"},"AlertButtonStyle"),"\u6765\u4e86\u89e3\u66f4\u591a\u7ec6\u8282\u3002"),Object(r.b)("h2",{id:"android"},"Android"),Object(r.b)("p",null,"\u5728 Android \u4e0a\u6700\u591a\u80fd\u6307\u5b9a\u4e09\u4e2a\u6309\u94ae\uff0c\u8fd9\u4e09\u4e2a\u6309\u94ae\u5206\u522b\u5177\u6709\u201c\u4e2d\u95f4\u6001\u201d\u3001\u201c\u6d88\u6781\u6001\u201d\u548c\u201c\u79ef\u6781\u6001\u201d\u7684\u6982\u5ff5\uff1a"),Object(r.b)("p",null,"\u5982\u679c\u4f60\u53ea\u6307\u5b9a\u4e00\u4e2a\u6309\u94ae\uff0c\u5219\u5b83\u5177\u6709\u201c\u79ef\u6781\u6001\u201d\u7684\u5c5e\u6027\uff08\u6bd4\u5982\u201c\u786e\u5b9a\u201d\uff09\uff1b\u4e24\u4e2a\u6309\u94ae\uff0c\u5219\u5206\u522b\u662f\u201c\u6d88\u6781\u6001\u201d\u548c\u201c\u79ef\u6781\u6001\u201d\uff08\u6bd4\u5982\u201c\u53d6\u6d88\u201d\u548c\u201c\u786e\u5b9a\u201d\uff09\uff1b\u4e09\u4e2a\u6309\u94ae\u5219\u610f\u5473\u7740\u201c\u4e2d\u95f4\u6001\u201d\u3001\u201c\u6d88\u6781\u6001\u201d\u548c\u201c\u79ef\u6781\u6001\u201d\uff08\u6bd4\u5982\u201c\u7a0d\u5019\u518d\u8bf4\u201d\uff0c\u201c\u53d6\u6d88\u201d\uff0c\u201c\u786e\u5b9a\u201d\uff09\u3002"),Object(r.b)("p",null,"\u5728 Android \u4e0a\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb\u63d0\u793a\u6846\u7684\u5916\u9762\u6765\u53d6\u6d88\u63d0\u793a\u6846\uff0c\u4f46\u8fd9\u4e00\u884c\u4e3a\u9ed8\u8ba4\u6ca1\u6709\u542f\u7528\u3002\u4f60\u53ef\u4ee5\u5728",Object(r.b)("a",{parentName:"p",href:"#options"},Object(r.b)("inlineCode",{parentName:"a"},"Options")),"\u4e2d\u63d0\u4f9b\u4e00\u4e2a\u989d\u5916\u53c2\u6570\u6765\u542f\u7528\u8fd9\u4e00\u884c\u4e3a\uff1a",Object(r.b)("inlineCode",{parentName:"p"},"{ cancelable: true }"),"\u3002"),Object(r.b)("p",null,"\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5728",Object(r.b)("inlineCode",{parentName:"p"},"options"),"\u4e2d\u6dfb\u52a0",Object(r.b)("inlineCode",{parentName:"p"},"onDismiss"),"\u56de\u8c03\u51fd\u6570\u6765\u6355\u83b7\u7528\u6237\u7684\u53d6\u6d88\u64cd\u4f5c\uff1a",Object(r.b)("inlineCode",{parentName:"p"},"{ onDismiss: () => {} }"),"\u3002"),Object(r.b)("h3",{id:"\u793a\u4f8b-android"},"\u793a\u4f8b ",Object(r.b)("div",{class:"label android"},"Android")),Object(r.b)("div",{className:"snack-player","data-snack-name":"Alert Android Dissmissable Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Button%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20showAlert%20%3D%20()%20%3D%3E%0A%20%20Alert.alert(%0A%20%20%20%20%22Alert%20Title%22%2C%0A%20%20%20%20%22My%20Alert%20Msg%22%2C%0A%20%20%20%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20Alert.alert(%22Cancel%20Pressed%22)%2C%0A%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20cancelable%3A%20true%2C%0A%20%20%20%20%20%20onDismiss%3A%20()%20%3D%3E%0A%20%20%20%20%20%20%20%20Alert.alert(%0A%20%20%20%20%20%20%20%20%20%20%22This%20alert%20was%20dismissed%20by%20tapping%20outside%20of%20the%20alert%20dialog.%22%0A%20%20%20%20%20%20%20%20)%2C%0A%20%20%20%20%7D%0A%20%20)%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CButton%20title%3D%22Show%20alert%22%20onPress%3D%7BshowAlert%7D%20%2F%3E%0A)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(r.b)("hr",null),Object(r.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(r.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(r.b)("h3",{id:"alert"},Object(r.b)("inlineCode",{parentName:"h3"},"alert()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"static alert(title, message?, buttons?, options?)\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"\u540d\u79f0"),Object(r.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(r.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"title"),Object(r.b)("td",{parentName:"tr",align:null},"string ",Object(r.b)("div",{class:"label basic required"},"Required")),Object(r.b)("td",{parentName:"tr",align:null},"The dialog's title. Passing ",Object(r.b)("inlineCode",{parentName:"td"},"null")," or empty string will hide the title.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"message"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"An optional message that appears below the dialog's title.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"buttons"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"alert#buttons"},"Buttons")),Object(r.b)("td",{parentName:"tr",align:null},"An optional array containg buttons configuration.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"options"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"alert#options"},"Options")," ",Object(r.b)("div",{class:"label android"},"Android")),Object(r.b)("td",{parentName:"tr",align:null},"An optional Alert configuration for the Android.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"prompt-ios"},Object(r.b)("inlineCode",{parentName:"h3"},"prompt()")," ",Object(r.b)("div",{class:"label ios"},"iOS")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"static prompt(title, message?, callbackOrButtons?, type?, defaultValue?, keyboardType?)\n")),Object(r.b)("p",null,"Create and display a prompt to enter some text in form of Alert."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"\u540d\u79f0"),Object(r.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(r.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"title"),Object(r.b)("td",{parentName:"tr",align:null},"string ",Object(r.b)("div",{class:"label basic required"},"Required")),Object(r.b)("td",{parentName:"tr",align:null},"The dialog's title.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"message"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"An optional message that appears above the text input.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"callbackOrButtons"),Object(r.b)("td",{parentName:"tr",align:null},"function",Object(r.b)("hr",null),Object(r.b)("a",{parentName:"td",href:"alert#buttons"},"Buttons")),Object(r.b)("td",{parentName:"tr",align:null},"If passed a function, it will be called with the prompt's value",Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"td"},"(text: string) => void"),", when the user taps 'OK'.",Object(r.b)("hr",null),"If passed an array, buttons will be configured based on the array content.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"alert#alerttype"},"AlertType")),Object(r.b)("td",{parentName:"tr",align:null},"This configures the text input.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"defaultValue"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"The default text in text input.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"keyboardType"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"The keyboard type of first text field (if exists). One of TextInput ",Object(r.b)("a",{parentName:"td",href:"textinput#keyboardtype"},"keyboardTypes"),".")))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"\u7c7b\u578b\u5b9a\u4e49"},"\u7c7b\u578b\u5b9a\u4e49"),Object(r.b)("h3",{id:"alertbuttonstyle-ios"},"AlertButtonStyle ",Object(r.b)("div",{class:"label ios"},"iOS")),Object(r.b)("p",null,"An iOS Alert button style."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"enum")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u5e38\u91cf\uff1a")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Value"),Object(r.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"'default'")),Object(r.b)("td",{parentName:"tr",align:null},"Default button style.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"'cancel'")),Object(r.b)("td",{parentName:"tr",align:null},"Cancel button style.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"'destructive'")),Object(r.b)("td",{parentName:"tr",align:null},"Destructive button style.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"alerttype-ios"},"AlertType ",Object(r.b)("div",{class:"label ios"},"iOS")),Object(r.b)("p",null,"An iOS Alert type."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"enum")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u5e38\u91cf\uff1a")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"\u503c"),Object(r.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"'default'")),Object(r.b)("td",{parentName:"tr",align:null},"Default alert with no inputs")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"'plain-text'")),Object(r.b)("td",{parentName:"tr",align:null},"Plain text input alert")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"'secure-text'")),Object(r.b)("td",{parentName:"tr",align:null},"Secure text input alert")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"'login-password'")),Object(r.b)("td",{parentName:"tr",align:null},"Login and password alert")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"buttons"},"Buttons"),Object(r.b)("p",null,"Array of objects containg Alert buttons configuration."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"array of objects")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Objects properties:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"\u540d\u79f0"),Object(r.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(r.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"text"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Button label.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"onPress"),Object(r.b)("td",{parentName:"tr",align:null},"function"),Object(r.b)("td",{parentName:"tr",align:null},"Callback function when button is pressed.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"style ",Object(r.b)("div",{class:"label ios"},"iOS")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"alert#alertbuttonstyle"},"AlertButtonStyle")),Object(r.b)("td",{parentName:"tr",align:null},"Button style, on Android this property will be ignored.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"options-android"},"Options ",Object(r.b)("div",{class:"label android"},"Android")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"object")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u5c5e\u6027\uff1a")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"\u540d\u79f0"),Object(r.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(r.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"cancelable"),Object(r.b)("td",{parentName:"tr",align:null},"boolean"),Object(r.b)("td",{parentName:"tr",align:null},"Defines if alert can be dismissed by tapping outside of the alert box.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"onDismiss"),Object(r.b)("td",{parentName:"tr",align:null},"function"),Object(r.b)("td",{parentName:"tr",align:null},"Callback function fired when alert has been dismissed.")))),Object(r.b)("hr",null),Object(r.b)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm5199-sunnylqm4801"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",Object(r.b)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(51.99%), ",Object(r.b)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(48.01%)"))}p.isMDXComponent=!0},584:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=l.a.createContext({}),s=function(e){var t=l.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},p=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=s(a),p=n,m=d["".concat(b,".").concat(p)]||d[p]||u[p]||r;return a?l.a.createElement(m,i(i({ref:t},o),{},{components:a})):l.a.createElement(m,i({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,b=new Array(r);b[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var o=2;o<r;o++)b[o]=a[o];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},585:function(e,t,a){"use strict";function n(e){var t,a,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(l&&(l+=" "),l+=a);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,a=0,l="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(l&&(l+=" "),l+=t);return l}},586:function(e,t,a){"use strict";var n=a(0),l=a(587);t.a=function(){var e=Object(n.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},587:function(e,t,a){"use strict";var n=a(0),l=Object(n.createContext)(void 0);t.a=l},588:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(586),b=a(585),i=a(67),c=a.n(i),o=37,s=39;t.a=function(e){var t=e.lazy,a=e.block,i=e.defaultValue,d=e.values,u=e.groupId,p=e.className,m=Object(r.a)(),O=m.tabGroupChoices,j=m.setTabGroupChoices,A=Object(n.useState)(i),g=A[0],N=A[1],f=n.Children.toArray(e.children);if(null!=u){var y=O[u];null!=y&&y!==g&&d.some((function(e){return e.value===y}))&&N(y)}var h=function(e){N(e),null!=u&&j(u,e)},v=[];return l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":a},p)},d.map((function(e){var t=e.value,a=e.label;return l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(b.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case s:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(v,e.target,e)},onFocus:function(){return h(t)},onClick:function(){h(t)}},a)}))),t?Object(n.cloneElement)(f.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},589:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return l.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},590:function(e,t,a){"use strict";var n=a(7),l=!!n.a.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!n.a.canUseDOM&&navigator.platform.startsWith("Win"),b=l?"ios":"android",i=l?"macos":r?"windows":"linux";t.a={defaultGuide:"native",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:b,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}}}]);