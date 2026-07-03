import{j as t}from"./jsx-runtime-DFAAy_2V.js";import{c as s}from"./cn-2dOUpm6k.js";import{R as o}from"./RichText-6CbtKJUh.js";import{c as l}from"./createLucideIcon-xH8recUz.js";/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],d=l("info",c),p="_text_zf8lq_9",m="_end_zf8lq_8",_="_plain_zf8lq_38",f="_review_zf8lq_50",u="_mark_zf8lq_59",e={text:p,end:m,plain:_,review:f,mark:u},a="発話が間違っているかもしれません。";function x({line:n,plain:i,align:r="start"}){return t.jsxs("div",{className:s(e.text,i&&e.plain,r==="end"&&e.end,n.needs_review&&e.review),children:[t.jsx(o,{text:n.text}),n.needs_review&&t.jsx("span",{className:e.mark,tabIndex:0,"aria-label":a,title:a,children:t.jsx(d,{size:13,strokeWidth:2.5})})]})}x.__docgenInfo={description:`台詞本文 1 行（話者名はグループ先頭で SpeakerLabel が表示するのでここでは扱わない）。
要確認行も見た目は他の発話と同じにし、右端中央に控えめな「！」マークだけ添える
（このビューアは基本的に正しいとされる本文を見せるためのもので、要確認行だけを
強調してユーザーの注意を引くようなUXは意図的に避けている）。
吹き出しは文字数に応じた最大幅までしか広がらない（横に間延びしないように）。`,methods:[],displayName:"LineView",props:{line:{required:!0,tsType:{name:"Line"},description:""},plain:{required:!1,tsType:{name:"boolean"},description:"ナレーション（話者なし）など、吹き出し化したくない行で true にする。"},align:{required:!1,tsType:{name:"union",raw:'"start" | "end"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"end"'}]},description:"吹き出しを右寄せにする（プロデューサーの発話用）。",defaultValue:{value:'"start"',computed:!1}}}};export{x as L};
