import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{s as ae,b as se}from"./tree-DAMD9cxw.js";import{L as w}from"./LineGroup-DvsopgGt.js";import{c as re}from"./cn-2dOUpm6k.js";import{c as N}from"./createLucideIcon-xH8recUz.js";import"./index-Bc2G9s8g.js";import"./SpeakerLabel-A6CxKwk4.js";import"./LineView-CME00sjK.js";import"./RichText-6CbtKJUh.js";import"./ChoiceLine-BNZ-6AbM.js";/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],ne=N("chevron-left",te);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],oe=N("chevron-right",ie);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],S=N("history",ce);function de(s){const a=[];let r=[],n=!1;const p=()=>{r.length>0&&(a.push({flashback:n,groups:le(r)}),r=[])};for(const c of s){if(c.type==="flashback-in"){p(),n=!0;continue}if(c.type==="flashback-out"){p(),n=!1;continue}r.push(c)}return p(),a}function le(s){const a=[];for(const r of s){if(r.type==="choice"){a.push({type:"choice",line:r});continue}const n=a.at(-1);(n==null?void 0:n.type)==="dialogue"&&n.speaker===r.speaker?n.lines.push(r):a.push({type:"dialogue",speaker:r.speaker,lines:[r]})}return a}const pe="_chip_1vu8r_2",ue="_dividerWrap_1vu8r_18",me="_dividerLine_1vu8r_21",he="_barWrap_1vu8r_37",_e="_barContent_1vu8r_46",xe="_sepiaWrap_1vu8r_52",ge="_sepiaChip_1vu8r_63",i={chip:pe,dividerWrap:ue,dividerLine:me,barWrap:he,barContent:_e,sepiaWrap:xe,sepiaChip:ge};function Y({variant:s="divider",children:a}){const r=e.jsxs("span",{className:i.chip,children:[e.jsx(S,{size:13,strokeWidth:2.2}),"回想"]});return s==="bar"?e.jsxs("div",{className:i.barWrap,children:[r,e.jsx("div",{className:i.barContent,children:a})]}):s==="sepia"?e.jsxs("div",{className:i.sepiaWrap,children:[e.jsxs("span",{className:re(i.chip,i.sepiaChip),children:[e.jsx(S,{size:13,strokeWidth:2.2}),"回想"]}),a]}):e.jsxs("div",{className:i.dividerWrap,children:[e.jsx("div",{className:i.dividerLine,children:r}),a,e.jsx("div",{className:i.dividerLine})]})}Y.__docgenInfo={description:"回想（過去の出来事）区間を、地の会話と見分けがつくようひとまとまりに囲む。",methods:[],displayName:"FlashbackBlock",props:{variant:{required:!1,tsType:{name:"union",raw:'"divider" | "bar" | "sepia"',elements:[{name:"literal",value:'"divider"'},{name:"literal",value:'"bar"'},{name:"literal",value:'"sepia"'}]},description:"",defaultValue:{value:'"divider"',computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const ve="_transcript_1brj4_1",ye="_placeholder_1brj4_11",be="_mark_1brj4_19",fe="_head_1brj4_28",je="_breadcrumb_1brj4_38",ke="_crumbGroup_1brj4_49",Ne="_crumb_1brj4_49",Te="_sep_1brj4_57",we="_titleRow_1brj4_62",Se="_title_1brj4_62",Ce="_navBtn_1brj4_80",Be="_meta_1brj4_108",We="_chip_1brj4_115",$e="_chipReview_1brj4_124",Le="_lines_1brj4_130",Re="_muted_1brj4_135",Ee="_error_1brj4_140",t={transcript:ve,placeholder:ye,mark:be,head:fe,breadcrumb:je,crumbGroup:ke,crumb:Ne,sep:Te,titleRow:we,title:Se,navBtn:Ce,meta:Be,chip:We,chipReview:$e,lines:Le,muted:Re,error:Ee};function Z({entry:s,state:a,root:r,onNavigate:n,flashbackVariant:p}){if(!s)return e.jsx("article",{className:t.transcript,tabIndex:-1,children:e.jsxs("div",{className:t.placeholder,children:[e.jsx("p",{className:t.mark,children:"☁"}),e.jsx("p",{children:"左の一覧から、話を選んで、ね。"})]})});const c=s.segments.slice(0,-1),ee=s.segments.at(-1)??"",{prev:d,next:l}=ae(r,s);return e.jsxs("article",{className:t.transcript,tabIndex:-1,children:[e.jsxs("header",{className:t.head,children:[e.jsx("nav",{className:t.breadcrumb,"aria-label":"パンくず",children:c.map((u,m)=>e.jsxs("span",{className:t.crumbGroup,children:[e.jsx("span",{className:t.crumb,children:u}),m<c.length-1&&e.jsx("span",{className:t.sep,children:"›"})]},m))}),e.jsxs("div",{className:t.titleRow,children:[e.jsx("button",{type:"button",className:t.navBtn,disabled:!d,"aria-label":d?`前の話: ${d.title??d.segments.at(-1)}`:"前の話はありません",onClick:()=>d&&n(d.path),children:e.jsx(ne,{size:20})}),e.jsx("h2",{className:t.title,children:s.title??ee}),e.jsx("button",{type:"button",className:t.navBtn,disabled:!l,"aria-label":l?`次の話: ${l.title??l.segments.at(-1)}`:"次の話はありません",onClick:()=>l&&n(l.path),children:e.jsx(oe,{size:20})})]}),s.needs_review?e.jsx("div",{className:t.meta,children:e.jsxs("span",{className:`${t.chip} ${t.chipReview}`,children:["要確認 ",s.needs_review]})}):null]}),a.status==="loading"&&e.jsx("p",{className:t.muted,children:"読み込み中…"}),a.status==="error"&&e.jsxs("p",{className:t.error,children:["読み込みに失敗: ",a.error]}),a.status==="ready"&&a.data&&e.jsx("div",{className:t.lines,children:de(a.data.lines).map((u,m)=>u.flashback?e.jsx(Y,{variant:p,children:u.groups.map((j,k)=>e.jsx(w,{group:j},k))},m):u.groups.map((j,k)=>e.jsx(w,{group:j},`${m}-${k}`)))})]})}Z.__docgenInfo={description:"",methods:[],displayName:"Transcript",props:{entry:{required:!0,tsType:{name:"union",raw:"ManifestEntry | null",elements:[{name:"ManifestEntry"},{name:"null"}]},description:"選択中エントリ（未選択は null）。"},state:{required:!0,tsType:{name:"TranscriptState"},description:"本文の取得状態。"},root:{required:!0,tsType:{name:"TreeNode"},description:"前後の話を探すためのツリー。"},onNavigate:{required:!0,tsType:{name:"signature",type:"function",raw:"(path: string) => void",signature:{arguments:[{type:{name:"string"},name:"path"}],return:{name:"void"}}},description:"前後の話ボタンで別の話へ移動する。"},flashbackVariant:{required:!1,tsType:{name:"union",raw:'"divider" | "bar" | "sepia"',elements:[{name:"literal",value:'"divider"'},{name:"literal",value:'"bar"'},{name:"literal",value:'"sepia"'}]},description:"回想ブロックの見せ方（比較検討用。既定は FlashbackBlock 側のデフォルト）。"}}};const o={path:"アイドルコミュ/篠澤広/親愛度/STEP4/第37話.json",segments:["アイドルコミュ","篠澤広","親愛度","STEP4","第37話"],session:"hiro_37",line_count:6,needs_review:1},qe=se([{path:"アイドルコミュ/篠澤広/親愛度/STEP4/第36話.json",segments:["アイドルコミュ","篠澤広","親愛度","STEP4","第36話"]},o,{path:"アイドルコミュ/篠澤広/親愛度/STEP4/第38話.json",segments:["アイドルコミュ","篠澤広","親愛度","STEP4","第38話"]}]),Je={title:"本文/Transcript",component:Z,parameters:{layout:"fullscreen"},args:{root:qe,onNavigate:()=>{}},decorators:[s=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{height:"var(--header-h)",background:"var(--surface-2)"}}),e.jsx(s,{})]})]},h={args:{entry:null,state:{status:"idle"}}},_={args:{entry:o,state:{status:"loading"}}},x={args:{entry:o,state:{status:"ready",data:{lines:[{index:1,type:"dialogue",text:"――放課後、保健室。"},{index:2,type:"dialogue",speaker:"広",text:"プロデューサー。"},{index:3,type:"dialogue",speaker:"広",text:"わたし、{一番星|プリマステラ}になる、よ。"},{index:4,type:"dialogue",speaker:"広",text:"ううん。《《トップアイドル》》になる。"},{index:5,type:"choice",text:"一緒に行きましょう"},{index:6,type:"dialogue",speaker:"プロデューサー",text:"こちらこそ。ありがとう、広さん。",needs_review:!0}]}}}},g={args:{entry:o,state:{status:"error",error:"本文取得失敗 (HTTP 404)"}}},T=[{index:1,type:"dialogue",speaker:"プロデューサー",text:"……広さん、大丈夫ですか。"},{index:2,type:"dialogue",speaker:"広",text:"うん……ちょっと、思い出してた。"},{index:3,type:"dialogue",speaker:"広",text:"入学試験の日のこと。"},{index:4,type:"flashback-in",text:""},{index:5,type:"dialogue",text:"――数年前、初星学園。実技試験会場。"},{index:6,type:"dialogue",speaker:"千奈",text:"あなたが、噂の……？"},{index:7,type:"dialogue",speaker:"広",text:"……篠澤広、です。よろしく。"},{index:8,type:"dialogue",speaker:"広",text:"実技は、たぶん……壊滅的、だと思う。"},{index:9,type:"flashback-out",text:""},{index:10,type:"dialogue",speaker:"プロデューサー",text:"それが、千奈さんとの出会い……。"},{index:11,type:"dialogue",speaker:"広",text:"うん。ふふ……あの頃は、まだ。"}],v={name:"回想 A. 区切り線+ラベル",args:{entry:o,state:{status:"ready",data:{lines:T}},flashbackVariant:"divider"}},y={name:"回想 B. 左端アクセントバー",args:{entry:o,state:{status:"ready",data:{lines:T}},flashbackVariant:"bar"}},b={name:"回想 C. セピア背景で全体を包む",args:{entry:o,state:{status:"ready",data:{lines:T}},flashbackVariant:"sepia"}},Pe=Array.from({length:24},(s,a)=>{const r=["広","プロデューサー","千奈","佑芽"],n=r[a%r.length];return{index:a+1,type:"dialogue",speaker:n,text:`${n}の台詞、その${a+1}。スクロールしてもヘッダーが上に残るか確認する、ね。`}}),f={parameters:{layout:"fullscreen"},decorators:[s=>e.jsxs("div",{style:{height:"70vh",overflow:"auto"},children:[e.jsx("div",{style:{height:"var(--header-h)",background:"var(--surface-2)",borderBottom:"1px solid var(--border)",display:"grid",placeItems:"center",color:"var(--text-muted)",fontSize:"0.8rem"},children:"（アプリヘッダーの位置・ダミー）"}),e.jsx(s,{})]})],args:{entry:o,state:{status:"ready",data:{lines:Pe}}}};var C,B,W;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    entry: null,
    state: {
      status: "idle"
    }
  }
}`,...(W=(B=h.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var $,L,R;_.parameters={..._.parameters,docs:{...($=_.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    entry,
    state: {
      status: "loading"
    }
  }
}`,...(R=(L=_.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var E,q,P;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(P=(q=x.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var V,I,z;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    entry,
    state: {
      status: "error",
      error: "本文取得失敗 (HTTP 404)"
    }
  }
}`,...(z=(I=g.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var A,G,M;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "回想 A. 区切り線+ラベル",
  args: {
    entry,
    state: {
      status: "ready",
      data: {
        lines: 回想を含む会話
      }
    },
    flashbackVariant: "divider"
  }
}`,...(M=(G=v.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var F,H,O;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "回想 B. 左端アクセントバー",
  args: {
    entry,
    state: {
      status: "ready",
      data: {
        lines: 回想を含む会話
      }
    },
    flashbackVariant: "bar"
  }
}`,...(O=(H=y.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var D,J,K;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "回想 C. セピア背景で全体を包む",
  args: {
    entry,
    state: {
      status: "ready",
      data: {
        lines: 回想を含む会話
      }
    },
    flashbackVariant: "sepia"
  }
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(U=f.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const Ke=["未選択","読み込み中","表示","エラー","回想_A_区切り線","回想_B_左端バー","回想_C_セピア背景","長い話_スクロールでヘッダーがsticky"];export{Ke as __namedExportsOrder,Je as default,g as エラー,v as 回想_A_区切り線,y as 回想_B_左端バー,b as 回想_C_セピア背景,h as 未選択,x as 表示,_ as 読み込み中,f as 長い話_スクロールでヘッダーがsticky};
