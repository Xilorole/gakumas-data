import{j as i}from"./jsx-runtime-DFAAy_2V.js";import{c as g}from"./cn-2dOUpm6k.js";import{R as L}from"./RichText-6CbtKJUh.js";import{r as n}from"./index-Bc2G9s8g.js";/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=(...e)=>e.filter((t,r,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,o)=>o?o.toUpperCase():r.toLowerCase());/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=e=>{const t=j(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var d={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},E=n.createContext({}),I=()=>n.useContext(E),N=n.forwardRef(({color:e,size:t,strokeWidth:r,absoluteStrokeWidth:o,className:c="",children:s,iconNode:f,...p},_)=>{const{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:w=!1,color:k="currentColor",className:C=""}=I()??{},v=o??w?Number(r??u)*24/Number(t??l):r??u;return n.createElement("svg",{ref:_,...d,width:t??l??d.width,height:t??l??d.height,stroke:e??k,strokeWidth:v,className:h("lucide",C,c),...!s&&!A(p)&&{"aria-hidden":"true"},...p},[...f.map(([y,b])=>n.createElement(y,b)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=(e,t)=>{const r=n.forwardRef(({className:o,...c},s)=>n.createElement(N,{ref:s,iconNode:t,className:h(`lucide-${W(m(e))}`,`lucide-${e}`,o),...c}));return r.displayName=m(e),r};/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],T=R("info",S),V="_text_1perd_9",$="_end_1perd_8",q="_plain_1perd_35",U="_review_1perd_47",z="_mark_1perd_56",a={text:V,end:$,plain:q,review:U,mark:z},x="発話が間違っているかもしれません。";function B({line:e,plain:t,align:r="start"}){return i.jsxs("div",{className:g(a.text,t&&a.plain,r==="end"&&a.end,e.needs_review&&a.review),children:[i.jsx(L,{text:e.text}),e.needs_review&&i.jsx("span",{className:a.mark,tabIndex:0,"aria-label":x,title:x,children:i.jsx(T,{size:13,strokeWidth:2.5})})]})}B.__docgenInfo={description:`台詞本文 1 行（話者名はグループ先頭で SpeakerLabel が表示するのでここでは扱わない）。
要確認行も見た目は他の発話と同じにし、右端中央に控えめな「！」マークだけ添える
（このビューアは基本的に正しいとされる本文を見せるためのもので、要確認行だけを
強調してユーザーの注意を引くようなUXは意図的に避けている）。
吹き出しは文字数に応じた最大幅までしか広がらない（横に間延びしないように）。`,methods:[],displayName:"LineView",props:{line:{required:!0,tsType:{name:"Line"},description:""},plain:{required:!1,tsType:{name:"boolean"},description:"ナレーション（話者なし）など、吹き出し化したくない行で true にする。"},align:{required:!1,tsType:{name:"union",raw:'"start" | "end"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"end"'}]},description:"吹き出しを右寄せにする（プロデューサーの発話用）。",defaultValue:{value:'"start"',computed:!1}}}};export{B as L,R as c};
