import{j as n}from"./jsx-runtime-DFAAy_2V.js";import{L as C}from"./LineGroup-B1Kf-yqq.js";import{c as q}from"./LineView-DxiFT3Sx.js";import"./index-Bc2G9s8g.js";import"./SpeakerLabel-A6CxKwk4.js";import"./cn-2dOUpm6k.js";import"./ChoiceLine-BNZ-6AbM.js";import"./RichText-6CbtKJUh.js";/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],F=q("chevron-left",O);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],H=q("chevron-right",M);function m(t){const e=t.match(/[0-9]+(?:\.[0-9]+)?/);return e?parseFloat(e[0]):Number.POSITIVE_INFINITY}function A(t,e){let r=t.children.find(s=>s.name===e);return r||(r={name:e,children:[],episodes:[]},t.children.push(r)),r}function K(t){const e={name:"",children:[],episodes:[]};for(const r of t){let s=e;for(const i of r.segments.slice(0,-1))s=A(s,i);s.episodes.push(r)}return G(e),e}function G(t){t.episodes.sort((e,r)=>m(e.segments.at(-1)??"")-m(r.segments.at(-1)??"")),t.children.sort((e,r)=>m(e.name)-m(r.name)),t.children.forEach(G)}function L(t){return[...t.episodes,...t.children.flatMap(L)]}function V(t,e){let r=t;for(const s of e){const i=r.children.find(d=>d.name===s);if(!i)return null;r=i}return r}function Y(t,e){const r=e.segments,s=r.indexOf("親愛度"),i=r.indexOf("Pアイドル");let d=null;if(s!==-1?d=r.slice(0,s+1):i!==-1&&(d=r.slice(0,-1)),!d)return{prev:null,next:null};const c=V(t,d);if(!c)return{prev:null,next:null};const o=L(c),l=o.findIndex(p=>p.path===e.path);return l===-1?{prev:null,next:null}:{prev:l>0?o[l-1]:null,next:l<o.length-1?o[l+1]:null}}function D(t){const e=[];for(const r of t){if(r.type==="choice"){e.push({type:"choice",line:r});continue}const s=e.at(-1);(s==null?void 0:s.type)==="dialogue"&&s.speaker===r.speaker?s.lines.push(r):e.push({type:"dialogue",speaker:r.speaker,lines:[r]})}return e}const J="_transcript_1brj4_1",Q="_placeholder_1brj4_11",U="_mark_1brj4_19",W="_head_1brj4_28",X="_breadcrumb_1brj4_38",Z="_crumbGroup_1brj4_49",ee="_crumb_1brj4_49",te="_sep_1brj4_57",re="_titleRow_1brj4_62",ne="_title_1brj4_62",se="_navBtn_1brj4_80",ae="_meta_1brj4_108",oe="_chip_1brj4_115",ie="_chipReview_1brj4_124",ce="_lines_1brj4_130",le="_muted_1brj4_135",de="_error_1brj4_140",a={transcript:J,placeholder:Q,mark:U,head:W,breadcrumb:X,crumbGroup:Z,crumb:ee,sep:te,titleRow:re,title:ne,navBtn:se,meta:ae,chip:oe,chipReview:ie,lines:ce,muted:le,error:de};function z({entry:t,state:e,root:r,onNavigate:s}){if(!t)return n.jsx("article",{className:a.transcript,tabIndex:-1,children:n.jsxs("div",{className:a.placeholder,children:[n.jsx("p",{className:a.mark,children:"☁"}),n.jsx("p",{children:"左の一覧から、話を選んで、ね。"})]})});const i=t.segments.slice(0,-1),d=t.segments.at(-1)??"",{prev:c,next:o}=Y(r,t);return n.jsxs("article",{className:a.transcript,tabIndex:-1,children:[n.jsxs("header",{className:a.head,children:[n.jsx("nav",{className:a.breadcrumb,"aria-label":"パンくず",children:i.map((l,p)=>n.jsxs("span",{className:a.crumbGroup,children:[n.jsx("span",{className:a.crumb,children:l}),p<i.length-1&&n.jsx("span",{className:a.sep,children:"›"})]},p))}),n.jsxs("div",{className:a.titleRow,children:[n.jsx("button",{type:"button",className:a.navBtn,disabled:!c,"aria-label":c?`前の話: ${c.title??c.segments.at(-1)}`:"前の話はありません",onClick:()=>c&&s(c.path),children:n.jsx(F,{size:20})}),n.jsx("h2",{className:a.title,children:t.title??d}),n.jsx("button",{type:"button",className:a.navBtn,disabled:!o,"aria-label":o?`次の話: ${o.title??o.segments.at(-1)}`:"次の話はありません",onClick:()=>o&&s(o.path),children:n.jsx(H,{size:20})})]}),t.needs_review?n.jsx("div",{className:a.meta,children:n.jsxs("span",{className:`${a.chip} ${a.chipReview}`,children:["要確認 ",t.needs_review]})}):null]}),e.status==="loading"&&n.jsx("p",{className:a.muted,children:"読み込み中…"}),e.status==="error"&&n.jsxs("p",{className:a.error,children:["読み込みに失敗: ",e.error]}),e.status==="ready"&&e.data&&n.jsx("div",{className:a.lines,children:D(e.data.lines).map((l,p)=>n.jsx(C,{group:l},p))})]})}z.__docgenInfo={description:"",methods:[],displayName:"Transcript",props:{entry:{required:!0,tsType:{name:"union",raw:"ManifestEntry | null",elements:[{name:"ManifestEntry"},{name:"null"}]},description:"選択中エントリ（未選択は null）。"},state:{required:!0,tsType:{name:"TranscriptState"},description:"本文の取得状態。"},root:{required:!0,tsType:{name:"TreeNode"},description:"前後の話を探すためのツリー。"},onNavigate:{required:!0,tsType:{name:"signature",type:"function",raw:"(path: string) => void",signature:{arguments:[{type:{name:"string"},name:"path"}],return:{name:"void"}}},description:"前後の話ボタンで別の話へ移動する。"}}};const u={path:"アイドルコミュ/篠澤広/親愛度/STEP4/第37話.json",segments:["アイドルコミュ","篠澤広","親愛度","STEP4","第37話"],session:"hiro_37",line_count:6,needs_review:1},pe=K([{path:"アイドルコミュ/篠澤広/親愛度/STEP4/第36話.json",segments:["アイドルコミュ","篠澤広","親愛度","STEP4","第36話"]},u,{path:"アイドルコミュ/篠澤広/親愛度/STEP4/第38話.json",segments:["アイドルコミュ","篠澤広","親愛度","STEP4","第38話"]}]),ve={title:"本文/Transcript",component:z,parameters:{layout:"fullscreen"},args:{root:pe,onNavigate:()=>{}},decorators:[t=>n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{height:"var(--header-h)",background:"var(--surface-2)"}}),n.jsx(t,{})]})]},h={args:{entry:null,state:{status:"idle"}}},g={args:{entry:u,state:{status:"loading"}}},x={args:{entry:u,state:{status:"ready",data:{lines:[{index:1,type:"dialogue",text:"――放課後、保健室。"},{index:2,type:"dialogue",speaker:"広",text:"プロデューサー。"},{index:3,type:"dialogue",speaker:"広",text:"わたし、{一番星|プリマステラ}になる、よ。"},{index:4,type:"dialogue",speaker:"広",text:"ううん。《《トップアイドル》》になる。"},{index:5,type:"choice",text:"一緒に行きましょう"},{index:6,type:"dialogue",speaker:"プロデューサー",text:"こちらこそ。ありがとう、広さん。",needs_review:!0}]}}}},_={args:{entry:u,state:{status:"error",error:"本文取得失敗 (HTTP 404)"}}},ue=Array.from({length:24},(t,e)=>{const r=["広","プロデューサー","千奈","佑芽"],s=r[e%r.length];return{index:e+1,type:"dialogue",speaker:s,text:`${s}の台詞、その${e+1}。スクロールしてもヘッダーが上に残るか確認する、ね。`}}),f={parameters:{layout:"fullscreen"},decorators:[t=>n.jsxs("div",{style:{height:"70vh",overflow:"auto"},children:[n.jsx("div",{style:{height:"var(--header-h)",background:"var(--surface-2)",borderBottom:"1px solid var(--border)",display:"grid",placeItems:"center",color:"var(--text-muted)",fontSize:"0.8rem"},children:"（アプリヘッダーの位置・ダミー）"}),n.jsx(t,{})]})],args:{entry:u,state:{status:"ready",data:{lines:ue}}}};var y,b,v;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
