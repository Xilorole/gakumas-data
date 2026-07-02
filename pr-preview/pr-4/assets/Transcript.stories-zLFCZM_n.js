import{j as r}from"./jsx-runtime-DFAAy_2V.js";import{L as C}from"./LineGroup-C_AymTXu.js";import{c as q}from"./LineView-zhPzg0S0.js";import"./index-Bc2G9s8g.js";import"./SpeakerLabel-cQtUa0W9.js";import"./ChoiceLine-BNZ-6AbM.js";import"./RichText-6CbtKJUh.js";import"./cn-2dOUpm6k.js";/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],M=q("chevron-left",O);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],H=q("chevron-right",F);function m(n){const e=n.match(/[0-9]+(?:\.[0-9]+)?/);return e?parseFloat(e[0]):Number.POSITIVE_INFINITY}function A(n,e){let t=n.children.find(s=>s.name===e);return t||(t={name:e,children:[],episodes:[]},n.children.push(t)),t}function K(n){const e={name:"",children:[],episodes:[]};for(const t of n){let s=e;for(const i of t.segments.slice(0,-1))s=A(s,i);s.episodes.push(t)}return G(e),e}function G(n){n.episodes.sort((e,t)=>m(e.segments.at(-1)??"")-m(t.segments.at(-1)??"")),n.children.sort((e,t)=>m(e.name)-m(t.name)),n.children.forEach(G)}function L(n){return[...n.episodes,...n.children.flatMap(L)]}function V(n,e){let t=n;for(const s of e){const i=t.children.find(d=>d.name===s);if(!i)return null;t=i}return t}function Y(n,e){const t=e.segments,s=t.indexOf("親愛度"),i=t.indexOf("Pアイドル");let d=null;if(s!==-1?d=t.slice(0,s+1):i!==-1&&(d=t.slice(0,-1)),!d)return{prev:null,next:null};const c=V(n,d);if(!c)return{prev:null,next:null};const o=L(c),l=o.findIndex(p=>p.path===e.path);return l===-1?{prev:null,next:null}:{prev:l>0?o[l-1]:null,next:l<o.length-1?o[l+1]:null}}function D(n){const e=[];for(const t of n){if(t.type==="choice"){e.push({type:"choice",line:t});continue}const s=e.at(-1);(s==null?void 0:s.type)==="dialogue"&&s.speaker===t.speaker?s.lines.push(t):e.push({type:"dialogue",speaker:t.speaker,lines:[t]})}return e}const J="_transcript_1brj4_1",Q="_placeholder_1brj4_11",U="_mark_1brj4_19",W="_head_1brj4_28",X="_breadcrumb_1brj4_38",Z="_crumbGroup_1brj4_49",ee="_crumb_1brj4_49",te="_sep_1brj4_57",ne="_titleRow_1brj4_62",re="_title_1brj4_62",se="_navBtn_1brj4_80",ae="_meta_1brj4_108",oe="_chip_1brj4_115",ie="_chipReview_1brj4_124",ce="_lines_1brj4_130",le="_muted_1brj4_135",de="_error_1brj4_140",a={transcript:J,placeholder:Q,mark:U,head:W,breadcrumb:X,crumbGroup:Z,crumb:ee,sep:te,titleRow:ne,title:re,navBtn:se,meta:ae,chip:oe,chipReview:ie,lines:ce,muted:le,error:de};function z({entry:n,state:e,root:t,onNavigate:s}){if(!n)return r.jsx("article",{className:a.transcript,tabIndex:-1,children:r.jsxs("div",{className:a.placeholder,children:[r.jsx("p",{className:a.mark,children:"☁"}),r.jsx("p",{children:"左の一覧から、話を選んで、ね。"})]})});const i=n.segments.slice(0,-1),d=n.segments.at(-1)??"",{prev:c,next:o}=Y(t,n);return r.jsxs("article",{className:a.transcript,tabIndex:-1,children:[r.jsxs("header",{className:a.head,children:[r.jsx("nav",{className:a.breadcrumb,"aria-label":"パンくず",children:i.map((l,p)=>r.jsxs("span",{className:a.crumbGroup,children:[r.jsx("span",{className:a.crumb,children:l}),p<i.length-1&&r.jsx("span",{className:a.sep,children:"›"})]},p))}),r.jsxs("div",{className:a.titleRow,children:[r.jsx("button",{type:"button",className:a.navBtn,disabled:!c,"aria-label":c?`前の話: ${c.title??c.segments.at(-1)}`:"前の話はありません",onClick:()=>c&&s(c.path),children:r.jsx(M,{size:20})}),r.jsx("h2",{className:a.title,children:n.title??d}),r.jsx("button",{type:"button",className:a.navBtn,disabled:!o,"aria-label":o?`次の話: ${o.title??o.segments.at(-1)}`:"次の話はありません",onClick:()=>o&&s(o.path),children:r.jsx(H,{size:20})})]}),n.needs_review?r.jsx("div",{className:a.meta,children:r.jsxs("span",{className:`${a.chip} ${a.chipReview}`,children:["要確認 ",n.needs_review]})}):null]}),e.status==="loading"&&r.jsx("p",{className:a.muted,children:"読み込み中…"}),e.status==="error"&&r.jsxs("p",{className:a.error,children:["読み込みに失敗: ",e.error]}),e.status==="ready"&&e.data&&r.jsx("div",{className:a.lines,children:D(e.data.lines).map((l,p)=>r.jsx(C,{group:l},p))})]})}z.__docgenInfo={description:"",methods:[],displayName:"Transcript",props:{entry:{required:!0,tsType:{name:"union",raw:"ManifestEntry | null",elements:[{name:"ManifestEntry"},{name:"null"}]},description:"選択中エントリ（未選択は null）。"},state:{required:!0,tsType:{name:"TranscriptState"},description:"本文の取得状態。"},root:{required:!0,tsType:{name:"TreeNode"},description:"前後の話を探すためのツリー。"},onNavigate:{required:!0,tsType:{name:"signature",type:"function",raw:"(path: string) => void",signature:{arguments:[{type:{name:"string"},name:"path"}],return:{name:"void"}}},description:"前後の話ボタンで別の話へ移動する。"}}};const u={path:"アイドルコミュ/篠澤広/親愛度/STEP4/第37話.json",segments:["アイドルコミュ","篠澤広","親愛度","STEP4","第37話"],session:"hiro_37",line_count:6,needs_review:1},pe=K([{path:"アイドルコミュ/篠澤広/親愛度/STEP4/第36話.json",segments:["アイドルコミュ","篠澤広","親愛度","STEP4","第36話"]},u,{path:"アイドルコミュ/篠澤広/親愛度/STEP4/第38話.json",segments:["アイドルコミュ","篠澤広","親愛度","STEP4","第38話"]}]),ve={title:"本文/Transcript",component:z,parameters:{layout:"fullscreen"},args:{root:pe,onNavigate:()=>{}}},h={args:{entry:null,state:{status:"idle"}}},g={args:{entry:u,state:{status:"loading"}}},x={args:{entry:u,state:{status:"ready",data:{lines:[{index:1,type:"dialogue",text:"――放課後、保健室。"},{index:2,type:"dialogue",speaker:"広",text:"プロデューサー。"},{index:3,type:"dialogue",speaker:"広",text:"わたし、{一番星|プリマステラ}になる、よ。"},{index:4,type:"dialogue",speaker:"広",text:"ううん。《《トップアイドル》》になる。"},{index:5,type:"choice",text:"一緒に行きましょう"},{index:6,type:"dialogue",speaker:"プロデューサー",text:"こちらこそ。ありがとう、広さん。",needs_review:!0}]}}}},_={args:{entry:u,state:{status:"error",error:"本文取得失敗 (HTTP 404)"}}},ue=Array.from({length:24},(n,e)=>{const t=["広","プロデューサー","千奈","佑芽"],s=t[e%t.length];return{index:e+1,type:"dialogue",speaker:s,text:`${s}の台詞、その${e+1}。スクロールしてもヘッダーが上に残るか確認する、ね。`}}),f={parameters:{layout:"fullscreen"},decorators:[n=>r.jsxs("div",{style:{height:"70vh",overflow:"auto"},children:[r.jsx("div",{style:{height:"var(--header-h)",background:"var(--surface-2)",borderBottom:"1px solid var(--border)",display:"grid",placeItems:"center",color:"var(--text-muted)",fontSize:"0.8rem"},children:"（アプリヘッダーの位置・ダミー）"}),r.jsx(n,{})]})],args:{entry:u,state:{status:"ready",data:{lines:ue}}}};var y,b,v;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    entry: null,
    state: {
      status: "idle"
    }
  }
}`,...(v=(b=h.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var j,N,k;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    entry,
    state: {
      status: "loading"
    }
  }
}`,...(k=(N=g.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var T,w,S;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    entry,
    state: {
      status: "ready",
      data: {
        lines: [{
          index: 1,
          type: "dialogue",
          text: "――放課後、保健室。"
        }, {
          index: 2,
          type: "dialogue",
          speaker: "広",
          text: "プロデューサー。"
        }, {
          index: 3,
          type: "dialogue",
          speaker: "広",
          text: "わたし、{一番星|プリマステラ}になる、よ。"
        }, {
          index: 4,
          type: "dialogue",
          speaker: "広",
          text: "ううん。《《トップアイドル》》になる。"
        }, {
          index: 5,
          type: "choice",
          text: "一緒に行きましょう"
        }, {
          index: 6,
          type: "dialogue",
          speaker: "プロデューサー",
          text: "こちらこそ。ありがとう、広さん。",
          needs_review: true
        }]
      }
    }
  }
}`,...(S=(w=x.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var I,E,P;_.parameters={..._.parameters,docs:{...(I=_.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    entry,
    state: {
      status: "error",
      error: "本文取得失敗 (HTTP 404)"
    }
  }
}`,...(P=(E=_.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var R,B,$;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  decorators: [Story => <div style={{
    height: "70vh",
    overflow: "auto"
  }}>
        {/* 本番ではこの上に実際のアプリヘッダー(高さ var(--header-h))が乗る。
            Transcript のヘッダーはその下に sticky するので、ここでは
            見た目の目安として同じ高さのダミーバーを置いている。 */}
        <div style={{
      height: "var(--header-h)",
      background: "var(--surface-2)",
      borderBottom: "1px solid var(--border)",
      display: "grid",
      placeItems: "center",
      color: "var(--text-muted)",
      fontSize: "0.8rem"
    }}>
          （アプリヘッダーの位置・ダミー）
        </div>
        <Story />
      </div>],
  args: {
    entry,
    state: {
      status: "ready",
      data: {
        lines: 長い会話
      }
    }
  }
}`,...($=(B=f.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};const je=["未選択","読み込み中","表示","エラー","長い話_スクロールでヘッダーがsticky"];export{je as __namedExportsOrder,ve as default,_ as エラー,h as 未選択,x as 表示,g as 読み込み中,f as 長い話_スクロールでヘッダーがsticky};
