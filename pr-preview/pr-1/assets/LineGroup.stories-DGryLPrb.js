import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{L as o}from"./LineGroup-BgIWHzPW.js";import"./index-Bc2G9s8g.js";import"./SpeakerLabel-rWAp39z3.js";import"./LineView-DuyPWgMq.js";import"./cn-2dOUpm6k.js";import"./RichText-6CbtKJUh.js";import"./ChoiceLine-B1dgdzcD.js";const A={title:"本文/LineGroup",component:o,parameters:{layout:"padded"}},n={args:{group:{type:"dialogue",speaker:"広",lines:[{index:1,type:"dialogue",speaker:"広",text:"プロデューサー。"}]}}},r={args:{group:{type:"dialogue",speaker:"広",lines:[{index:1,type:"dialogue",speaker:"広",text:"聞いてほしい。"},{index:2,type:"dialogue",speaker:"広",text:"……まずは現状を確認する、ね。"},{index:3,type:"dialogue",speaker:"広",text:"わたし、{一番星|プリマステラ}になる、よ。"}]}}},t={args:{group:{type:"dialogue",speaker:"千奈",lines:[{index:1,type:"dialogue",speaker:"千奈",text:"あら、篠澤さん。"},{index:2,type:"dialogue",speaker:"千奈",text:"先に相談してくださいませぇ〜！",needs_review:!0}]}}},a={args:{group:{type:"dialogue",speaker:void 0,lines:[{index:1,type:"dialogue",text:"――数日後。"},{index:2,type:"dialogue",text:"初星学園、保健室。"}]}}},p={args:{group:{type:"choice",line:{index:1,type:"choice",text:"追い詰められてあげる"}}}},s={args:{group:{type:"dialogue",speaker:"広",lines:[{index:1,type:"dialogue",speaker:"広",text:"プロデューサー。"}]}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{group:{type:"dialogue",speaker:"広",lines:[{index:1,type:"dialogue",speaker:"広",text:"プロデューサー。"},{index:2,type:"dialogue",speaker:"広",text:"聞いてほしい。"},{index:3,type:"dialogue",speaker:"広",text:"……まずは現状を確認する、ね。"}]}}),e.jsx(o,{group:{type:"dialogue",speaker:"プロデューサー",lines:[{index:4,type:"dialogue",speaker:"プロデューサー",text:"なんでしょう。"}]}}),e.jsx(o,{group:{type:"dialogue",speaker:"千奈",lines:[{index:5,type:"dialogue",speaker:"千奈",text:"あら、お取り込み中？"},{index:6,type:"dialogue",speaker:"千奈",text:"先に相談してくださいませぇ〜！",needs_review:!0}]}})]})};var i,d,u;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    group: {
      type: "dialogue",
      speaker: "広",
      lines: [{
        index: 1,
        type: "dialogue",
        speaker: "広",
        text: "プロデューサー。"
      }]
    }
  }
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,l,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    group: {
      type: "dialogue",
      speaker: "広",
      lines: [{
        index: 1,
        type: "dialogue",
        speaker: "広",
        text: "聞いてほしい。"
      }, {
        index: 2,
        type: "dialogue",
        speaker: "広",
        text: "……まずは現状を確認する、ね。"
      }, {
        index: 3,
        type: "dialogue",
        speaker: "広",
        text: "わたし、{一番星|プリマステラ}になる、よ。"
      }]
    }
  }
}`,...(x=(l=r.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};var c,y,k;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    group: {
      type: "dialogue",
      speaker: "千奈",
      lines: [{
        index: 1,
        type: "dialogue",
        speaker: "千奈",
        text: "あら、篠澤さん。"
      }, {
        index: 2,
        type: "dialogue",
        speaker: "千奈",
        text: "先に相談してくださいませぇ〜！",
        needs_review: true
      }]
    }
  }
}`,...(k=(y=t.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var m,_,j;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    group: {
      type: "dialogue",
      speaker: undefined,
      lines: [{
        index: 1,
        type: "dialogue",
        text: "――数日後。"
      }, {
        index: 2,
        type: "dialogue",
        text: "初星学園、保健室。"
      }]
    }
  }
}`,...(j=(_=a.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var L,S,h;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    group: {
      type: "choice",
      line: {
        index: 1,
        type: "choice",
        text: "追い詰められてあげる"
      }
    }
  }
}`,...(h=(S=p.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var v,G,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  // カード同士（話者の切り替え）の間隔を、単体では確認できないので複数並べて見る
  args: {
    group: {
      type: "dialogue",
      speaker: "広",
      lines: [{
        index: 1,
        type: "dialogue",
        speaker: "広",
        text: "プロデューサー。"
      }]
    }
  },
  render: () => <>
      <LineGroup group={{
      type: "dialogue",
      speaker: "広",
      lines: [{
        index: 1,
        type: "dialogue",
        speaker: "広",
        text: "プロデューサー。"
      }, {
        index: 2,
        type: "dialogue",
        speaker: "広",
        text: "聞いてほしい。"
      }, {
        index: 3,
        type: "dialogue",
        speaker: "広",
        text: "……まずは現状を確認する、ね。"
      }]
    }} />
      <LineGroup group={{
      type: "dialogue",
      speaker: "プロデューサー",
      lines: [{
        index: 4,
        type: "dialogue",
        speaker: "プロデューサー",
        text: "なんでしょう。"
      }]
    }} />
      <LineGroup group={{
      type: "dialogue",
      speaker: "千奈",
      lines: [{
        index: 5,
        type: "dialogue",
        speaker: "千奈",
        text: "あら、お取り込み中？"
      }, {
        index: 6,
        type: "dialogue",
        speaker: "千奈",
        text: "先に相談してくださいませぇ〜！",
        needs_review: true
      }]
    }} />
    </>
}`,...(f=(G=s.parameters)==null?void 0:G.docs)==null?void 0:f.source}}};const B=["単発の台詞","同一話者の連続台詞_名前は先頭のみ","要確認を含む","ナレーション_話者なし","選択肢","複数カード_別話者"];export{B as __namedExportsOrder,A as default,a as ナレーション_話者なし,n as 単発の台詞,r as 同一話者の連続台詞_名前は先頭のみ,s as 複数カード_別話者,t as 要確認を含む,p as 選択肢};
