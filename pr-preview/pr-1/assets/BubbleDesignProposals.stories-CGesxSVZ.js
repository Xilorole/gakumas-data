import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{s as k}from"./speaker-CnSvHUcw.js";import{R as y}from"./RichText-6CbtKJUh.js";import"./index-Bc2G9s8g.js";const t=[{speaker:"広",text:"聞いてほしい。"},{speaker:"広",text:"……まずは現状を確認する、ね。"},{speaker:"広",text:"わたし、{一番星|プリマステラ}になる、よ。"},{speaker:"プロデューサー",text:"だから……どうしてそうなるんですか。"},{speaker:"千奈",text:"先に相談してくださいませぇ〜！"}];function d({line:r,style:n}){return e.jsx("div",{style:{...n,padding:"8px 14px",marginTop:8},children:e.jsx(y,{text:r.text})})}const _={title:"本文/意匠案_発話バブル",render:()=>e.jsx(e.Fragment,{})},s={render:()=>e.jsx("div",{style:{maxWidth:480},children:t.map((r,n)=>e.jsx(d,{line:r,style:{background:"var(--surface-2)",borderRadius:14,border:"none"}},n))})},a={render:()=>e.jsx("div",{style:{maxWidth:480},children:t.map((r,n)=>{const i=k(r.speaker);return e.jsx(d,{line:r,style:{background:i==null?"var(--surface-2)":`hsl(${i} 55% 95%)`,borderRadius:14,border:"none"}},n)})})},o={render:()=>e.jsx("div",{style:{maxWidth:480},children:t.map((r,n)=>e.jsx(d,{line:r,style:{background:"var(--surface)",borderRadius:14,border:"none",boxShadow:"var(--shadow-soft)"}},n))})};var c,u,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 480
  }}>
      {conversation.map((line, i) => <Bubble key={i} line={line} style={{
      background: "var(--surface-2)",
      borderRadius: 14,
      border: "none"
    }} />)}
    </div>
}`,...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var p,m,x;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 480
  }}>
      {conversation.map((line, i) => {
      const hue = speakerHue(line.speaker);
      return <Bubble key={i} line={line} style={{
        background: hue == null ? "var(--surface-2)" : \`hsl(\${hue} 55% 95%)\`,
        borderRadius: 14,
        border: "none"
      }} />;
    })}
    </div>
}`,...(x=(m=a.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var b,v,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 480
  }}>
      {conversation.map((line, i) => <Bubble key={i} line={line} style={{
      background: "var(--surface)",
      borderRadius: 14,
      border: "none",
      boxShadow: "var(--shadow-soft)"
    }} />)}
    </div>
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const B=["A_淡いグレー","B_話者色の淡いティント","C_白背景ソフトシャドウ"];export{s as A_淡いグレー,a as B_話者色の淡いティント,o as C_白背景ソフトシャドウ,B as __namedExportsOrder,_ as default};
