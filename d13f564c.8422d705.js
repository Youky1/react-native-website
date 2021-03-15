(window.webpackJsonp=window.webpackJsonp||[]).push([[406],{491:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return A})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(8),o=(a(0),a(584)),r=a(588),l=a(589),s=a(590),c={id:"layoutanimation",title:"LayoutAnimation"},A={unversionedId:"layoutanimation",id:"version-0.63/layoutanimation",isDocsHomePage:!1,title:"LayoutAnimation",description:"\u5f53\u5e03\u5c40\u53d8\u5316\u65f6\uff0c\u81ea\u52a8\u5c06\u89c6\u56fe\u8fd0\u52a8\u5230\u5b83\u4eec\u65b0\u7684\u4f4d\u7f6e\u4e0a\u3002",source:"@site/versioned_docs/version-0.63/layoutanimation.md",slug:"/layoutanimation",permalink:"/docs/0.63/layoutanimation",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.63/layoutanimation.md",version:"0.63",lastUpdatedAt:1615789874,sidebar:"version-0.63/api",previous:{title:"Keyboard",permalink:"/docs/0.63/keyboard"},next:{title:"Linking",permalink:"/docs/0.63/linking"}},b=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>configureNext()</code>",id:"configurenext",children:[]},{value:"<code>create()</code>",id:"create",children:[]}]},{value:"Properties",id:"properties",children:[{value:"Types",id:"types",children:[]},{value:"Properties",id:"properties-1",children:[]},{value:"Presets",id:"presets",children:[]},{value:"easeInEaseOut",id:"easeineaseout",children:[]},{value:"linear",id:"linear",children:[]},{value:"spring",id:"spring",children:[]}]}],u={toc:b};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u5f53\u5e03\u5c40\u53d8\u5316\u65f6\uff0c\u81ea\u52a8\u5c06\u89c6\u56fe\u8fd0\u52a8\u5230\u5b83\u4eec\u65b0\u7684\u4f4d\u7f6e\u4e0a\u3002"),Object(o.b)("p",null,"\u4e00\u4e2a\u5e38\u7528\u7684\u8c03\u7528\u6b64 API \u7684\u529e\u6cd5\u662f\u5728\u72b6\u6001\u66f4\u65b0\u524d\u8c03\u7528\u3002"),Object(o.b)("p",null,"\u6ce8\u610f\u5982\u679c\u8981\u5728",Object(o.b)("strong",{parentName:"p"},"Android"),"\u4e0a\u4f7f\u7528\u6b64\u52a8\u753b\uff0c\u5219\u9700\u8981\u5728\u4ee3\u7801\u4e2d\u542f\u7528\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"import { UIManager } from 'react-native';\n\nif (Platform.OS === 'android') {\n  if (UIManager.setLayoutAnimationEnabledExperimental) {\n    UIManager.setLayoutAnimationEnabledExperimental(true);\n  }\n}\n")),Object(o.b)("p",null,"\u4e0a\u9762\u8fd9\u6bb5\u4ee3\u7801\u5e94\u8be5\u5199\u5728\u4efb\u4f55\u7ec4\u4ef6\u52a0\u8f7d\u4e4b\u524d\uff0c\u6bd4\u5982\u53ef\u4ee5\u5199\u5230 index.js \u7684\u5f00\u5934\u3002"),Object(o.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(o.b)("div",{className:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20LayoutAnimation%2C%20Platform%2C%20StyleSheet%2C%20Text%2C%20TouchableOpacity%2C%20UIManager%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aif%20(%0A%20%20Platform.OS%20%3D%3D%3D%20%22android%22%20%26%26%0A%20%20UIManager.setLayoutAnimationEnabledExperimental%0A)%20%7B%0A%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%0A%7D%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bexpanded%2C%20setExpanded%5D%20%3D%20useState(false)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyle.container%7D%3E%0A%20%20%20%20%20%20%3CTouchableOpacity%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)%3B%0A%20%20%20%20%20%20%20%20%20%20setExpanded(!expanded)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%3EPress%20me%20to%20%7Bexpanded%20%3F%20%22collapse%22%20%3A%20%22expand%22%7D!%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%7Bexpanded%20%26%26%20(%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyle.tile%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%3EI%20disappear%20sometimes!%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20)%7D%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20style%20%3D%20StyleSheet.create(%7B%0A%20%20tile%3A%20%7B%0A%20%20%20%20background%3A%20%22lightGrey%22%2C%0A%20%20%20%20borderWidth%3A%200.5%2C%0A%20%20%20%20borderColor%3A%20%22%23d6d7da%22%0A%20%20%7D%2C%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20overflow%3A%20%22hidden%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(o.b)("hr",null),Object(o.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(o.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(o.b)("h3",{id:"configurenext"},Object(o.b)("inlineCode",{parentName:"h3"},"configureNext()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"static configureNext(config, onAnimationDidEnd?, onAnimationDidFail?)\n")),Object(o.b)("p",null,"\u8ba1\u5212\u4e0b\u4e00\u6b21\u5e03\u5c40\u8981\u53d1\u751f\u7684\u52a8\u753b\u3002"),Object(o.b)("h4",{id:"\u53c2\u6570\uff1a"},"\u53c2\u6570\uff1a"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"\u540d\u79f0"),Object(o.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(o.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),Object(o.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"config"),Object(o.b)("td",{parentName:"tr",align:null},"object"),Object(o.b)("td",{parentName:"tr",align:null},"\u662f"),Object(o.b)("td",{parentName:"tr",align:null},"\u770b\u4e0b\u9762\u7684\u8bf4\u660e")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"onAnimationDidEnd"),Object(o.b)("td",{parentName:"tr",align:null},"function"),Object(o.b)("td",{parentName:"tr",align:null},"\u5426"),Object(o.b)("td",{parentName:"tr",align:null},"\u52a8\u753b\u7ed3\u675f\u540e\u7684\u56de\u8c03")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"onAnimationDidFail"),Object(o.b)("td",{parentName:"tr",align:null},"function"),Object(o.b)("td",{parentName:"tr",align:null},"\u5426"),Object(o.b)("td",{parentName:"tr",align:null},"\u52a8\u753b\u5931\u8d25\u540e\u7684\u56de\u8c03")))),Object(o.b)("h5",{id:"config"},"config"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"duration")," \u52a8\u753b\u6301\u7eed\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u6beb\u79d2\u3002"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"create"),"\uff0c\u914d\u7f6e\u521b\u5efa\u65b0\u89c6\u56fe\u65f6\u7684\u52a8\u753b\u3002\uff08\u53c2\u9605",Object(o.b)("inlineCode",{parentName:"li"},"Anim"),"\u7c7b\u578b\uff09"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"update"),"\uff0c\u914d\u7f6e\u88ab\u66f4\u65b0\u7684\u89c6\u56fe\u7684\u52a8\u753b\u3002\uff08\u53c2\u9605",Object(o.b)("inlineCode",{parentName:"li"},"Anim"),"\u7c7b\u578b\uff09")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"create"},Object(o.b)("inlineCode",{parentName:"h3"},"create()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"static create(duration, type, creationProp)\n")),Object(o.b)("p",null,"\u7528\u6765\u521b\u5efa",Object(o.b)("inlineCode",{parentName:"p"},"configureNext"),"\u6240\u9700\u7684 config \u53c2\u6570\u7684\u8f85\u52a9\u51fd\u6570\u3002"),Object(o.b)("p",null,"\u793a\u4f8b\uff1a"),Object(o.b)(r.a,{groupId:"syntax",defaultValue:s.a.defaultSyntax,values:s.a.syntax,mdxType:"Tabs"},Object(o.b)(l.a,{value:"functional",mdxType:"TabItem"},Object(o.b)("div",{className:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20View%2C%0A%20%20Platform%2C%0A%20%20UIManager%2C%0A%20%20LayoutAnimation%2C%0A%20%20StyleSheet%2C%0A%20%20Button%0A%7D%20from%20%22react-native%22%3B%0A%0Aif%20(%0A%20%20Platform.OS%20%3D%3D%3D%20%22android%22%20%26%26%0A%20%20UIManager.setLayoutAnimationEnabledExperimental%0A)%20%7B%0A%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%0A%7D%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BboxPosition%2C%20setBoxPosition%5D%20%3D%20useState(%22left%22)%3B%0A%0A%20%20const%20toggleBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(%0A%20%20%20%20%20%20LayoutAnimation.create(%0A%20%20%20%20%20%20%20%20500%2C%0A%20%20%20%20%20%20%20%20LayoutAnimation.Types.spring%2C%0A%20%20%20%20%20%20%20%20LayoutAnimation.Properties.scaleXY%0A%20%20%20%20%20%20)%0A%20%20%20%20)%3B%0A%20%20%20%20setBoxPosition(boxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Toggle%20Layout%22%20onPress%3D%7BtoggleBox%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20boxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%5D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22flex-start%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20borderRadius%3A%205%2C%0A%20%20%20%20margin%3A%208%2C%0A%20%20%20%20backgroundColor%3A%20%22blue%22%0A%20%20%7D%2C%0A%20%20moveRight%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22flex-end%22%2C%0A%20%20%20%20height%3A%20200%2C%0A%20%20%20%20width%3A%20200%0A%20%20%7D%2C%0A%20%20buttonContainer%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),Object(o.b)(l.a,{value:"classical",mdxType:"TabItem"},Object(o.b)("div",{className:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20View%2C%0A%20%20Platform%2C%0A%20%20UIManager%2C%0A%20%20LayoutAnimation%2C%0A%20%20StyleSheet%2C%0A%20%20Button%0A%7D%20from%20%22react-native%22%3B%0A%0Aif%20(%0A%20%20Platform.OS%20%3D%3D%3D%20%22android%22%20%26%26%0A%20%20UIManager.setLayoutAnimationEnabledExperimental%0A)%20%7B%0A%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%0A%7D%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20boxPosition%3A%20%22left%22%0A%20%20%7D%3B%0A%0A%20%20toggleBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(%0A%20%20%20%20%20%20LayoutAnimation.create(%0A%20%20%20%20%20%20%20%20500%2C%0A%20%20%20%20%20%20%20%20LayoutAnimation.Types.spring%2C%0A%20%20%20%20%20%20%20%20LayoutAnimation.Properties.scaleXY%0A%20%20%20%20%20%20)%0A%20%20%20%20)%3B%0A%20%20%20%20this.setState(%7B%0A%20%20%20%20%20%20boxPosition%3A%20this.state.boxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22%0A%20%20%20%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Toggle%20Layout%22%20onPress%3D%7Bthis.toggleBox%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20this.state.boxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%0A%20%20%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22flex-start%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20borderRadius%3A%205%2C%0A%20%20%20%20margin%3A%208%2C%0A%20%20%20%20backgroundColor%3A%20%22blue%22%0A%20%20%7D%2C%0A%20%20moveRight%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22flex-end%22%2C%0A%20%20%20%20height%3A%20200%2C%0A%20%20%20%20width%3A%20200%0A%20%20%7D%2C%0A%20%20buttonContainer%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"types"},"Types"),Object(o.b)("p",null,"An enumeration of animation types to be used in the ",Object(o.b)("a",{parentName:"p",href:"/docs/0.63/layoutanimation#create"},Object(o.b)("inlineCode",{parentName:"a"},"create"))," method, or in the ",Object(o.b)("inlineCode",{parentName:"p"},"create"),"/",Object(o.b)("inlineCode",{parentName:"p"},"update"),"/",Object(o.b)("inlineCode",{parentName:"p"},"delete")," configs for ",Object(o.b)("a",{parentName:"p",href:"/docs/0.63/layoutanimation#configurenext"},Object(o.b)("inlineCode",{parentName:"a"},"configureNext")),". (example usage: ",Object(o.b)("inlineCode",{parentName:"p"},"LayoutAnimation.Types.easeIn"),")"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Types"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"spring")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"linear")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"easeInEaseOut")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"easeIn")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"easeOut")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"keyboard")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"properties-1"},"Properties"),Object(o.b)("p",null,"An enumeration of layout properties to be animated to be used in the ",Object(o.b)("a",{parentName:"p",href:"/docs/0.63/layoutanimation#create"},Object(o.b)("inlineCode",{parentName:"a"},"create"))," method, or in the ",Object(o.b)("inlineCode",{parentName:"p"},"create"),"/",Object(o.b)("inlineCode",{parentName:"p"},"update"),"/",Object(o.b)("inlineCode",{parentName:"p"},"delete")," configs for ",Object(o.b)("a",{parentName:"p",href:"/docs/0.63/layoutanimation#configurenext"},Object(o.b)("inlineCode",{parentName:"a"},"configureNext")),". (example usage: ",Object(o.b)("inlineCode",{parentName:"p"},"LayoutAnimation.Properties.opacity"),")"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Properties"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"opacity")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"scaleX")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"scaleY")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"scaleXY")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"presets"},"Presets"),Object(o.b)("p",null,"A set of predefined animation config."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Presets"),Object(o.b)("th",{parentName:"tr",align:null},"Value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"easeInEaseOut"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"create(300, 'easeInEaseOut', 'opacity')"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"linear"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"create(500, 'linear', 'opacity')"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"spring"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"{ duration: 700, create: { type: 'linear', property: 'opacity' }, update: { type: 'spring', springDamping: 0.4 }, delete: { type: 'linear', property: 'opacity' } }"))))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"easeineaseout"},"easeInEaseOut"),Object(o.b)("p",null,"Shortcut to bind ",Object(o.b)("inlineCode",{parentName:"p"},"configureNext()")," methods with ",Object(o.b)("inlineCode",{parentName:"p"},"Presets.easeInEaseOut"),"."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"linear"},"linear"),Object(o.b)("p",null,"Shortcut to bind ",Object(o.b)("inlineCode",{parentName:"p"},"configureNext()")," methods with ",Object(o.b)("inlineCode",{parentName:"p"},"Presets.linear"),"."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"spring"},"spring"),Object(o.b)("p",null,"Shortcut to bind ",Object(o.b)("inlineCode",{parentName:"p"},"configureNext()")," methods with ",Object(o.b)("inlineCode",{parentName:"p"},"Presets.spring"),"."),Object(o.b)("p",null,"Example usage:"),Object(o.b)(r.a,{groupId:"syntax",defaultValue:s.a.defaultSyntax,values:s.a.syntax,mdxType:"Tabs"},Object(o.b)(l.a,{value:"functional",mdxType:"TabItem"},Object(o.b)("div",{className:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20View%2C%0A%20%20Platform%2C%0A%20%20UIManager%2C%0A%20%20LayoutAnimation%2C%0A%20%20StyleSheet%2C%0A%20%20Button%0A%7D%20from%20%22react-native%22%3B%0A%0Aif%20(%0A%20%20Platform.OS%20%3D%3D%3D%20%22android%22%20%26%26%0A%20%20UIManager.setLayoutAnimationEnabledExperimental%0A)%20%7B%0A%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%0A%7D%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BfirstBoxPosition%2C%20setFirstBoxPosition%5D%20%3D%20useState(%22left%22)%3B%0A%20%20const%20%5BsecondBoxPosition%2C%20setSecondBoxPosition%5D%20%3D%20useState(%22left%22)%3B%0A%20%20const%20%5BthirdBoxPosition%2C%20setThirdBoxPosition%5D%20%3D%20useState(%22left%22)%3B%0A%0A%20%20const%20toggleFirstBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)%3B%0A%20%20%20%20setFirstBoxPosition(firstBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22)%3B%0A%20%20%7D%3B%0A%0A%20%20const%20toggleSecondBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)%3B%0A%20%20%20%20setSecondBoxPosition(secondBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22)%3B%0A%20%20%7D%3B%0A%0A%20%20const%20toggleThirdBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)%3B%0A%20%20%20%20setThirdBoxPosition(thirdBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22EaseInEaseOut%22%20onPress%3D%7BtoggleFirstBox%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20styles.box%2C%0A%20%20%20%20%20%20%20%20%20%20firstBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%0A%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Linear%22%20onPress%3D%7BtoggleSecondBox%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20styles.box%2C%0A%20%20%20%20%20%20%20%20%20%20secondBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%0A%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Spring%22%20onPress%3D%7BtoggleThirdBox%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20styles.box%2C%0A%20%20%20%20%20%20%20%20%20%20thirdBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%0A%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22flex-start%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20borderRadius%3A%205%2C%0A%20%20%20%20margin%3A%208%2C%0A%20%20%20%20backgroundColor%3A%20%22blue%22%0A%20%20%7D%2C%0A%20%20moveRight%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22flex-end%22%0A%20%20%7D%2C%0A%20%20buttonContainer%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),Object(o.b)(l.a,{value:"classical",mdxType:"TabItem"},Object(o.b)("div",{className:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20View%2C%0A%20%20Platform%2C%0A%20%20UIManager%2C%0A%20%20LayoutAnimation%2C%0A%20%20StyleSheet%2C%0A%20%20Button%0A%7D%20from%20%22react-native%22%3B%0A%0Aif%20(%0A%20%20Platform.OS%20%3D%3D%3D%20%22android%22%20%26%26%0A%20%20UIManager.setLayoutAnimationEnabledExperimental%0A)%20%7B%0A%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%0A%7D%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20firstBoxPosition%3A%20%22left%22%2C%0A%20%20%20%20secondBoxPosition%3A%20%22left%22%2C%0A%20%20%20%20thirdBoxPosition%3A%20%22left%22%0A%20%20%7D%3B%0A%0A%20%20toggleFirstBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)%3B%0A%20%20%20%20this.setState(%7B%0A%20%20%20%20%20%20firstBoxPosition%3A%0A%20%20%20%20%20%20%20%20this.state.firstBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22%0A%20%20%20%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20toggleSecondBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)%3B%0A%20%20%20%20this.setState(%7B%0A%20%20%20%20%20%20secondBoxPosition%3A%0A%20%20%20%20%20%20%20%20this.state.secondBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22%0A%20%20%20%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20toggleThirdBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)%3B%0A%20%20%20%20this.setState(%7B%0A%20%20%20%20%20%20thirdBoxPosition%3A%0A%20%20%20%20%20%20%20%20this.state.thirdBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22%0A%20%20%20%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%22EaseInEaseOut%22%20onPress%3D%7Bthis.toggleFirstBox%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20this.state.firstBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%0A%20%20%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Linear%22%20onPress%3D%7Bthis.toggleSecondBox%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20this.state.secondBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%0A%20%20%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Spring%22%20onPress%3D%7Bthis.toggleThirdBox%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20this.state.thirdBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%0A%20%20%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22flex-start%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20borderRadius%3A%205%2C%0A%20%20%20%20margin%3A%208%2C%0A%20%20%20%20backgroundColor%3A%20%22blue%22%0A%20%20%7D%2C%0A%20%20moveRight%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22flex-end%22%0A%20%20%7D%2C%0A%20%20buttonContainer%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),Object(o.b)("hr",null),Object(o.b)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm9523-sunnylqm477"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",Object(o.b)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(95.23%), ",Object(o.b)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(4.77%)"))}d.isMDXComponent=!0},584:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return p}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),A=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=A(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=A(a),d=n,p=b["".concat(r,".").concat(d)]||b[d]||u[d]||o;return a?i.a.createElement(p,l(l({ref:t},c),{},{components:a})):i.a.createElement(p,l({ref:t},c))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},585:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},586:function(e,t,a){"use strict";var n=a(0),i=a(587);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},587:function(e,t,a){"use strict";var n=a(0),i=Object(n.createContext)(void 0);t.a=i},588:function(e,t,a){"use strict";var n=a(0),i=a.n(n),o=a(586),r=a(585),l=a(67),s=a.n(l),c=37,A=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,b=e.values,u=e.groupId,d=e.className,p=Object(o.a)(),m=p.tabGroupChoices,f=p.setTabGroupChoices,y=Object(n.useState)(l),D=y[0],g=y[1],B=n.Children.toArray(e.children);if(null!=u){var O=m[u];null!=O&&O!==D&&b.some((function(e){return e.value===O}))&&g(O)}var C=function(e){g(e),null!=u&&f(u,e)},h=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":a},d)},b.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":D===t,className:Object(r.a)("tabs__item",s.a.tabItem,{"tabs__item--active":D===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case A:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(h,e.target,e)},onFocus:function(){return C(t)},onClick:function(){C(t)}},a)}))),t?Object(n.cloneElement)(B.filter((function(e){return e.props.value===D}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},B.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}},589:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},590:function(e,t,a){"use strict";var n=a(7),i=!!n.a.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!n.a.canUseDOM&&navigator.platform.startsWith("Win"),r=i?"ios":"android",l=i?"macos":o?"windows":"linux";t.a={defaultGuide:"native",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:r,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}}}]);