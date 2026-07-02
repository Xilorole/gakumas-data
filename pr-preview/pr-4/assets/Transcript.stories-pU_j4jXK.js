import{j as s}from"./jsx-runtime-DFAAy_2V.js";import{L as q}from"./LineGroup-C_AymTXu.js";import{c as P}from"./LineView-zhPzg0S0.js";import"./index-Bc2G9s8g.js";import"./SpeakerLabel-cQtUa0W9.js";import"./ChoiceLine-BNZ-6AbM.js";import"./RichText-6CbtKJUh.js";import"./cn-2dOUpm6k.js";/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],L=P("chevron-left",G);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],O=P("chevron-right",C);function u(t){const e=t.match(/[0-9]+(?:\.[0-9]+)?/);return e?parseFloat(e[0]):Number.POSITIVE_INFINITY}function M(t,e){let n=t.children.find(r=>r.name===e);return n||(n={name:e,children:[],episodes:[]},t.children.push(n)),n}function z(t){const e={name:"",children:[],episodes:[]};for(const n of t){let r=e;for(const o of n.segments.slice(0,-1))r=M(r,o);r.episodes.push(n)}return R(e),e}function R(t){t.episodes.sort((e,n)=>u(e.segments.at(-1)??"")-u(n.segments.at(-1)??"")),t.children.sort((e,n)=>u(e.name)-u(n.name)),t.children.forEach(R)}function B(t){return[...t.episodes,...t.children.flatMap(B)]}function F(t,e){let n=t;for(const r of e){const o=n.children.find(d=>d.name===r);if(!o)return null;n=o}return n}function H(t,e){const n=e.segments,r=n.indexOf("親愛度"),o=n.indexOf("Pアイドル");let d=null;if(r!==-1?d=n.slice(0,r+1):o!==-1&&(d=n.slice(0,-1)),!d)return{prev:null,next:null};const c=F(t,d);if(!c)return{prev:null,next:null};const i=B(c),l=i.findIndex(p=>p.path===e.path);return l===-1?{prev:null,next:null}:{prev:l>0?i[l-1]:null,next:l<i.length-1?i[l+1]:null}}function K(t){const e=[];for(const n of t){if(n.type==="choice"){e.push({type:"choice",line:n});continue}const r=e.at(-1);(r==null?void 0:r.type)==="dialogue"&&r.speaker===n.speaker?r.lines.push(n):e.push({type:"dialogue",speaker:n.speaker,lines:[n]})}return e}const V="_transcript_1brj4_1",Y="_placeholder_1brj4_11",A="_mark_1brj4_19",D="_head_1brj4_28",J="_breadcrumb_1brj4_38",Q="_crumbGroup_1brj4_49",U="_crumb_1brj4_49",W="_sep_1brj4_57",X="_titleRow_1brj4_62",Z="_title_1brj4_62",ee="_navBtn_1brj4_80",ne="_meta_1brj4_108",te="_chip_1brj4_115",se="_chipReview_1brj4_124",re="_lines_1brj4_130",ae="_muted_1brj4_135",ie="_error_1brj4_140",a={transcript:V,placeholder:Y,mark:A,head:D,breadcrumb:J,crumbGroup:Q,crumb:U,sep:W,titleRow:X,title:Z,navBtn:ee,meta:ne,chip:te,chipReview:se,lines:re,muted:ae,error:ie};function $({entry:t,state:e,root:n,onNavigate:r}){if(!t)return s.jsx("article",{className:a.transcript,tabIndex:-1,children:s.jsxs("div",{className:a.placeholder,children:[s.jsx("p",{className:a.mark,children:"☁"}),s.jsx("p",{children:"左の一覧から、話を選んで、ね。"})]})});const o=t.segments.slice(0,-1),d=t.segments.at(-1)??"",{prev:c,next:i}=H(n,t);return s.jsxs("article",{className:a.transcript,tabIndex:-1,children:[s.jsxs("header",{className:a.head,children:[s.jsx("nav",{className:a.breadcrumb,"aria-label":"パンくず",children:o.map((l,p)=>s.jsxs("span",{className:a.crumbGroup,children:[s.jsx("span",{className:a.crumb,children:l}),p<o.length-1&&s.jsx("span",{className:a.sep,children:"›"})]},p))}),s.jsxs("div",{className:a.titleRow,children:[s.jsx("button",{type:"button",className:a.navBtn,disabled:!c,"aria-label":c?`前の話: ${c.title??c.segments.at(-1)}`:"前の話はありません",onClick:()=>c&&r(c.path),children:s.jsx(L,{size:20})}),s.jsx("h2",{className:a.title,children:t.title??d}),s.jsx("button",{type:"button",className:a.navBtn,disabled:!i,"aria-label":i?`次の話: ${i.title??i.segments.at(-1)}`:"次の話はありません",onClick:()=>i&&r(i.path),children:s.jsx(O,{size:20})})]}),t.needs_review?s.jsx("div",{className:a.meta,children:s.jsxs("span",{className:`${a.chip} ${a.chipReview}`,children:["要確認 ",t.needs_review]})}):null]}),e.status==="loading"&&s.jsx("p",{className:a.muted,children:"読み込み中…"}),e.status==="error"&&s.jsxs("p",{className:a.error,children:["読み込みに失敗: ",e.error]}),e.status==="ready"&&e.data&&s.jsx("div",{className:a.lines,children:K(e.data.lines).map((l,p)=>s.jsx(q,{group:l},p))})]})}$.__docgenInfo={description:"",methods:[],displayName:"Transcript",props:{entry:{required:!0,tsType:{name:"union",raw:"ManifestEntry | null",elements:[{name:"ManifestEntry"},{name:"null"}]},description:"選択中エントリ（未選択は null）。"},state:{required:!0,tsType:{name:"TranscriptState"},description:"本文の取得状態。"},root:{required:!0,tsType:{name:"TreeNode"},description:"前後の話を探すためのツリー。"},onNavigate:{required:!0,tsType:{name:"signature",type:"function",raw:"(path: string) => void",signature:{arguments:[{type:{name:"string"},name:"path"}],return:{name:"void"}}},description:"前後の話ボタンで別の話へ移動する。"}}};const g={path:"アイドルコミュ/篠澤広/親愛度/STEP4/第37話.json",segments:["アイドルコミュ","篠澤広","親愛度","STEP4","第37話"],session:"hiro_37",line_count:6,needs_review:1},oe=z([{path:"アイドルコミュ/篠澤広/親愛度/STEP4/第36話.json",segments:["アイドルコミュ","篠澤広","親愛度","STEP4","第36話"]},g,{path:"アイドルコミュ/篠澤広/親愛度/STEP4/第38話.json",segments:["アイドルコミュ","篠澤広","親愛度","STEP4","第38話"]}]),xe={title:"本文/Transcript",component:$,parameters:{layout:"fullscreen"},args:{root:oe,onNavigate:()=>{}}},m={args:{entry:null,state:{status:"idle"}}},h={args:{entry:g,state:{status:"loading"}}},_={args:{entry:g,state:{status:"ready",data:{lines:[{index:1,type:"dialogue",text:"――放課後、保健室。"},{index:2,type:"dialogue",speaker:"広",text:"プロデューサー。"},{index:3,type:"dialogue",speaker:"広",text:"わたし、{一番星|プリマステラ}になる、よ。"},{index:4,type:"dialogue",speaker:"広",text:"ううん。《《トップアイドル》》になる。"},{index:5,type:"choice",text:"一緒に行きましょう"},{index:6,type:"dialogue",speaker:"プロデューサー",text:"こちらこそ。ありがとう、広さん。",needs_review:!0}]}}}},x={args:{entry:g,state:{status:"error",error:"本文取得失敗 (HTTP 404)"}}};var f,b,j;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    entry: null,
    state: {
      status: "idle"
    }
  }
}`,...(j=(b=m.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var y,v,N;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    entry,
    state: {
      status: "loading"
    }
  }
}`,...(N=(v=h.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var T,k,w;_.parameters={..._.parameters,docs:{...(T=_.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(w=(k=_.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var E,I,S;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    entry,
    state: {
      status: "error",
      error: "本文取得失敗 (HTTP 404)"
    }
  }
}`,...(S=(I=x.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const ge=["未選択","読み込み中","表示","エラー"];export{ge as __namedExportsOrder,xe as default,x as エラー,m as 未選択,_ as 表示,h as 読み込み中};
