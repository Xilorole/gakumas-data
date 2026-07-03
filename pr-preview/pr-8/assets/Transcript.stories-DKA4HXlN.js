import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{s as V,b as W}from"./tree-DAMD9cxw.js";import{L as k}from"./LineGroup-BVd2IXV_.js";import{c as D}from"./cn-2dOUpm6k.js";import{c as f}from"./createLucideIcon-xH8recUz.js";import"./index-Bc2G9s8g.js";import"./SpeakerLabel-A6CxKwk4.js";import"./LineView-DcpI3Z7w.js";import"./RichText-6CbtKJUh.js";import"./ChoiceLine-BNZ-6AbM.js";/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],K=f("chevron-left",J);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],U=f("chevron-right",Q);/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Y=f("history",X);function Z(s){const r=[];let n=[],a=!1;const o=()=>{n.length>0&&(r.push({flashback:a,groups:ee(n)}),n=[])};for(const p of s){if(p.type==="flashback-in"){o(),a=!0;continue}if(p.type==="flashback-out"){o(),a=!1;continue}n.push(p)}return o(),r}function ee(s){const r=[];for(const n of s){if(n.type==="choice"){r.push({type:"choice",line:n});continue}const a=r.at(-1);(a==null?void 0:a.type)==="dialogue"&&a.speaker===n.speaker?a.lines.push(n):r.push({type:"dialogue",speaker:n.speaker,lines:[n]})}return r}const te="_chip_19gtm_2",se="_wrap_19gtm_18",re="_badge_19gtm_1",v={chip:te,wrap:se,badge:re};function A({children:s}){return e.jsxs("div",{className:v.wrap,children:[e.jsxs("span",{className:D(v.chip,v.badge),children:[e.jsx(Y,{size:13,strokeWidth:2.2}),"回想"]}),s]})}A.__docgenInfo={description:`回想（過去の出来事）区間を、セピア調の背景で囲んでひとまとまりに示す。
内側の吹き出しは --surface-2 をローカル上書きしているため、
LineView 側を変更せずに配色だけ変わる。`,methods:[],displayName:"FlashbackBlock",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const ne="_transcript_1brj4_1",ae="_placeholder_1brj4_11",oe="_mark_1brj4_19",ie="_head_1brj4_28",ce="_breadcrumb_1brj4_38",de="_crumbGroup_1brj4_49",pe="_crumb_1brj4_49",le="_sep_1brj4_57",ue="_titleRow_1brj4_62",me="_title_1brj4_62",he="_navBtn_1brj4_80",xe="_meta_1brj4_108",ge="_chip_1brj4_115",_e="_chipReview_1brj4_124",ye="_lines_1brj4_130",be="_muted_1brj4_135",je="_error_1brj4_140",t={transcript:ne,placeholder:ae,mark:oe,head:ie,breadcrumb:ce,crumbGroup:de,crumb:pe,sep:le,titleRow:ue,title:me,navBtn:he,meta:xe,chip:ge,chipReview:_e,lines:ye,muted:be,error:je};function O({entry:s,state:r,root:n,onNavigate:a}){if(!s)return e.jsx("article",{className:t.transcript,tabIndex:-1,children:e.jsxs("div",{className:t.placeholder,children:[e.jsx("p",{className:t.mark,children:"☁"}),e.jsx("p",{children:"左の一覧から、話を選んで、ね。"})]})});const o=s.segments.slice(0,-1),p=s.segments.at(-1)??"",{prev:i,next:c}=V(n,s);return e.jsxs("article",{className:t.transcript,tabIndex:-1,children:[e.jsxs("header",{className:t.head,children:[e.jsx("nav",{className:t.breadcrumb,"aria-label":"パンくず",children:o.map((l,u)=>e.jsxs("span",{className:t.crumbGroup,children:[e.jsx("span",{className:t.crumb,children:l}),u<o.length-1&&e.jsx("span",{className:t.sep,children:"›"})]},u))}),e.jsxs("div",{className:t.titleRow,children:[e.jsx("button",{type:"button",className:t.navBtn,disabled:!i,"aria-label":i?`前の話: ${i.title??i.segments.at(-1)}`:"前の話はありません",onClick:()=>i&&a(i.path),children:e.jsx(K,{size:20})}),e.jsx("h2",{className:t.title,children:s.title??p}),e.jsx("button",{type:"button",className:t.navBtn,disabled:!c,"aria-label":c?`次の話: ${c.title??c.segments.at(-1)}`:"次の話はありません",onClick:()=>c&&a(c.path),children:e.jsx(U,{size:20})})]}),s.needs_review?e.jsx("div",{className:t.meta,children:e.jsxs("span",{className:`${t.chip} ${t.chipReview}`,children:["要確認 ",s.needs_review]})}):null]}),r.status==="loading"&&e.jsx("p",{className:t.muted,children:"読み込み中…"}),r.status==="error"&&e.jsxs("p",{className:t.error,children:["読み込みに失敗: ",r.error]}),r.status==="ready"&&r.data&&e.jsx("div",{className:t.lines,children:Z(r.data.lines).map((l,u)=>l.flashback?e.jsx(A,{children:l.groups.map((b,j)=>e.jsx(k,{group:b},j))},u):l.groups.map((b,j)=>e.jsx(k,{group:b},`${u}-${j}`)))})]})}O.__docgenInfo={description:"",methods:[],displayName:"Transcript",props:{entry:{required:!0,tsType:{name:"union",raw:"ManifestEntry | null",elements:[{name:"ManifestEntry"},{name:"null"}]},description:"選択中エントリ（未選択は null）。"},state:{required:!0,tsType:{name:"TranscriptState"},description:"本文の取得状態。"},root:{required:!0,tsType:{name:"TreeNode"},description:"前後の話を探すためのツリー。"},onNavigate:{required:!0,tsType:{name:"signature",type:"function",raw:"(path: string) => void",signature:{arguments:[{type:{name:"string"},name:"path"}],return:{name:"void"}}},description:"前後の話ボタンで別の話へ移動する。"}}};const d={path:"アイドルコミュ/篠澤広/親愛度/STEP4/第37話.json",segments:["アイドルコミュ","篠澤広","親愛度","STEP4","第37話"],session:"hiro_37",line_count:6,needs_review:1},ve=W([{path:"アイドルコミュ/篠澤広/親愛度/STEP4/第36話.json",segments:["アイドルコミュ","篠澤広","親愛度","STEP4","第36話"]},d,{path:"アイドルコミュ/篠澤広/親愛度/STEP4/第38話.json",segments:["アイドルコミュ","篠澤広","親愛度","STEP4","第38話"]}]),Ie={title:"本文/Transcript",component:O,parameters:{layout:"fullscreen"},args:{root:ve,onNavigate:()=>{}},decorators:[s=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{height:"var(--header-h)",background:"var(--surface-2)"}}),e.jsx(s,{})]})]},m={args:{entry:null,state:{status:"idle"}}},h={args:{entry:d,state:{status:"loading"}}},x={args:{entry:d,state:{status:"ready",data:{lines:[{index:1,type:"dialogue",text:"――放課後、保健室。"},{index:2,type:"dialogue",speaker:"広",text:"プロデューサー。"},{index:3,type:"dialogue",speaker:"広",text:"わたし、{一番星|プリマステラ}になる、よ。"},{index:4,type:"dialogue",speaker:"広",text:"ううん。《《トップアイドル》》になる。"},{index:5,type:"choice",text:"一緒に行きましょう"},{index:6,type:"dialogue",speaker:"プロデューサー",text:"こちらこそ。ありがとう、広さん。",needs_review:!0}]}}}},g={args:{entry:d,state:{status:"error",error:"本文取得失敗 (HTTP 404)"}}},fe=[{index:1,type:"dialogue",speaker:"プロデューサー",text:"……広さん、大丈夫ですか。"},{index:2,type:"dialogue",speaker:"広",text:"うん……ちょっと、思い出してた。"},{index:3,type:"dialogue",speaker:"広",text:"入学試験の日のこと。"},{index:4,type:"flashback-in",text:""},{index:5,type:"dialogue",text:"――数年前、初星学園。実技試験会場。"},{index:6,type:"dialogue",speaker:"千奈",text:"あなたが、噂の……？"},{index:7,type:"dialogue",speaker:"広",text:"……篠澤広、です。よろしく。"},{index:8,type:"dialogue",speaker:"広",text:"実技は、たぶん……壊滅的、だと思う。"},{index:9,type:"flashback-out",text:""},{index:10,type:"dialogue",speaker:"プロデューサー",text:"それが、千奈さんとの出会い……。"},{index:11,type:"dialogue",speaker:"広",text:"うん。ふふ……あの頃は、まだ。"}],_={args:{entry:d,state:{status:"ready",data:{lines:fe}}}},ke=Array.from({length:24},(s,r)=>{const n=["広","プロデューサー","千奈","佑芽"],a=n[r%n.length];return{index:r+1,type:"dialogue",speaker:a,text:`${a}の台詞、その${r+1}。スクロールしてもヘッダーが上に残るか確認する、ね。`}}),y={parameters:{layout:"fullscreen"},decorators:[s=>e.jsxs("div",{style:{height:"70vh",overflow:"auto"},children:[e.jsx("div",{style:{height:"var(--header-h)",background:"var(--surface-2)",borderBottom:"1px solid var(--border)",display:"grid",placeItems:"center",color:"var(--text-muted)",fontSize:"0.8rem"},children:"（アプリヘッダーの位置・ダミー）"}),e.jsx(s,{})]})],args:{entry:d,state:{status:"ready",data:{lines:ke}}}};var N,w,T;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    entry: null,
    state: {
      status: "idle"
    }
  }
}`,...(T=(w=m.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var S,$,R;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    entry,
    state: {
      status: "loading"
    }
  }
}`,...(R=($=h.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var E,B,P;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(P=(B=x.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var q,I,L;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    entry,
    state: {
      status: "error",
      error: "本文取得失敗 (HTTP 404)"
    }
  }
}`,...(L=(I=g.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var z,G,M;_.parameters={..._.parameters,docs:{...(z=_.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    entry,
    state: {
      status: "ready",
      data: {
        lines: 回想を含む会話_lines
      }
    }
  }
}`,...(M=(G=_.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var C,F,H;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(H=(F=y.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};const Le=["未選択","読み込み中","表示","エラー","回想を含む会話","長い話_スクロールでヘッダーがsticky"];export{Le as __namedExportsOrder,Ie as default,g as エラー,_ as 回想を含む会話,m as 未選択,x as 表示,h as 読み込み中,y as 長い話_スクロールでヘッダーがsticky};
