import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{s as he,b as _e}from"./tree-DAMD9cxw.js";import{L as B}from"./LineGroup-BVd2IXV_.js";import{c as _}from"./cn-2dOUpm6k.js";import{c as L}from"./createLucideIcon-xH8recUz.js";import"./index-Bc2G9s8g.js";import"./SpeakerLabel-A6CxKwk4.js";import"./LineView-DcpI3Z7w.js";import"./RichText-6CbtKJUh.js";import"./ChoiceLine-BNZ-6AbM.js";/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],ye=L("chevron-left",ve);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ge=L("chevron-right",xe);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],C=L("history",be);function fe(r){const a=[];let t=[],i=!1;const m=()=>{t.length>0&&(a.push({flashback:i,groups:je(t)}),t=[])};for(const o of r){if(o.type==="flashback-in"){m(),i=!0;continue}if(o.type==="flashback-out"){m(),i=!1;continue}t.push(o)}return m(),a}function je(r){const a=[];for(const t of r){if(t.type==="choice"){a.push({type:"choice",line:t});continue}const i=a.at(-1);(i==null?void 0:i.type)==="dialogue"&&i.speaker===t.speaker?i.lines.push(t):a.push({type:"dialogue",speaker:t.speaker,lines:[t]})}return a}const ke="_chip_eh83e_2",Ne="_dividerWrap_eh83e_18",Se="_dividerLine_eh83e_21",Te="_barWrap_eh83e_37",we="_barContent_eh83e_46",We="_sepiaWrap_eh83e_52",Ce="_sepiaChip_eh83e_63",Le="_dividerTint_eh83e_71",Be="_mistyWrap_eh83e_85",Ee="_mistyGlow_eh83e_103",Ve="_mistyChip_eh83e_110",$e="_fillLine_eh83e_119",Fe="_fillArea_eh83e_122",s={chip:ke,dividerWrap:Ne,dividerLine:Se,barWrap:Te,barContent:we,sepiaWrap:We,sepiaChip:Ce,dividerTint:Le,mistyWrap:Be,mistyGlow:Ee,mistyChip:Ve,fillLine:$e,fillArea:Fe};function pe({variant:r="divider",children:a}){const t=e.jsxs("span",{className:s.chip,children:[e.jsx(C,{size:13,strokeWidth:2.2}),"回想"]});return r==="bar"?e.jsxs("div",{className:s.barWrap,children:[t,e.jsx("div",{className:s.barContent,children:a})]}):r==="sepia"?e.jsxs("div",{className:s.sepiaWrap,children:[e.jsxs("span",{className:_(s.chip,s.sepiaChip),children:[e.jsx(C,{size:13,strokeWidth:2.2}),"回想"]}),a]}):r==="dividerSepia"?e.jsxs("div",{className:_(s.dividerWrap,s.dividerTint),children:[e.jsx("div",{className:s.dividerLine,children:t}),a,e.jsx("div",{className:s.dividerLine})]}):r==="misty"?e.jsxs("div",{className:s.mistyWrap,children:[e.jsx("svg",{width:"0",height:"0",style:{position:"absolute"},"aria-hidden":!0,focusable:"false",children:e.jsx("defs",{children:e.jsx("filter",{id:"misty-vblur",x:"-20%",y:"-60%",width:"140%",height:"220%",children:e.jsx("feGaussianBlur",{stdDeviation:"0 16"})})})}),e.jsx("div",{"aria-hidden":!0,className:s.mistyGlow}),e.jsxs("span",{className:_(s.chip,s.mistyChip),children:[e.jsx(C,{size:13,strokeWidth:2.2}),"回想"]}),a]}):r==="dividerFill"?e.jsxs("div",{className:s.dividerWrap,children:[e.jsx("div",{className:_(s.dividerLine,s.fillLine),children:t}),e.jsx("div",{className:s.fillArea,children:a}),e.jsx("div",{className:_(s.dividerLine,s.fillLine)})]}):e.jsxs("div",{className:s.dividerWrap,children:[e.jsx("div",{className:s.dividerLine,children:t}),a,e.jsx("div",{className:s.dividerLine})]})}pe.__docgenInfo={description:"回想（過去の出来事）区間を、地の会話と見分けがつくようひとまとまりに囲む。",methods:[],displayName:"FlashbackBlock",props:{variant:{required:!1,tsType:{name:"union",raw:`| "divider"
| "bar"
| "sepia"
| "dividerSepia"
| "misty"
| "dividerFill"`,elements:[{name:"literal",value:'"divider"'},{name:"literal",value:'"bar"'},{name:"literal",value:'"sepia"'},{name:"literal",value:'"dividerSepia"'},{name:"literal",value:'"misty"'},{name:"literal",value:'"dividerFill"'}]},description:"",defaultValue:{value:'"divider"',computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Re="_transcript_1brj4_1",Ge="_placeholder_1brj4_11",qe="_mark_1brj4_19",Ae="_head_1brj4_28",De="_breadcrumb_1brj4_38",Pe="_crumbGroup_1brj4_49",ze="_crumb_1brj4_49",Ie="_sep_1brj4_57",Me="_titleRow_1brj4_62",He="_title_1brj4_62",Oe="_navBtn_1brj4_80",Je="_meta_1brj4_108",Ke="_chip_1brj4_115",Qe="_chipReview_1brj4_124",Ue="_lines_1brj4_130",Xe="_muted_1brj4_135",Ye="_error_1brj4_140",n={transcript:Re,placeholder:Ge,mark:qe,head:Ae,breadcrumb:De,crumbGroup:Pe,crumb:ze,sep:Ie,titleRow:Me,title:He,navBtn:Oe,meta:Je,chip:Ke,chipReview:Qe,lines:Ue,muted:Xe,error:Ye};function me({entry:r,state:a,root:t,onNavigate:i,flashbackVariant:m}){if(!r)return e.jsx("article",{className:n.transcript,tabIndex:-1,children:e.jsxs("div",{className:n.placeholder,children:[e.jsx("p",{className:n.mark,children:"☁"}),e.jsx("p",{children:"左の一覧から、話を選んで、ね。"})]})});const o=r.segments.slice(0,-1),ue=r.segments.at(-1)??"",{prev:c,next:l}=he(t,r);return e.jsxs("article",{className:n.transcript,tabIndex:-1,children:[e.jsxs("header",{className:n.head,children:[e.jsx("nav",{className:n.breadcrumb,"aria-label":"パンくず",children:o.map((u,h)=>e.jsxs("span",{className:n.crumbGroup,children:[e.jsx("span",{className:n.crumb,children:u}),h<o.length-1&&e.jsx("span",{className:n.sep,children:"›"})]},h))}),e.jsxs("div",{className:n.titleRow,children:[e.jsx("button",{type:"button",className:n.navBtn,disabled:!c,"aria-label":c?`前の話: ${c.title??c.segments.at(-1)}`:"前の話はありません",onClick:()=>c&&i(c.path),children:e.jsx(ye,{size:20})}),e.jsx("h2",{className:n.title,children:r.title??ue}),e.jsx("button",{type:"button",className:n.navBtn,disabled:!l,"aria-label":l?`次の話: ${l.title??l.segments.at(-1)}`:"次の話はありません",onClick:()=>l&&i(l.path),children:e.jsx(ge,{size:20})})]}),r.needs_review?e.jsx("div",{className:n.meta,children:e.jsxs("span",{className:`${n.chip} ${n.chipReview}`,children:["要確認 ",r.needs_review]})}):null]}),a.status==="loading"&&e.jsx("p",{className:n.muted,children:"読み込み中…"}),a.status==="error"&&e.jsxs("p",{className:n.error,children:["読み込みに失敗: ",a.error]}),a.status==="ready"&&a.data&&e.jsx("div",{className:n.lines,children:fe(a.data.lines).map((u,h)=>u.flashback?e.jsx(pe,{variant:m,children:u.groups.map((w,W)=>e.jsx(B,{group:w},W))},h):u.groups.map((w,W)=>e.jsx(B,{group:w},`${h}-${W}`)))})]})}me.__docgenInfo={description:"",methods:[],displayName:"Transcript",props:{entry:{required:!0,tsType:{name:"union",raw:"ManifestEntry | null",elements:[{name:"ManifestEntry"},{name:"null"}]},description:"選択中エントリ（未選択は null）。"},state:{required:!0,tsType:{name:"TranscriptState"},description:"本文の取得状態。"},root:{required:!0,tsType:{name:"TreeNode"},description:"前後の話を探すためのツリー。"},onNavigate:{required:!0,tsType:{name:"signature",type:"function",raw:"(path: string) => void",signature:{arguments:[{type:{name:"string"},name:"path"}],return:{name:"void"}}},description:"前後の話ボタンで別の話へ移動する。"},flashbackVariant:{required:!1,tsType:{name:"union",raw:`| "divider"
| "bar"
| "sepia"
| "dividerSepia"
| "misty"
| "dividerFill"`,elements:[{name:"literal",value:'"divider"'},{name:"literal",value:'"bar"'},{name:"literal",value:'"sepia"'},{name:"literal",value:'"dividerSepia"'},{name:"literal",value:'"misty"'},{name:"literal",value:'"dividerFill"'}]},description:"回想ブロックの見せ方（比較検討用。既定は FlashbackBlock 側のデフォルト）。"}}};const d={path:"アイドルコミュ/篠澤広/親愛度/STEP4/第37話.json",segments:["アイドルコミュ","篠澤広","親愛度","STEP4","第37話"],session:"hiro_37",line_count:6,needs_review:1},Ze=_e([{path:"アイドルコミュ/篠澤広/親愛度/STEP4/第36話.json",segments:["アイドルコミュ","篠澤広","親愛度","STEP4","第36話"]},d,{path:"アイドルコミュ/篠澤広/親愛度/STEP4/第38話.json",segments:["アイドルコミュ","篠澤広","親愛度","STEP4","第38話"]}]),pa={title:"本文/Transcript",component:me,parameters:{layout:"fullscreen"},args:{root:Ze,onNavigate:()=>{}},decorators:[r=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{height:"var(--header-h)",background:"var(--surface-2)"}}),e.jsx(r,{})]})]},v={args:{entry:null,state:{status:"idle"}}},y={args:{entry:d,state:{status:"loading"}}},x={args:{entry:d,state:{status:"ready",data:{lines:[{index:1,type:"dialogue",text:"――放課後、保健室。"},{index:2,type:"dialogue",speaker:"広",text:"プロデューサー。"},{index:3,type:"dialogue",speaker:"広",text:"わたし、{一番星|プリマステラ}になる、よ。"},{index:4,type:"dialogue",speaker:"広",text:"ううん。《《トップアイドル》》になる。"},{index:5,type:"choice",text:"一緒に行きましょう"},{index:6,type:"dialogue",speaker:"プロデューサー",text:"こちらこそ。ありがとう、広さん。",needs_review:!0}]}}}},g={args:{entry:d,state:{status:"error",error:"本文取得失敗 (HTTP 404)"}}},p=[{index:1,type:"dialogue",speaker:"プロデューサー",text:"……広さん、大丈夫ですか。"},{index:2,type:"dialogue",speaker:"広",text:"うん……ちょっと、思い出してた。"},{index:3,type:"dialogue",speaker:"広",text:"入学試験の日のこと。"},{index:4,type:"flashback-in",text:""},{index:5,type:"dialogue",text:"――数年前、初星学園。実技試験会場。"},{index:6,type:"dialogue",speaker:"千奈",text:"あなたが、噂の……？"},{index:7,type:"dialogue",speaker:"広",text:"……篠澤広、です。よろしく。"},{index:8,type:"dialogue",speaker:"広",text:"実技は、たぶん……壊滅的、だと思う。"},{index:9,type:"flashback-out",text:""},{index:10,type:"dialogue",speaker:"プロデューサー",text:"それが、千奈さんとの出会い……。"},{index:11,type:"dialogue",speaker:"広",text:"うん。ふふ……あの頃は、まだ。"}],b={name:"回想 A. 区切り線+ラベル",args:{entry:d,state:{status:"ready",data:{lines:p}},flashbackVariant:"divider"}},f={name:"回想 B. 左端アクセントバー",args:{entry:d,state:{status:"ready",data:{lines:p}},flashbackVariant:"bar"}},j={name:"回想 C. セピア背景で全体を包む",args:{entry:d,state:{status:"ready",data:{lines:p}},flashbackVariant:"sepia"}},k={name:"回想 D. 区切り線+セピア吹き出し（線・文字ともセピア）",args:{entry:d,state:{status:"ready",data:{lines:p}},flashbackVariant:"dividerSepia"}},N={name:"回想 E. セピアの靄（背景装飾だけをぼかす）",args:{entry:d,state:{status:"ready",data:{lines:p}},flashbackVariant:"misty"}},S={name:"回想 D-1. 縁取りのない薄いセピアの四角（文字は黒のまま）",args:{entry:d,state:{status:"ready",data:{lines:p}},flashbackVariant:"dividerFill"}},ea=Array.from({length:24},(r,a)=>{const t=["広","プロデューサー","千奈","佑芽"],i=t[a%t.length];return{index:a+1,type:"dialogue",speaker:i,text:`${i}の台詞、その${a+1}。スクロールしてもヘッダーが上に残るか確認する、ね。`}}),T={parameters:{layout:"fullscreen"},decorators:[r=>e.jsxs("div",{style:{height:"70vh",overflow:"auto"},children:[e.jsx("div",{style:{height:"var(--header-h)",background:"var(--surface-2)",borderBottom:"1px solid var(--border)",display:"grid",placeItems:"center",color:"var(--text-muted)",fontSize:"0.8rem"},children:"（アプリヘッダーの位置・ダミー）"}),e.jsx(r,{})]})],args:{entry:d,state:{status:"ready",data:{lines:ea}}}};var E,V,$;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    entry: null,
    state: {
      status: "idle"
    }
  }
}`,...($=(V=v.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var F,R,G;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    entry,
    state: {
      status: "loading"
    }
  }
}`,...(G=(R=y.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var q,A,D;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(D=(A=x.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var P,z,I;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    entry,
    state: {
      status: "error",
      error: "本文取得失敗 (HTTP 404)"
    }
  }
}`,...(I=(z=g.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var M,H,O;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(O=(H=b.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var J,K,Q;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(X=j.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "回想 D. 区切り線+セピア吹き出し（線・文字ともセピア）",
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
}`,...(ae=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var se,re,te;N.parameters={...N.parameters,docs:{...(se=N.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: "回想 E. セピアの靄（背景装飾だけをぼかす）",
  args: {
    entry,
    state: {
      status: "ready",
      data: {
        lines: 回想を含む会話
      }
    },
    flashbackVariant: "misty"
  }
}`,...(te=(re=N.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ne,ie,de;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: "回想 D-1. 縁取りのない薄いセピアの四角（文字は黒のまま）",
  args: {
    entry,
    state: {
      status: "ready",
      data: {
        lines: 回想を含む会話
      }
    },
    flashbackVariant: "dividerFill"
  }
}`,...(de=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var oe,ce,le;T.parameters={...T.parameters,docs:{...(oe=T.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(le=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};const ma=["未選択","読み込み中","表示","エラー","回想_A_区切り線","回想_B_左端バー","回想_C_セピア背景","回想_D_区切り線とセピア吹き出し","回想_E_セピアの靄","回想_D1_薄いセピアの四角","長い話_スクロールでヘッダーがsticky"];export{ma as __namedExportsOrder,pa as default,g as エラー,b as 回想_A_区切り線,f as 回想_B_左端バー,j as 回想_C_セピア背景,S as 回想_D1_薄いセピアの四角,k as 回想_D_区切り線とセピア吹き出し,N as 回想_E_セピアの靄,v as 未選択,x as 表示,y as 読み込み中,T as 長い話_スクロールでヘッダーがsticky};
