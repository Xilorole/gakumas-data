import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{L as T}from"./LineGroup-BgIWHzPW.js";import"./index-Bc2G9s8g.js";import"./SpeakerLabel-rWAp39z3.js";import"./LineView-DuyPWgMq.js";import"./cn-2dOUpm6k.js";import"./RichText-6CbtKJUh.js";import"./ChoiceLine-B1dgdzcD.js";function S(r){const n=[];for(const t of r){if(t.type==="choice"){n.push({type:"choice",line:t});continue}const a=n.at(-1);(a==null?void 0:a.type)==="dialogue"&&a.speaker===t.speaker?a.lines.push(t):n.push({type:"dialogue",speaker:t.speaker,lines:[t]})}return n}const w="_transcript_jbq3f_1",E="_placeholder_jbq3f_11",G="_mark_jbq3f_19",R="_head_jbq3f_25",$="_breadcrumb_jbq3f_31",P="_crumbGroup_jbq3f_40",I="_crumb_jbq3f_40",L="_sep_jbq3f_48",H="_title_jbq3f_52",M="_meta_jbq3f_58",O="_chip_jbq3f_64",z="_chipReview_jbq3f_73",A="_chipSession_jbq3f_78",B="_lines_jbq3f_82",C="_muted_jbq3f_87",D="_error_jbq3f_92",s={transcript:w,placeholder:E,mark:G,head:R,breadcrumb:$,crumbGroup:P,crumb:I,sep:L,title:H,meta:M,chip:O,chipReview:z,chipSession:A,lines:B,muted:C,error:D};function v({entry:r,state:n}){if(!r)return e.jsx("article",{className:s.transcript,tabIndex:-1,children:e.jsxs("div",{className:s.placeholder,children:[e.jsx("p",{className:s.mark,children:"☁"}),e.jsx("p",{children:"左の一覧から、話を選んで、ね。"})]})});const t=r.segments.slice(0,-1),a=r.segments.at(-1)??"";return e.jsxs("article",{className:s.transcript,tabIndex:-1,children:[e.jsxs("header",{className:s.head,children:[e.jsx("nav",{className:s.breadcrumb,"aria-label":"パンくず",children:t.map((d,i)=>e.jsxs("span",{className:s.crumbGroup,children:[e.jsx("span",{className:s.crumb,children:d}),i<t.length-1&&e.jsx("span",{className:s.sep,children:"›"})]},i))}),e.jsx("h2",{className:s.title,children:r.title??a}),e.jsxs("div",{className:s.meta,children:[r.line_count!=null&&e.jsxs("span",{className:s.chip,children:[r.line_count," 行"]}),r.needs_review?e.jsxs("span",{className:`${s.chip} ${s.chipReview}`,children:["要確認 ",r.needs_review]}):null,r.session&&e.jsx("span",{className:`${s.chip} ${s.chipSession}`,children:r.session})]})]}),n.status==="loading"&&e.jsx("p",{className:s.muted,children:"読み込み中…"}),n.status==="error"&&e.jsxs("p",{className:s.error,children:["読み込みに失敗: ",n.error]}),n.status==="ready"&&n.data&&e.jsx("div",{className:s.lines,children:S(n.data.lines).map((d,i)=>e.jsx(T,{group:d},i))})]})}v.__docgenInfo={description:"",methods:[],displayName:"Transcript",props:{entry:{required:!0,tsType:{name:"union",raw:"ManifestEntry | null",elements:[{name:"ManifestEntry"},{name:"null"}]},description:"選択中エントリ（未選択は null）。"},state:{required:!0,tsType:{name:"TranscriptState"},description:"本文の取得状態。"}}};const u={path:"アイドルコミュ/篠澤広/親愛度/STEP4/第37話.json",segments:["アイドルコミュ","篠澤広","親愛度","STEP4","第37話"],session:"hiro_37",line_count:6,needs_review:1},Y={title:"本文/Transcript",component:v,parameters:{layout:"fullscreen"}},c={args:{entry:null,state:{status:"idle"}}},o={args:{entry:u,state:{status:"loading"}}},p={args:{entry:u,state:{status:"ready",data:{lines:[{index:1,type:"dialogue",text:"――放課後、保健室。"},{index:2,type:"dialogue",speaker:"広",text:"プロデューサー。"},{index:3,type:"dialogue",speaker:"広",text:"わたし、{一番星|プリマステラ}になる、よ。"},{index:4,type:"dialogue",speaker:"広",text:"ううん。《《トップアイドル》》になる。"},{index:5,type:"choice",text:"一緒に行きましょう"},{index:6,type:"dialogue",speaker:"プロデューサー",text:"こちらこそ。ありがとう、広さん。",needs_review:!0}]}}}},l={args:{entry:u,state:{status:"error",error:"本文取得失敗 (HTTP 404)"}}};var m,_,h;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    entry: null,
    state: {
      status: "idle"
    }
  }
}`,...(h=(_=c.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var x,j,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    entry,
    state: {
      status: "loading"
    }
  }
}`,...(b=(j=o.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var g,f,y;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(f=p.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var q,N,k;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    entry,
    state: {
      status: "error",
      error: "本文取得失敗 (HTTP 404)"
    }
  }
}`,...(k=(N=l.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};const Z=["未選択","読み込み中","表示","エラー"];export{Z as __namedExportsOrder,Y as default,l as エラー,c as 未選択,p as 表示,o as 読み込み中};
