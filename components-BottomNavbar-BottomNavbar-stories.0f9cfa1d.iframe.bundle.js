"use strict";(self.webpackChunk_cometloop_ui_kit=self.webpackChunk_cometloop_ui_kit||[]).push([[476],{"./src/components/BottomNavbar/BottomNavbar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BottomNavbar_stories});var useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Fab=__webpack_require__("./node_modules/@mui/material/Fab/Fab.js"),jsx_runtime=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const BottomNavbar=props=>{const{items,onSelect,selected=0,iconSize=18,show=!0}=props,{palette}=(0,useTheme.Z)();if(show)return(0,jsx_runtime.jsx)(Box.Z,{sx:{display:"flex",bottom:0,left:0,width:1,justifyContent:"space-evenly",alignItems:"center",py:2,border:1,borderColor:"transparent",borderTopColor:"bottomNavBar.borderColor",boxShadow:7},children:items.map(((item,i)=>{const iconColor=i===selected?palette.bottomNavBar.activeIconColor:palette.bottomNavBar.iconColor;if("children"in item.icon){const fabProps=item.icon;return(0,jsx_runtime.jsx)(Box.Z,{sx:{display:"flex",flex:1,justifyContent:"center",alignItems:"center"},children:(0,jsx_runtime.jsx)(Fab.Z,{size:"small",color:"primary",...fabProps,onClick:()=>onSelect(item.id,i),children:fabProps.children})},i)}{const Icon=item.icon;return(0,jsx_runtime.jsx)(Box.Z,{onClick:()=>onSelect(item.id,i),sx:{display:"flex",cursor:"pointer",flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"},children:(0,jsx_runtime.jsx)(Icon,{size:iconSize,color:iconColor})},i)}}))})};BottomNavbar.displayName="BottomNavbar";try{BottomNavbar.displayName="BottomNavbar",BottomNavbar.__docgenInfo={description:"",displayName:"BottomNavbar",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BottomNavbarItem[]"}},show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean"}},iconSize:{defaultValue:null,description:"",name:"iconSize",required:!1,type:{name:"number"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"number"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(id: string, index: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BottomNavbar/index.tsx#BottomNavbar"]={docgenInfo:BottomNavbar.__docgenInfo,name:"BottomNavbar",path:"src/components/BottomNavbar/index.tsx#BottomNavbar"})}catch(__react_docgen_typescript_loader_error){}var index_esm=__webpack_require__("./node_modules/react-icons/ri/index.esm.js"),fa_index_esm=__webpack_require__("./node_modules/react-icons/fa/index.esm.js"),bs_index_esm=__webpack_require__("./node_modules/react-icons/bs/index.esm.js"),io5_index_esm=__webpack_require__("./node_modules/react-icons/io5/index.esm.js"),Add=__webpack_require__("./node_modules/@mui/icons-material/Add.js");const BottomNavbar_stories={title:"Components/BottomNavbar",component:BottomNavbar,tags:["autodocs"]},Default={parameters:{layout:"fullscreen"},args:{items:[{id:"dashboard",icon:index_esm.gyC,label:"Dashboard"},{id:"students",icon:fa_index_esm.OXn,label:"Students"},{id:"add",icon:{children:(0,jsx_runtime.jsx)(Add.Z,{})}},{id:"calendar",icon:bs_index_esm.N4h,label:"Calendar"},{id:"settings",icon:io5_index_esm.zfW,label:"Settings"}],onSelect(id,index){console.log(id,index)}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    layout: 'fullscreen'\n  },\n  args: {\n    items,\n    onSelect(id, index) {\n      console.log(id, index);\n    }\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);