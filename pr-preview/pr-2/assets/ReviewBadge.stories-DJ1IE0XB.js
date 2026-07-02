import{j as f}from"./jsx-runtime-DFAAy_2V.js";import{c as b}from"./cn-2dOUpm6k.js";import"./index-Bc2G9s8g.js";const A="_badge_adh6i_1",x="_onAccent_adh6i_12",s={badge:A,onAccent:x};function l({count:a,onAccent:_}){return a?f.jsxs("span",{className:b(s.badge,_&&s.onAccent),children:["要確認 ",a]}):null}l.__docgenInfo={description:"「要確認 N」バッジ。OCR/LLM で確定しきれなかった行数を示す。",methods:[],displayName:"ReviewBadge",props:{count:{required:!0,tsType:{name:"number"},description:""},onAccent:{required:!1,tsType:{name:"boolean"},description:"アクセント面の上に乗せるとき（選択中の話ボタンなど）。"}}};const j={title:"部品/ReviewBadge",component:l,parameters:{layout:"centered"}},e={args:{count:3}},r={args:{count:3,onAccent:!0},parameters:{backgrounds:{default:"accent"}}},n={args:{count:0}};var t,o,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    count: 3
  }
}`,...(c=(o=e.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var d,u,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    count: 3,
    onAccent: true
  },
  parameters: {
    backgrounds: {
      default: "accent"
    }
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,i,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    count: 0
  }
}`,...(g=(i=n.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};const v=["既定","アクセント面","ゼロは非表示"];export{v as __namedExportsOrder,j as default,r as アクセント面,n as ゼロは非表示,e as 既定};
