import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{s as le,b as pe}from"./tree-DAMD9cxw.js";import{L as B}from"./LineGroup-BVd2IXV_.js";import{c as w}from"./cn-2dOUpm6k.js";import{c as W}from"./createLucideIcon-xH8recUz.js";import"./index-Bc2G9s8g.js";import"./SpeakerLabel-A6CxKwk4.js";import"./LineView-DcpI3Z7w.js";import"./RichText-6CbtKJUh.js";import"./ChoiceLine-BNZ-6AbM.js";/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],me=W("chevron-left",ue);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],_e=W("chevron-right",he);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],C=W("history",ye);function xe(s){const a=[];let r=[],i=!1;const p=()=>{r.length>0&&(a.push({flashback:i,groups:ve(r)}),r=[])};for(const o of s){if(o.type==="flashback-in"){p(),i=!0;continue}if(o.type==="flashback-out"){p(),i=!1;continue}r.push(o)}return p(),a}function ve(s){const a=[];for(const r of s){if(r.type==="choice"){a.push({type:"choice",line:r});continue}const i=a.at(-1);(i==null?void 0:i.type)==="dialogue"&&i.speaker===r.speaker?i.lines.push(r):a.push({type:"dialogue",speaker:r.speaker,lines:[r]})}return a}const ge="_chip_9jfdl_2",be="_dividerWrap_9jfdl_18",fe="_dividerLine_9jfdl_21",je="_barWrap_9jfdl_37",ke="_barContent_9jfdl_46",Ne="_sepiaWrap_9jfdl_52",Se="_sepiaChip_9jfdl_63",Te="_dividerTint_9jfdl_71",we="_mistyWrap_9jfdl_85",Ce="_mistyGlow_9jfdl_103",We="_mistyChip_9jfdl_110",n={chip:ge,dividerWrap:be,dividerLine:fe,barWrap:je,barContent:ke,sepiaWrap:Ne,sepiaChip:Se,dividerTint:Te,mistyWrap:we,mistyGlow:Ce,mistyChip:We};function de({variant:s="divider",children:a}){const r=e.jsxs("span",{className:n.chip,children:[e.jsx(C,{size:13,strokeWidth:2.2}),"回想"]});return s==="bar"?e.jsxs("div",{className:n.barWrap,children:[r,e.jsx("div",{className:n.barContent,children:a})]}):s==="sepia"?e.jsxs("div",{className:n.sepiaWrap,children:[e.jsxs("span",{className:w(n.chip,n.sepiaChip),children:[e.jsx(C,{size:13,strokeWidth:2.2}),"回想"]}),a]}):s==="dividerSepia"?e.jsxs("div",{className:w(n.dividerWrap,n.dividerTint),children:[e.jsx("div",{className:n.dividerLine,children:r}),a,e.jsx("div",{className:n.dividerLine})]}):s==="misty"?e.jsxs("div",{className:n.mistyWrap,children:[e.jsx("svg",{width:"0",height:"0",style:{position:"absolute"},"aria-hidden":!0,focusable:"false",children:e.jsx("defs",{children:e.jsx("filter",{id:"misty-vblur",x:"-20%",y:"-60%",width:"140%",height:"220%",children:e.jsx("feGaussianBlur",{stdDeviation:"0 16"})})})}),e.jsx("div",{"aria-hidden":!0,className:n.mistyGlow}),e.jsxs("span",{className:w(n.chip,n.mistyChip),children:[e.jsx(C,{size:13,strokeWidth:2.2}),"回想"]}),a]}):e.jsxs("div",{className:n.dividerWrap,children:[e.jsx("div",{className:n.dividerLine,children:r}),a,e.jsx("div",{className:n.dividerLine})]})}de.__docgenInfo={description:"回想（過去の出来事）区間を、地の会話と見分けがつくようひとまとまりに囲む。",methods:[],displayName:"FlashbackBlock",props:{variant:{required:!1,tsType:{name:"union",raw:'"divider" | "bar" | "sepia" | "dividerSepia" | "misty"',elements:[{name:"literal",value:'"divider"'},{name:"literal",value:'"bar"'},{name:"literal",value:'"sepia"'},{name:"literal",value:'"dividerSepia"'},{name:"literal",value:'"misty"'}]},description:"",defaultValue:{value:'"divider"',computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Be="_transcript_1brj4_1",Ee="_placeholder_1brj4_11",Le="_mark_1brj4_19",$e="_head_1brj4_28",Ve="_breadcrumb_1brj4_38",Re="_crumbGroup_1brj4_49",Ge="_crumb_1brj4_49",qe="_sep_1brj4_57",Pe="_titleRow_1brj4_62",ze="_title_1brj4_62",Ie="_navBtn_1brj4_80",Ae="_meta_1brj4_108",De="_chip_1brj4_115",Me="_chipReview_1brj4_124",Fe="_lines_1brj4_130",He="_muted_1brj4_135",Oe="_error_1brj4_140",t={transcript:Be,placeholder:Ee,mark:Le,head:$e,breadcrumb:Ve,crumbGroup:Re,crumb:Ge,sep:qe,titleRow:Pe,title:ze,navBtn:Ie,meta:Ae,chip:De,chipReview:Me,lines:Fe,muted:He,error:Oe};function oe({entry:s,state:a,root:r,onNavigate:i,flashbackVariant:p}){if(!s)return e.jsx("article",{className:t.transcript,tabIndex:-1,children:e.jsxs("div",{className:t.placeholder,children:[e.jsx("p",{className:t.mark,children:"☁"}),e.jsx("p",{children:"左の一覧から、話を選んで、ね。"})]})});const o=s.segments.slice(0,-1),ce=s.segments.at(-1)??"",{prev:c,next:l}=le(r,s);return e.jsxs("article",{className:t.transcript,tabIndex:-1,children:[e.jsxs("header",{className:t.head,children:[e.jsx("nav",{className:t.breadcrumb,"aria-label":"パンくず",children:o.map((u,m)=>e.jsxs("span",{className:t.crumbGroup,children:[e.jsx("span",{className:t.crumb,children:u}),m<o.length-1&&e.jsx("span",{className:t.sep,children:"›"})]},m))}),e.jsxs("div",{className:t.titleRow,children:[e.jsx("button",{type:"button",className:t.navBtn,disabled:!c,"aria-label":c?`前の話: ${c.title??c.segments.at(-1)}`:"前の話はありません",onClick:()=>c&&i(c.path),children:e.jsx(me,{size:20})}),e.jsx("h2",{className:t.title,children:s.title??ce}),e.jsx("button",{type:"button",className:t.navBtn,disabled:!l,"aria-label":l?`次の話: ${l.title??l.segments.at(-1)}`:"次の話はありません",onClick:()=>l&&i(l.path),children:e.jsx(_e,{size:20})})]}),s.needs_review?e.jsx("div",{className:t.meta,children:e.jsxs("span",{className:`${t.chip} ${t.chipReview}`,children:["要確認 ",s.needs_review]})}):null]}),a.status==="loading"&&e.jsx("p",{className:t.muted,children:"読み込み中…"}),a.status==="error"&&e.jsxs("p",{className:t.error,children:["読み込みに失敗: ",a.error]}),a.status==="ready"&&a.data&&e.jsx("div",{className:t.lines,children:xe(a.data.lines).map((u,m)=>u.flashback?e.jsx(de,{variant:p,children:u.groups.map((S,T)=>e.jsx(B,{group:S},T))},m):u.groups.map((S,T)=>e.jsx(B,{group:S},`${m}-${T}`)))})]})}oe.__docgenInfo={description:"",methods:[],displayName:"Transcript",props:{entry:{required:!0,tsType:{name:"union",raw:"ManifestEntry | null",elements:[{name:"ManifestEntry"},{name:"null"}]},description:"選択中エントリ（未選択は null）。"},state:{required:!0,tsType:{name:"TranscriptState"},description:"本文の取得状態。"},root:{required:!0,tsType:{name:"TreeNode"},description:"前後の話を探すためのツリー。"},onNavigate:{required:!0,tsType:{name:"signature",type:"function",raw:"(path: string) => void",signature:{arguments:[{type:{name:"string"},name:"path"}],return:{name:"void"}}},description:"前後の話ボタンで別の話へ移動する。"},flashbackVariant:{required:!1,tsType:{name:"union",raw:'"divider" | "bar" | "sepia" | "dividerSepia" | "misty"',elements:[{name:"literal",value:'"divider"'},{name:"literal",value:'"bar"'},{name:"literal",value:'"sepia"'},{name:"literal",value:'"dividerSepia"'},{name:"literal",value:'"misty"'}]},description:"回想ブロックの見せ方（比較検討用。既定は FlashbackBlock 側のデフォルト）。"}}};const d={path:"アイドルコミュ/篠澤広/親愛度/STEP4/第37話.json",segments:["アイドルコミュ","篠澤広","親愛度","STEP4","第37話"],session:"hiro_37",line_count:6,needs_review:1},Je=pe([{path:"アイドルコミュ/篠澤広/親愛度/STEP4/第36話.json",segments:["アイドルコミュ","篠澤広","親愛度","STEP4","第36話"]},d,{path:"アイドルコミュ/篠澤広/親愛度/STEP4/第38話.json",segments:["アイドルコミュ","篠澤広","親愛度","STEP4","第38話"]}]),na={title:"本文/Transcript",component:oe,parameters:{layout:"fullscreen"},args:{root:Je,onNavigate:()=>{}},decorators:[s=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{height:"var(--header-h)",background:"var(--surface-2)"}}),e.jsx(s,{})]})]},_={args:{entry:null,state:{status:"idle"}}},y={args:{entry:d,state:{status:"loading"}}},x={args:{entry:d,state:{status:"ready",data:{lines:[{index:1,type:"dialogue",text:"――放課後、保健室。"},{index:2,type:"dialogue",speaker:"広",text:"プロデューサー。"},{index:3,type:"dialogue",speaker:"広",text:"わたし、{一番星|プリマステラ}になる、よ。"},{index:4,type:"dialogue",speaker:"広",text:"ううん。《《トップアイドル》》になる。"},{index:5,type:"choice",text:"一緒に行きましょう"},{index:6,type:"dialogue",speaker:"プロデューサー",text:"こちらこそ。ありがとう、広さん。",needs_review:!0}]}}}},v={args:{entry:d,state:{status:"error",error:"本文取得失敗 (HTTP 404)"}}},h=[{index:1,type:"dialogue",speaker:"プロデューサー",text:"……広さん、大丈夫ですか。"},{index:2,type:"dialogue",speaker:"広",text:"うん……ちょっと、思い出してた。"},{index:3,type:"dialogue",speaker:"広",text:"入学試験の日のこと。"},{index:4,type:"flashback-in",text:""},{index:5,type:"dialogue",text:"――数年前、初星学園。実技試験会場。"},{index:6,type:"dialogue",speaker:"千奈",text:"あなたが、噂の……？"},{index:7,type:"dialogue",speaker:"広",text:"……篠澤広、です。よろしく。"},{index:8,type:"dialogue",speaker:"広",text:"実技は、たぶん……壊滅的、だと思う。"},{index:9,type:"flashback-out",text:""},{index:10,type:"dialogue",speaker:"プロデューサー",text:"それが、千奈さんとの出会い……。"},{index:11,type:"dialogue",speaker:"広",text:"うん。ふふ……あの頃は、まだ。"}],g={name:"回想 A. 区切り線+ラベル",args:{entry:d,state:{status:"ready",data:{lines:h}},flashbackVariant:"divider"}},b={name:"回想 B. 左端アクセントバー",args:{entry:d,state:{status:"ready",data:{lines:h}},flashbackVariant:"bar"}},f={name:"回想 C. セピア背景で全体を包む",args:{entry:d,state:{status:"ready",data:{lines:h}},flashbackVariant:"sepia"}},j={name:"回想 D. 区切り線+セピア吹き出し（線・文字ともセピア）",args:{entry:d,state:{status:"ready",data:{lines:h}},flashbackVariant:"dividerSepia"}},k={name:"回想 E. セピアの靄（背景装飾だけをぼかす）",args:{entry:d,state:{status:"ready",data:{lines:h}},flashbackVariant:"misty"}},Ke=Array.from({length:24},(s,a)=>{const r=["広","プロデューサー","千奈","佑芽"],i=r[a%r.length];return{index:a+1,type:"dialogue",speaker:i,text:`${i}の台詞、その${a+1}。スクロールしてもヘッダーが上に残るか確認する、ね。`}}),N={parameters:{layout:"fullscreen"},decorators:[s=>e.jsxs("div",{style:{height:"70vh",overflow:"auto"},children:[e.jsx("div",{style:{height:"var(--header-h)",background:"var(--surface-2)",borderBottom:"1px solid var(--border)",display:"grid",placeItems:"center",color:"var(--text-muted)",fontSize:"0.8rem"},children:"（アプリヘッダーの位置・ダミー）"}),e.jsx(s,{})]})],args:{entry:d,state:{status:"ready",data:{lines:Ke}}}};var E,L,$;_.parameters={..._.parameters,docs:{...(E=_.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    entry: null,
    state: {
      status: "idle"
    }
  }
}`,...($=(L=_.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var V,R,G;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    entry,
    state: {
      status: "loading"
    }
  }
}`,...(G=(R=y.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var q,P,z;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(z=(P=x.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var I,A,D;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    entry,
    state: {
      status: "error",
      error: "本文取得失敗 (HTTP 404)"
    }
  }
}`,...(D=(A=v.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var M,F,H;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(H=(F=g.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var O,J,K;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(U=f.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;j.parameters={...j.parameters,docs:{...(Y=j.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,se,re;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(re=(se=k.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var te,ne,ie;N.parameters={...N.parameters,docs:{...(te=N.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ie=(ne=N.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};const ia=["未選択","読み込み中","表示","エラー","回想_A_区切り線","回想_B_左端バー","回想_C_セピア背景","回想_D_区切り線とセピア吹き出し","回想_E_セピアの靄","長い話_スクロールでヘッダーがsticky"];export{ia as __namedExportsOrder,na as default,v as エラー,g as 回想_A_区切り線,b as 回想_B_左端バー,f as 回想_C_セピア背景,j as 回想_D_区切り線とセピア吹き出し,k as 回想_E_セピアの靄,_ as 未選択,x as 表示,y as 読み込み中,N as 長い話_スクロールでヘッダーがsticky};
