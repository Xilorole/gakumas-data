import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{s as ie,b as oe}from"./tree-DAMD9cxw.js";import{L as w}from"./LineGroup-DvsopgGt.js";import{c as C}from"./cn-2dOUpm6k.js";import{c as T}from"./createLucideIcon-xH8recUz.js";import"./index-Bc2G9s8g.js";import"./SpeakerLabel-A6CxKwk4.js";import"./LineView-CME00sjK.js";import"./RichText-6CbtKJUh.js";import"./ChoiceLine-BNZ-6AbM.js";/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],ce=T("chevron-left",de);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],pe=T("chevron-right",le);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],W=T("history",ue);function me(s){const a=[];let r=[],n=!1;const p=()=>{r.length>0&&(a.push({flashback:n,groups:he(r)}),r=[])};for(const d of s){if(d.type==="flashback-in"){p(),n=!0;continue}if(d.type==="flashback-out"){p(),n=!1;continue}r.push(d)}return p(),a}function he(s){const a=[];for(const r of s){if(r.type==="choice"){a.push({type:"choice",line:r});continue}const n=a.at(-1);(n==null?void 0:n.type)==="dialogue"&&n.speaker===r.speaker?n.lines.push(r):a.push({type:"dialogue",speaker:r.speaker,lines:[r]})}return a}const _e="_chip_a1lnh_2",xe="_dividerWrap_a1lnh_18",ve="_dividerLine_a1lnh_21",ge="_barWrap_a1lnh_37",ye="_barContent_a1lnh_46",be="_sepiaWrap_a1lnh_52",fe="_sepiaChip_a1lnh_63",je="_dividerTint_a1lnh_71",i={chip:_e,dividerWrap:xe,dividerLine:ve,barWrap:ge,barContent:ye,sepiaWrap:be,sepiaChip:fe,dividerTint:je};function re({variant:s="divider",children:a}){const r=e.jsxs("span",{className:i.chip,children:[e.jsx(W,{size:13,strokeWidth:2.2}),"回想"]});return s==="bar"?e.jsxs("div",{className:i.barWrap,children:[r,e.jsx("div",{className:i.barContent,children:a})]}):s==="sepia"?e.jsxs("div",{className:i.sepiaWrap,children:[e.jsxs("span",{className:C(i.chip,i.sepiaChip),children:[e.jsx(W,{size:13,strokeWidth:2.2}),"回想"]}),a]}):s==="dividerSepia"?e.jsxs("div",{className:C(i.dividerWrap,i.dividerTint),children:[e.jsx("div",{className:i.dividerLine,children:r}),a,e.jsx("div",{className:i.dividerLine})]}):e.jsxs("div",{className:i.dividerWrap,children:[e.jsx("div",{className:i.dividerLine,children:r}),a,e.jsx("div",{className:i.dividerLine})]})}re.__docgenInfo={description:"回想（過去の出来事）区間を、地の会話と見分けがつくようひとまとまりに囲む。",methods:[],displayName:"FlashbackBlock",props:{variant:{required:!1,tsType:{name:"union",raw:'"divider" | "bar" | "sepia" | "dividerSepia"',elements:[{name:"literal",value:'"divider"'},{name:"literal",value:'"bar"'},{name:"literal",value:'"sepia"'},{name:"literal",value:'"dividerSepia"'}]},description:"",defaultValue:{value:'"divider"',computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const ke="_transcript_1brj4_1",Ne="_placeholder_1brj4_11",Se="_mark_1brj4_19",Te="_head_1brj4_28",we="_breadcrumb_1brj4_38",Ce="_crumbGroup_1brj4_49",We="_crumb_1brj4_49",Be="_sep_1brj4_57",Le="_titleRow_1brj4_62",$e="_title_1brj4_62",Re="_navBtn_1brj4_80",Ee="_meta_1brj4_108",Ve="_chip_1brj4_115",qe="_chipReview_1brj4_124",Pe="_lines_1brj4_130",Ae="_muted_1brj4_135",Ie="_error_1brj4_140",t={transcript:ke,placeholder:Ne,mark:Se,head:Te,breadcrumb:we,crumbGroup:Ce,crumb:We,sep:Be,titleRow:Le,title:$e,navBtn:Re,meta:Ee,chip:Ve,chipReview:qe,lines:Pe,muted:Ae,error:Ie};function te({entry:s,state:a,root:r,onNavigate:n,flashbackVariant:p}){if(!s)return e.jsx("article",{className:t.transcript,tabIndex:-1,children:e.jsxs("div",{className:t.placeholder,children:[e.jsx("p",{className:t.mark,children:"☁"}),e.jsx("p",{children:"左の一覧から、話を選んで、ね。"})]})});const d=s.segments.slice(0,-1),ne=s.segments.at(-1)??"",{prev:c,next:l}=ie(r,s);return e.jsxs("article",{className:t.transcript,tabIndex:-1,children:[e.jsxs("header",{className:t.head,children:[e.jsx("nav",{className:t.breadcrumb,"aria-label":"パンくず",children:d.map((u,m)=>e.jsxs("span",{className:t.crumbGroup,children:[e.jsx("span",{className:t.crumb,children:u}),m<d.length-1&&e.jsx("span",{className:t.sep,children:"›"})]},m))}),e.jsxs("div",{className:t.titleRow,children:[e.jsx("button",{type:"button",className:t.navBtn,disabled:!c,"aria-label":c?`前の話: ${c.title??c.segments.at(-1)}`:"前の話はありません",onClick:()=>c&&n(c.path),children:e.jsx(ce,{size:20})}),e.jsx("h2",{className:t.title,children:s.title??ne}),e.jsx("button",{type:"button",className:t.navBtn,disabled:!l,"aria-label":l?`次の話: ${l.title??l.segments.at(-1)}`:"次の話はありません",onClick:()=>l&&n(l.path),children:e.jsx(pe,{size:20})})]}),s.needs_review?e.jsx("div",{className:t.meta,children:e.jsxs("span",{className:`${t.chip} ${t.chipReview}`,children:["要確認 ",s.needs_review]})}):null]}),a.status==="loading"&&e.jsx("p",{className:t.muted,children:"読み込み中…"}),a.status==="error"&&e.jsxs("p",{className:t.error,children:["読み込みに失敗: ",a.error]}),a.status==="ready"&&a.data&&e.jsx("div",{className:t.lines,children:me(a.data.lines).map((u,m)=>u.flashback?e.jsx(re,{variant:p,children:u.groups.map((N,S)=>e.jsx(w,{group:N},S))},m):u.groups.map((N,S)=>e.jsx(w,{group:N},`${m}-${S}`)))})]})}te.__docgenInfo={description:"",methods:[],displayName:"Transcript",props:{entry:{required:!0,tsType:{name:"union",raw:"ManifestEntry | null",elements:[{name:"ManifestEntry"},{name:"null"}]},description:"選択中エントリ（未選択は null）。"},state:{required:!0,tsType:{name:"TranscriptState"},description:"本文の取得状態。"},root:{required:!0,tsType:{name:"TreeNode"},description:"前後の話を探すためのツリー。"},onNavigate:{required:!0,tsType:{name:"signature",type:"function",raw:"(path: string) => void",signature:{arguments:[{type:{name:"string"},name:"path"}],return:{name:"void"}}},description:"前後の話ボタンで別の話へ移動する。"},flashbackVariant:{required:!1,tsType:{name:"union",raw:'"divider" | "bar" | "sepia" | "dividerSepia"',elements:[{name:"literal",value:'"divider"'},{name:"literal",value:'"bar"'},{name:"literal",value:'"sepia"'},{name:"literal",value:'"dividerSepia"'}]},description:"回想ブロックの見せ方（比較検討用。既定は FlashbackBlock 側のデフォルト）。"}}};const o={path:"アイドルコミュ/篠澤広/親愛度/STEP4/第37話.json",segments:["アイドルコミュ","篠澤広","親愛度","STEP4","第37話"],session:"hiro_37",line_count:6,needs_review:1},ze=oe([{path:"アイドルコミュ/篠澤広/親愛度/STEP4/第36話.json",segments:["アイドルコミュ","篠澤広","親愛度","STEP4","第36話"]},o,{path:"アイドルコミュ/篠澤広/親愛度/STEP4/第38話.json",segments:["アイドルコミュ","篠澤広","親愛度","STEP4","第38話"]}]),Ye={title:"本文/Transcript",component:te,parameters:{layout:"fullscreen"},args:{root:ze,onNavigate:()=>{}},decorators:[s=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{height:"var(--header-h)",background:"var(--surface-2)"}}),e.jsx(s,{})]})]},h={args:{entry:null,state:{status:"idle"}}},_={args:{entry:o,state:{status:"loading"}}},x={args:{entry:o,state:{status:"ready",data:{lines:[{index:1,type:"dialogue",text:"――放課後、保健室。"},{index:2,type:"dialogue",speaker:"広",text:"プロデューサー。"},{index:3,type:"dialogue",speaker:"広",text:"わたし、{一番星|プリマステラ}になる、よ。"},{index:4,type:"dialogue",speaker:"広",text:"ううん。《《トップアイドル》》になる。"},{index:5,type:"choice",text:"一緒に行きましょう"},{index:6,type:"dialogue",speaker:"プロデューサー",text:"こちらこそ。ありがとう、広さん。",needs_review:!0}]}}}},v={args:{entry:o,state:{status:"error",error:"本文取得失敗 (HTTP 404)"}}},k=[{index:1,type:"dialogue",speaker:"プロデューサー",text:"……広さん、大丈夫ですか。"},{index:2,type:"dialogue",speaker:"広",text:"うん……ちょっと、思い出してた。"},{index:3,type:"dialogue",speaker:"広",text:"入学試験の日のこと。"},{index:4,type:"flashback-in",text:""},{index:5,type:"dialogue",text:"――数年前、初星学園。実技試験会場。"},{index:6,type:"dialogue",speaker:"千奈",text:"あなたが、噂の……？"},{index:7,type:"dialogue",speaker:"広",text:"……篠澤広、です。よろしく。"},{index:8,type:"dialogue",speaker:"広",text:"実技は、たぶん……壊滅的、だと思う。"},{index:9,type:"flashback-out",text:""},{index:10,type:"dialogue",speaker:"プロデューサー",text:"それが、千奈さんとの出会い……。"},{index:11,type:"dialogue",speaker:"広",text:"うん。ふふ……あの頃は、まだ。"}],g={name:"回想 A. 区切り線+ラベル",args:{entry:o,state:{status:"ready",data:{lines:k}},flashbackVariant:"divider"}},y={name:"回想 B. 左端アクセントバー",args:{entry:o,state:{status:"ready",data:{lines:k}},flashbackVariant:"bar"}},b={name:"回想 C. セピア背景で全体を包む",args:{entry:o,state:{status:"ready",data:{lines:k}},flashbackVariant:"sepia"}},f={name:"回想 D. 区切り線+セピア吹き出し（A+Cの折衷）",args:{entry:o,state:{status:"ready",data:{lines:k}},flashbackVariant:"dividerSepia"}},Ge=Array.from({length:24},(s,a)=>{const r=["広","プロデューサー","千奈","佑芽"],n=r[a%r.length];return{index:a+1,type:"dialogue",speaker:n,text:`${n}の台詞、その${a+1}。スクロールしてもヘッダーが上に残るか確認する、ね。`}}),j={parameters:{layout:"fullscreen"},decorators:[s=>e.jsxs("div",{style:{height:"70vh",overflow:"auto"},children:[e.jsx("div",{style:{height:"var(--header-h)",background:"var(--surface-2)",borderBottom:"1px solid var(--border)",display:"grid",placeItems:"center",color:"var(--text-muted)",fontSize:"0.8rem"},children:"（アプリヘッダーの位置・ダミー）"}),e.jsx(s,{})]})],args:{entry:o,state:{status:"ready",data:{lines:Ge}}}};var B,L,$;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    entry: null,
    state: {
      status: "idle"
    }
  }
}`,...($=(L=h.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var R,E,V;_.parameters={..._.parameters,docs:{...(R=_.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    entry,
    state: {
      status: "loading"
    }
  }
}`,...(V=(E=_.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var q,P,A;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(A=(P=x.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var I,z,G;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    entry,
    state: {
      status: "error",
      error: "本文取得失敗 (HTTP 404)"
    }
  }
}`,...(G=(z=v.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var M,D,F;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(F=(D=g.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var H,O,J;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(J=(O=y.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var K,Q,U;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(U=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "回想 D. 区切り線+セピア吹き出し（A+Cの折衷）",
  args: {
    entry,
    state: {
      status: "ready",
      data: {
        lines: 回想を含む会話
      }
    },
    flashbackVariant: "dividerSepia"
  }
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,se;j.parameters={...j.parameters,docs:{...(ee=j.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(se=(ae=j.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};const Ze=["未選択","読み込み中","表示","エラー","回想_A_区切り線","回想_B_左端バー","回想_C_セピア背景","回想_D_区切り線とセピア吹き出し","長い話_スクロールでヘッダーがsticky"];export{Ze as __namedExportsOrder,Ye as default,v as エラー,g as 回想_A_区切り線,y as 回想_B_左端バー,b as 回想_C_セピア背景,f as 回想_D_区切り線とセピア吹き出し,h as 未選択,x as 表示,_ as 読み込み中,j as 長い話_スクロールでヘッダーがsticky};
