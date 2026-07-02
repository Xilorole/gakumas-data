import{j as a}from"./jsx-runtime-DFAAy_2V.js";import{c as L}from"./cn-2dOUpm6k.js";import{R as g}from"./RichText-6CbtKJUh.js";import{r as s}from"./index-Bc2G9s8g.js";/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=(...e)=>e.filter((t,r,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===r).join(" ").trim();/**
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
 */const A=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},E=s.createContext({}),I=()=>s.useContext(E),N=s.forwardRef(({color:e,size:t,strokeWidth:r,absoluteStrokeWidth:o,className:c="",children:n,iconNode:h,...p},w)=>{const{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:_=!1,color:k="currentColor",className:C=""}=I()??{},y=o??_?Number(r??u)*24/Number(t??l):r??u;return s.createElement("svg",{ref:w,...d,width:t??l??d.width,height:t??l??d.height,stroke:e??k,strokeWidth:y,className:f("lucide",C,c),...!n&&!A(p)&&{"aria-hidden":"true"},...p},[...h.map(([b,v])=>s.createElement(b,v)),...Array.isArray(n)?n:[n]])});/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=(e,t)=>{const r=s.forwardRef(({className:o,...c},n)=>s.createElement(N,{ref:n,iconNode:t,className:f(`lucide-${W(m(e))}`,`lucide-${e}`,o),...c}));return r.displayName=m(e),r};/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],T=R("info",S),$="_text_13f00_2",U="_plain_13f00_20",V="_review_13f00_30",q="_mark_13f00_39",i={text:$,plain:U,review:V,mark:q},x="発話が間違っているかもしれません。";function z({line:e,plain:t}){return a.jsxs("div",{className:L(i.text,t&&i.plain,e.needs_review&&i.review),children:[a.jsx(g,{text:e.text}),e.needs_review&&a.jsx("span",{className:i.mark,tabIndex:0,"aria-label":x,title:x,children:a.jsx(T,{size:13,strokeWidth:2.5})})]})}z.__docgenInfo={description:`台詞本文 1 行（話者名はグループ先頭で SpeakerLabel が表示するのでここでは扱わない）。
要確認行も見た目は他の発話と同じにし、右端中央に控えめな「！」マークだけ添える
（このビューアは基本的に正しいとされる本文を見せるためのもので、要確認行だけを
強調してユーザーの注意を引くようなUXは意図的に避けている）。`,methods:[],displayName:"LineView",props:{line:{required:!0,tsType:{name:"Line"},description:""},plain:{required:!1,tsType:{name:"boolean"},description:"ナレーション（話者なし）など、吹き出し化したくない行で true にする。"}}};export{z as L};
