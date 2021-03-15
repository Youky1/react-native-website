(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{391:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),b=(n(0),n(584)),l={id:"button",title:"Button"},c={unversionedId:"button",id:"button",isDocsHomePage:!1,title:"Button",description:"\u4e00\u4e2a\u7b80\u5355\u7684\u8de8\u5e73\u53f0\u7684\u6309\u94ae\u7ec4\u4ef6\u3002\u53ef\u4ee5\u8fdb\u884c\u4e00\u4e9b\u7b80\u5355\u7684\u5b9a\u5236\u3002",source:"@site/../cndocs/button.md",slug:"/button",permalink:"/docs/next/button",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/button.md",version:"current",lastUpdatedAt:1615789874,sidebar:"\u7ec4\u4ef6",previous:{title:"ActivityIndicator",permalink:"/docs/next/activityindicator"},next:{title:"FlatList",permalink:"/docs/next/flatlist"}},o=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"Props",id:"props",children:[{value:'<div class="label required basic">Required</div><strong><code>onPress</code></strong>',id:"requiredonpress",children:[]},{value:'<div class="label required basic">Required</div><strong><code>title</code></strong>',id:"requiredtitle",children:[]},{value:"<code>accessibilityLabel</code>",id:"accessibilitylabel",children:[]},{value:"<code>color</code>",id:"color",children:[]},{value:"<code>disabled</code>",id:"disabled",children:[]},{value:"<code>testID</code>",id:"testid",children:[]},{value:"<code>hasTVPreferredFocus</code>",id:"hastvpreferredfocus",children:[]},{value:"<code>nextFocusDown</code>",id:"nextfocusdown",children:[]},{value:"<code>nextFocusForward</code>",id:"nextfocusforward",children:[]},{value:"<code>nextFocusLeft</code>",id:"nextfocusleft",children:[]},{value:"<code>nextFocusRight</code>",id:"nextfocusright",children:[]},{value:"<code>nextFocusUp</code>",id:"nextfocusup",children:[]},{value:"<code>touchSoundDisabled</code>",id:"touchsounddisabled",children:[]}]}],i={toc:o};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u4e00\u4e2a\u7b80\u5355\u7684\u8de8\u5e73\u53f0\u7684\u6309\u94ae\u7ec4\u4ef6\u3002\u53ef\u4ee5\u8fdb\u884c\u4e00\u4e9b\u7b80\u5355\u7684\u5b9a\u5236\u3002"),Object(b.b)("p",null,"\u8fd9\u4e2a\u7ec4\u4ef6\u7684\u6837\u5f0f\u662f\u56fa\u5b9a\u7684\u3002\u6240\u4ee5\u5982\u679c\u5b83\u7684\u5916\u89c2\u5e76\u4e0d\u600e\u4e48\u642d\u914d\u4f60\u7684\u8bbe\u8ba1\uff0c\u90a3\u4f60\u9700\u8981\u4f7f\u7528",Object(b.b)("inlineCode",{parentName:"p"},"TouchableOpacity"),"\u6216\u662f",Object(b.b)("inlineCode",{parentName:"p"},"TouchableNativeFeedback"),"\u7ec4\u4ef6\u6765\u5b9a\u5236\u81ea\u5df1\u6240\u9700\u8981\u7684\u6309\u94ae\uff0c\u6216\u8005\u4f60\u4e5f\u53ef\u4ee5\u5728 github.com \u7f51\u7ad9\u4e0a\u641c\u7d22 'react native button' \u6765\u770b\u770b\u793e\u533a\u5176\u4ed6\u4eba\u7684\u4f5c\u54c1\u3002"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},'import { Button } from \'react-native\';\n...\n\n<Button\n  onPress={onPressLearnMore}\n  title="Learn More"\n  color="#841584"\n  accessibilityLabel="Learn more about this purple button"\n/>\n')),Object(b.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(b.b)("div",{className:"snack-player","data-snack-name":"Buttons","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20StyleSheet%2C%20Button%2C%20View%2C%20SafeAreaView%2C%20Text%2C%20Alert%20%7D%20from%20'react-native'%3B%0Aimport%20Constants%20from%20'expo-constants'%3B%0A%0Aconst%20Separator%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20%3CView%20style%3D%7Bstyles.separator%7D%20%2F%3E%3B%0A%7D%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3E%0A%20%20%20%20%20%20%20%20%20%20The%20title%20and%20onPress%20handler%20are%20required.%20It%20is%20recommended%20to%20set%0A%20%20%20%20%20%20%20%20%20%20accessibilityLabel%20to%20help%20make%20your%20app%20usable%20by%20everyone.%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Press%20me%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Alert.alert('Simple%20Button%20pressed')%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Adjust%20the%20color%20in%20a%20way%20that%20looks%20standard%20on%20each%20platform.%20On%0A%20%20%20%20%20%20%20%20%20%20iOS%2C%20the%20color%20prop%20controls%20the%20color%20of%20the%20text.%20On%20Android%2C%20the%0A%20%20%20%20%20%20%20%20%20%20color%20adjusts%20the%20background%20color%20of%20the%20button.%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Press%20me%22%0A%20%20%20%20%20%20%20%20%20%20color%3D%22%23f194ff%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Alert.alert('Button%20with%20adjusted%20color%20pressed')%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3E%0A%20%20%20%20%20%20%20%20%20%20All%20interaction%20for%20the%20component%20are%20disabled.%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Press%20me%22%0A%20%20%20%20%20%20%20%20%20%20disabled%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Alert.alert('Cannot%20press%20this%20one')%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3E%0A%20%20%20%20%20%20%20%20%20%20This%20layout%20strategy%20lets%20the%20title%20define%20the%20width%20of%20the%20button.%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.fixToText%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Left%20button%22%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Alert.alert('Left%20button%20pressed')%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Right%20button%22%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Alert.alert('Right%20button%20pressed')%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FSafeAreaView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20marginTop%3A%20Constants.statusBarHeight%2C%0A%20%20%20%20marginHorizontal%3A%2016%2C%0A%20%20%7D%2C%0A%20%20title%3A%20%7B%0A%20%20%20%20textAlign%3A%20'center'%2C%0A%20%20%20%20marginVertical%3A%208%2C%0A%20%20%7D%2C%0A%20%20fixToText%3A%20%7B%0A%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20justifyContent%3A%20'space-between'%2C%0A%20%20%7D%2C%0A%20%20separator%3A%20%7B%0A%20%20%20%20marginVertical%3A%208%2C%0A%20%20%20%20borderBottomColor%3A%20'%23737373'%2C%0A%20%20%20%20borderBottomWidth%3A%20StyleSheet.hairlineWidth%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(b.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("h3",{id:"requiredonpress"},Object(b.b)("div",{class:"label required basic"},"Required"),Object(b.b)("strong",{parentName:"h3"},Object(b.b)("inlineCode",{parentName:"strong"},"onPress"))),Object(b.b)("p",null,"\u7528\u6237\u70b9\u51fb\u6b64\u6309\u94ae\u65f6\u6240\u8c03\u7528\u7684\u5904\u7406\u51fd\u6570"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"\u51fd\u6570")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"requiredtitle"},Object(b.b)("div",{class:"label required basic"},"Required"),Object(b.b)("strong",{parentName:"h3"},Object(b.b)("inlineCode",{parentName:"strong"},"title"))),Object(b.b)("p",null,"\u6309\u94ae\u5185\u663e\u793a\u7684\u6587\u672c"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"string")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"accessibilitylabel"},Object(b.b)("inlineCode",{parentName:"h3"},"accessibilityLabel")),Object(b.b)("p",null,"\u7528\u4e8e\u7ed9\u6b8b\u969c\u4eba\u58eb\u663e\u793a\u7684\u6587\u672c\uff08\u6bd4\u5982\u8bfb\u5c4f\u5e94\u7528\u53ef\u80fd\u4f1a\u8bfb\u53d6\u8fd9\u4e00\u5185\u5bb9\uff09"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"string")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"color"},Object(b.b)("inlineCode",{parentName:"h3"},"color")),Object(b.b)("p",null,"\u6587\u672c\u7684\u989c\u8272(iOS)\uff0c\u6216\u662f\u6309\u94ae\u7684\u80cc\u666f\u8272(Android)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"colors"},"color"))))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"disabled"},Object(b.b)("inlineCode",{parentName:"h3"},"disabled")),Object(b.b)("p",null,"\u8bbe\u7f6e\u4e3a true \u65f6\u6b64\u6309\u94ae\u5c06\u4e0d\u53ef\u70b9\u51fb\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(b.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"bool"),Object(b.b)("td",{parentName:"tr",align:null},"\u5426")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"testid"},Object(b.b)("inlineCode",{parentName:"h3"},"testID")),Object(b.b)("p",null,"\u7528\u6765\u5728\u7aef\u5230\u7aef\u6d4b\u8bd5\u4e2d\u5b9a\u4f4d\u6b64\u89c6\u56fe\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(b.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"\u5426")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"hastvpreferredfocus"},Object(b.b)("inlineCode",{parentName:"h3"},"hasTVPreferredFocus")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"(Apple TV only)")," TV preferred focus (see documentation for the View component)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(b.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),Object(b.b)("th",{parentName:"tr",align:null},"\u5e73\u53f0"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"bool"),Object(b.b)("td",{parentName:"tr",align:null},"\u5426"),Object(b.b)("td",{parentName:"tr",align:null},"iOS")))),Object(b.b)("h3",{id:"nextfocusdown"},Object(b.b)("inlineCode",{parentName:"h3"},"nextFocusDown")),Object(b.b)("p",null,"Designates the next view to receive focus when the user navigates down. See the ",Object(b.b)("a",{parentName:"p",href:"https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusDown"},"Android documentation"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"\u5e73\u53f0"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Android")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"nextfocusforward"},Object(b.b)("inlineCode",{parentName:"h3"},"nextFocusForward")),Object(b.b)("p",null,"Designates the next view to receive focus when the user navigates forward. See the ",Object(b.b)("a",{parentName:"p",href:"https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusForward"},"Android documentation"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"\u5e73\u53f0"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Android")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"nextfocusleft"},Object(b.b)("inlineCode",{parentName:"h3"},"nextFocusLeft")),Object(b.b)("p",null,"Designates the next view to receive focus when the user navigates left. See the ",Object(b.b)("a",{parentName:"p",href:"https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusLeft"},"Android documentation"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"\u5e73\u53f0"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Android")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"nextfocusright"},Object(b.b)("inlineCode",{parentName:"h3"},"nextFocusRight")),Object(b.b)("p",null,"Designates the next view to receive focus when the user navigates right. See the ",Object(b.b)("a",{parentName:"p",href:"https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusRight"},"Android documentation"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"\u5e73\u53f0"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Android")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"nextfocusup"},Object(b.b)("inlineCode",{parentName:"h3"},"nextFocusUp")),Object(b.b)("p",null,"Designates the next view to receive focus when the user navigates up. See the ",Object(b.b)("a",{parentName:"p",href:"https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusUp"},"Android documentation"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"\u5e73\u53f0"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Android")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"touchsounddisabled"},Object(b.b)("inlineCode",{parentName:"h3"},"touchSoundDisabled")),Object(b.b)("p",null,"If true, doesn't play system sound on touch."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"\u5e73\u53f0"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Android")))))}d.isMDXComponent=!0},584:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),d=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=d(n),s=a,O=u["".concat(l,".").concat(s)]||u[s]||p[s]||b;return n?r.a.createElement(O,c(c({ref:t},i),{},{components:n})):r.a.createElement(O,c({ref:t},i))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,l=new Array(b);l[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<b;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);