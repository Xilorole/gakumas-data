import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{L as i}from"./LineGroup-Bie_Y5uU.js";import"./index-Bc2G9s8g.js";import"./SpeakerLabel-cQtUa0W9.js";import"./LineView-B6B8sVhm.js";import"./cn-2dOUpm6k.js";import"./RichText-6CbtKJUh.js";import"./ChoiceLine-BNZ-6AbM.js";const H={title:"本文/LineGroup",component:i,parameters:{layout:"padded"}},n={args:{group:{type:"dialogue",speaker:"広",lines:[{index:1,type:"dialogue",speaker:"広",text:"プロデューサー。"}]}}},r={args:{group:{type:"dialogue",speaker:"広",lines:[{index:1,type:"dialogue",speaker:"広",text:"聞いてほしい。"},{index:2,type:"dialogue",speaker:"広",text:"……まずは現状を確認する、ね。"},{index:3,type:"dialogue",speaker:"広",text:"わたし、{一番星|プリマステラ}になる、よ。"}]}}},t={args:{group:{type:"dialogue",speaker:"千奈",lines:[{index:1,type:"dialogue",speaker:"千奈",text:"あら、篠澤さん。"},{index:2,type:"dialogue",speaker:"千奈",text:"先に相談してくださいませぇ〜！",needs_review:!0}]}}},a={args:{group:{type:"dialogue",speaker:void 0,lines:[{index:1,type:"dialogue",text:"――数日後。"},{index:2,type:"dialogue",text:"初星学園、保健室。"}]}}},p={args:{group:{type:"choice",line:{index:1,type:"choice",text:"追い詰められてあげる"}}}},s={args:{group:{type:"dialogue",speaker:"ろんしろ",lines:[{index:1,type:"dialogue",speaker:"ろんしろ",text:`バラエティ番組に出演した広さんが、
打ち合わせを無視して、
激辛を注文した瞬間ですね。`},{index:2,type:"dialogue",speaker:"ろんしろ",text:`補習組のおふたりから
『はじめての友達』の称号を、
はく奪しなければいけませんね。`},{index:3,type:"dialogue",speaker:"ろんしろ",text:`きっと会場の全員が、
あなたに共感していた。
皆が篠澤広と共鳴していた。`}]}}},o={args:{group:{type:"dialogue",speaker:"広",lines:[{index:1,type:"dialogue",speaker:"広",text:"プロデューサー。"}]}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{group:{type:"dialogue",speaker:"広",lines:[{index:1,type:"dialogue",speaker:"広",text:"プロデューサー。"},{index:2,type:"dialogue",speaker:"広",text:"聞いてほしい。"},{index:3,type:"dialogue",speaker:"広",text:"……まずは現状を確認する、ね。"}]}}),e.jsx(i,{group:{type:"dialogue",speaker:"プロデューサー",lines:[{index:4,type:"dialogue",speaker:"プロデューサー",text:"なんでしょう。"}]}}),e.jsx(i,{group:{type:"dialogue",speaker:"千奈",lines:[{index:5,type:"dialogue",speaker:"千奈",text:"あら、お取り込み中？"},{index:6,type:"dialogue",speaker:"千奈",text:"先に相談してくださいませぇ〜！",needs_review:!0}]}})]})};var d,u,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var l,x,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(x=r.parameters)==null?void 0:x.docs)==null?void 0:c.source}}};var y,k,m;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(m=(k=t.parameters)==null?void 0:k.docs)==null?void 0:m.source}}};var _,L,S;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(S=(L=a.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var j,h,v;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(v=(h=p.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var G,f,w;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  // 各発話（Line）自体が複数行(\\n入り)で、かつ同一話者がそれを3回連続で行うケース。
  // 吹き出し内の折り返しと、吹き出し同士の詰め方が同時に確認できる。
  args: {
    group: {
      type: "dialogue",
      speaker: "ろんしろ",
      lines: [{
        index: 1,
        type: "dialogue",
        speaker: "ろんしろ",
        text: "バラエティ番組に出演した広さんが、\\n打ち合わせを無視して、\\n激辛を注文した瞬間ですね。"
      }, {
        index: 2,
        type: "dialogue",
        speaker: "ろんしろ",
        text: "補習組のおふたりから\\n『はじめての友達』の称号を、\\nはく奪しなければいけませんね。"
      }, {
        index: 3,
        type: "dialogue",
        speaker: "ろんしろ",
        text: "きっと会場の全員が、\\nあなたに共感していた。\\n皆が篠澤広と共鳴していた。"
      }]
    }
  }
}`,...(w=(f=s.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var E,F,O;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(O=(F=o.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};const I=["単発の台詞","同一話者の連続台詞_名前は先頭のみ","要確認を含む","ナレーション_話者なし","選択肢","複数行の発話が3回連続","複数カード_別話者"];export{I as __namedExportsOrder,H as default,a as ナレーション_話者なし,n as 単発の台詞,r as 同一話者の連続台詞_名前は先頭のみ,o as 複数カード_別話者,s as 複数行の発話が3回連続,t as 要確認を含む,p as 選択肢};
