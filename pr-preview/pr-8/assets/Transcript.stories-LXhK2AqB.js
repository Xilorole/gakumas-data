import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{s as Z,b as ee}from"./tree-DAMD9cxw.js";import{L as te}from"./LineGroup-DP1kojSY.js";import{c as Q}from"./cn-2dOUpm6k.js";import{c as f}from"./createLucideIcon-xH8recUz.js";import"./index-Bc2G9s8g.js";import"./SpeakerLabel-A6CxKwk4.js";import"./LineView-DcpI3Z7w.js";import"./RichText-6CbtKJUh.js";import"./ChoiceLine-BNZ-6AbM.js";/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],ne=f("chevron-left",se);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ae=f("chevron-right",re);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],oe=f("ellipsis",ie);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],de=f("history",ce);function le(t){const s=[];let n=[],a=!1;const l=()=>{n.length>0&&(s.push({flashback:a,groups:pe(n)}),n=[])};for(const p of t){if(p.type!=="scene_transition"){const i=p.in_flashback??!1;i!==a&&(l(),a=i)}n.push(p)}return l(),s}function pe(t){const s=[];for(const n of t){if(n.type==="choice"){s.push({type:"choice",line:n});continue}if(n.type==="scene_transition"){s.push({type:"scene-break"});continue}const a=s.at(-1);(a==null?void 0:a.type)==="dialogue"&&a.speaker===n.speaker?a.lines.push(n):s.push({type:"dialogue",speaker:n.speaker,lines:[n]})}return s}const ue="_chip_19gtm_2",me="_wrap_19gtm_18",he="_badge_19gtm_1",j={chip:ue,wrap:me,badge:he};function U({children:t}){return e.jsxs("div",{className:j.wrap,children:[e.jsxs("span",{className:Q(j.chip,j.badge),children:[e.jsx(de,{size:13,strokeWidth:2.2}),"回想"]}),t]})}U.__docgenInfo={description:`回想（過去の出来事）区間を、セピア調の背景で囲んでひとまとまりに示す。
内側の吹き出しは --surface-2 をローカル上書きしているため、
LineView 側を変更せずに配色だけ変わる。`,methods:[],displayName:"FlashbackBlock",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const xe="_line_1d4v7_1",_e="_icon_1d4v7_9",ye="_flashback_1d4v7_18",v={line:xe,icon:_e,flashback:ye};function X({flashback:t}){return e.jsx("div",{className:Q(v.line,t&&v.flashback),children:e.jsx(oe,{size:16,strokeWidth:2,className:v.icon})})}X.__docgenInfo={description:`場面転換（カット割り）を示す軽い区切り。ラベルは付けず、線+アイコンだけ。
回想の外なら地の会話と同じ配色、回想の内側ならセピア調にして
「まだ回想の中で場面だけ変わった」ことがわかるようにする。`,methods:[],displayName:"SceneBreak",props:{flashback:{required:!1,tsType:{name:"boolean"},description:"回想の内側で起きた場面転換なら true（線・アイコンをセピア調にする）。"}}};const ge="_transcript_1brj4_1",be="_placeholder_1brj4_11",ke="_mark_1brj4_19",fe="_head_1brj4_28",je="_breadcrumb_1brj4_38",ve="_crumbGroup_1brj4_49",Ne="_crumb_1brj4_49",we="_sep_1brj4_57",Te="_titleRow_1brj4_62",Se="_title_1brj4_62",$e="_navBtn_1brj4_80",Be="_meta_1brj4_108",Ee="_chip_1brj4_115",Re="_chipReview_1brj4_124",qe="_lines_1brj4_130",Ie="_muted_1brj4_135",ze="_error_1brj4_140",r={transcript:ge,placeholder:be,mark:ke,head:fe,breadcrumb:je,crumbGroup:ve,crumb:Ne,sep:we,titleRow:Te,title:Se,navBtn:$e,meta:Be,chip:Ee,chipReview:Re,lines:qe,muted:Ie,error:ze};function N(t,s){return t.groups.map((n,a)=>n.type==="scene-break"?e.jsx(X,{flashback:t.flashback},`${s}-${a}`):e.jsx(te,{group:n},`${s}-${a}`))}function Y({entry:t,state:s,root:n,onNavigate:a}){if(!t)return e.jsx("article",{className:r.transcript,tabIndex:-1,children:e.jsxs("div",{className:r.placeholder,children:[e.jsx("p",{className:r.mark,children:"☁"}),e.jsx("p",{children:"左の一覧から、話を選んで、ね。"})]})});const l=t.segments.slice(0,-1),p=t.segments.at(-1)??"",{prev:i,next:c}=Z(n,t);return e.jsxs("article",{className:r.transcript,tabIndex:-1,children:[e.jsxs("header",{className:r.head,children:[e.jsx("nav",{className:r.breadcrumb,"aria-label":"パンくず",children:l.map((u,d)=>e.jsxs("span",{className:r.crumbGroup,children:[e.jsx("span",{className:r.crumb,children:u}),d<l.length-1&&e.jsx("span",{className:r.sep,children:"›"})]},d))}),e.jsxs("div",{className:r.titleRow,children:[e.jsx("button",{type:"button",className:r.navBtn,disabled:!i,"aria-label":i?`前の話: ${i.title??i.segments.at(-1)}`:"前の話はありません",onClick:()=>i&&a(i.path),children:e.jsx(ne,{size:20})}),e.jsx("h2",{className:r.title,children:t.title??p}),e.jsx("button",{type:"button",className:r.navBtn,disabled:!c,"aria-label":c?`次の話: ${c.title??c.segments.at(-1)}`:"次の話はありません",onClick:()=>c&&a(c.path),children:e.jsx(ae,{size:20})})]}),t.needs_review?e.jsx("div",{className:r.meta,children:e.jsxs("span",{className:`${r.chip} ${r.chipReview}`,children:["要確認 ",t.needs_review]})}):null]}),s.status==="loading"&&e.jsx("p",{className:r.muted,children:"読み込み中…"}),s.status==="error"&&e.jsxs("p",{className:r.error,children:["読み込みに失敗: ",s.error]}),s.status==="ready"&&s.data&&e.jsx("div",{className:r.lines,children:le(s.data.lines).map((u,d)=>u.flashback?e.jsx(U,{children:N(u,`${d}`)},d):N(u,`${d}`))})]})}Y.__docgenInfo={description:"",methods:[],displayName:"Transcript",props:{entry:{required:!0,tsType:{name:"union",raw:"ManifestEntry | null",elements:[{name:"ManifestEntry"},{name:"null"}]},description:"選択中エントリ（未選択は null）。"},state:{required:!0,tsType:{name:"TranscriptState"},description:"本文の取得状態。"},root:{required:!0,tsType:{name:"TreeNode"},description:"前後の話を探すためのツリー。"},onNavigate:{required:!0,tsType:{name:"signature",type:"function",raw:"(path: string) => void",signature:{arguments:[{type:{name:"string"},name:"path"}],return:{name:"void"}}},description:"前後の話ボタンで別の話へ移動する。"}}};const o={path:"アイドルコミュ/篠澤広/親愛度/STEP4/第37話.json",segments:["アイドルコミュ","篠澤広","親愛度","STEP4","第37話"],session:"hiro_37",line_count:6,needs_review:1},Le=ee([{path:"アイドルコミュ/篠澤広/親愛度/STEP4/第36話.json",segments:["アイドルコミュ","篠澤広","親愛度","STEP4","第36話"]},o,{path:"アイドルコミュ/篠澤広/親愛度/STEP4/第38話.json",segments:["アイドルコミュ","篠澤広","親愛度","STEP4","第38話"]}]),Ue={title:"本文/Transcript",component:Y,parameters:{layout:"fullscreen"},args:{root:Le,onNavigate:()=>{}},decorators:[t=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{height:"var(--header-h)",background:"var(--surface-2)"}}),e.jsx(t,{})]})]},m={args:{entry:null,state:{status:"idle"}}},h={args:{entry:o,state:{status:"loading"}}},x={args:{entry:o,state:{status:"ready",data:{lines:[{index:1,type:"dialogue",text:"――放課後、保健室。"},{index:2,type:"dialogue",speaker:"広",text:"プロデューサー。"},{index:3,type:"dialogue",speaker:"広",text:"わたし、{一番星|プリマステラ}になる、よ。"},{index:4,type:"dialogue",speaker:"広",text:"ううん。《《トップアイドル》》になる。"},{index:5,type:"choice",text:"一緒に行きましょう"},{index:6,type:"dialogue",speaker:"プロデューサー",text:"こちらこそ。ありがとう、広さん。",needs_review:!0}]}}}},_={args:{entry:o,state:{status:"error",error:"本文取得失敗 (HTTP 404)"}}},Pe=[{index:1,type:"dialogue",speaker:"プロデューサー",text:"……広さん、大丈夫ですか。"},{index:2,type:"dialogue",speaker:"広",text:"うん……ちょっと、思い出してた。"},{index:3,type:"dialogue",speaker:"広",text:"入学試験の日のこと。"},{index:4,type:"scene_transition",text:""},{index:5,type:"dialogue",text:"――数年前、初星学園。実技試験会場。",in_flashback:!0},{index:6,type:"dialogue",speaker:"千奈",text:"あなたが、噂の……？",in_flashback:!0},{index:7,type:"dialogue",speaker:"広",text:"……篠澤広、です。よろしく。",in_flashback:!0},{index:8,type:"dialogue",speaker:"広",text:"実技は、たぶん……壊滅的、だと思う。",in_flashback:!0},{index:9,type:"scene_transition",text:""},{index:10,type:"dialogue",speaker:"プロデューサー",text:"それが、千奈さんとの出会い……。"},{index:11,type:"dialogue",speaker:"広",text:"うん。ふふ……あの頃は、まだ。"}],y={args:{entry:o,state:{status:"ready",data:{lines:Pe}}}},Ge=[{index:1,type:"dialogue",speaker:"広",text:"そろそろ、行こうか。"},{index:2,type:"dialogue",speaker:"プロデューサー",text:"はい。屋上、でしたね。"},{index:3,type:"scene_transition",text:""},{index:4,type:"dialogue",text:"――放課後、屋上。"},{index:5,type:"dialogue",speaker:"広",text:"……風、気持ちいい。"},{index:6,type:"dialogue",speaker:"プロデューサー",text:"そうですね。"}],g={args:{entry:o,state:{status:"ready",data:{lines:Ge}}}},Me=[{index:1,type:"dialogue",speaker:"プロデューサー",text:"……広さん、大丈夫ですか。"},{index:2,type:"dialogue",speaker:"広",text:"うん……ちょっと、思い出してた。"},{index:3,type:"scene_transition",text:""},{index:4,type:"dialogue",text:"――数年前、初星学園。実技試験会場。",in_flashback:!0},{index:5,type:"dialogue",speaker:"千奈",text:"あなたが、噂の……？",in_flashback:!0},{index:6,type:"scene_transition",text:""},{index:7,type:"dialogue",text:"――同じ日の放課後。",in_flashback:!0},{index:8,type:"dialogue",speaker:"広",text:"……篠澤広、です。よろしく。",in_flashback:!0},{index:9,type:"scene_transition",text:""},{index:10,type:"dialogue",speaker:"広",text:"うん。あの頃は、まだ。"}],b={args:{entry:o,state:{status:"ready",data:{lines:Me}}}},Ce=Array.from({length:24},(t,s)=>{const n=["広","プロデューサー","千奈","佑芽"],a=n[s%n.length];return{index:s+1,type:"dialogue",speaker:a,text:`${a}の台詞、その${s+1}。スクロールしてもヘッダーが上に残るか確認する、ね。`}}),k={parameters:{layout:"fullscreen"},decorators:[t=>e.jsxs("div",{style:{height:"70vh",overflow:"auto"},children:[e.jsx("div",{style:{height:"var(--header-h)",background:"var(--surface-2)",borderBottom:"1px solid var(--border)",display:"grid",placeItems:"center",color:"var(--text-muted)",fontSize:"0.8rem"},children:"（アプリヘッダーの位置・ダミー）"}),e.jsx(t,{})]})],args:{entry:o,state:{status:"ready",data:{lines:Ce}}}};var w,T,S;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    entry: null,
    state: {
      status: "idle"
    }
  }
}`,...(S=(T=m.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var $,B,E;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    entry,
    state: {
      status: "loading"
    }
  }
}`,...(E=(B=h.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var R,q,I;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(I=(q=x.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var z,L,P;_.parameters={..._.parameters,docs:{...(z=_.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    entry,
    state: {
      status: "error",
      error: "本文取得失敗 (HTTP 404)"
    }
  }
}`,...(P=(L=_.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var G,M,C;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    entry,
    state: {
      status: "ready",
      data: {
        lines: 回想を含む会話_lines
      }
    }
  }
}`,...(C=(M=y.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var F,H,W;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    entry,
    state: {
      status: "ready",
      data: {
        lines: 場面転換を含む会話_lines
      }
    }
  }
}`,...(W=(H=g.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var A,O,V;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    entry,
    state: {
      status: "ready",
      data: {
        lines: 回想と場面転換の両方を含む会話_lines
      }
    }
  }
}`,...(V=(O=b.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var D,J,K;k.parameters={...k.parameters,docs:{...(D=k.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(K=(J=k.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const Xe=["未選択","読み込み中","表示","エラー","回想を含む会話","場面転換を含む会話","回想と場面転換の両方を含む会話","長い話_スクロールでヘッダーがsticky"];export{Xe as __namedExportsOrder,Ue as default,_ as エラー,b as 回想と場面転換の両方を含む会話,y as 回想を含む会話,g as 場面転換を含む会話,m as 未選択,x as 表示,h as 読み込み中,k as 長い話_スクロールでヘッダーがsticky};
