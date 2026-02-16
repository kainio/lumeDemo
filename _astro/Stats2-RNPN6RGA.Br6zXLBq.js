import{e as r,g as a,j as e,S as o,f as l,G as x}from"./registries-WDM4NXTZ.CcGqyzVG.js";import{U as d}from"./users.CJ8_wAX7.js";import"./index.DQDNfAS8.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]],y=r("life-buoy",m);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],g=r("server",p);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],u=r("trending-up",h);var N=({data:t})=>{const c=a(t.type,t.content),i=s=>{switch(s?.toLowerCase()){case"users":return e.jsx(d,{className:"w-8 h-8"});case"server":return e.jsx(g,{className:"w-8 h-8"});case"globe":return e.jsx(x,{className:"w-8 h-8"});case"life-buoy":return e.jsx(y,{className:"w-8 h-8"});default:return e.jsx(u,{className:"w-8 h-8"})}};return e.jsxs(o,{id:t.id,design:t.design,children:[e.jsxs("div",{className:"flex flex-col items-center text-center max-w-3xl mx-auto mb-12 md:mb-20",children:[e.jsx(l,{design:t.design,className:"mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]",children:c.heading}),e.jsx("p",{className:"md:text-md text-foreground opacity-70 dark:opacity-80",children:c.description})]}),e.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 text-center",children:c.items?.map((s,n)=>e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"mb-4 p-3 bg-primary/10 text-primary rounded-full",children:i(s.avatar_or_icon)}),e.jsx("p",{className:"text-4xl font-bold md:text-5xl mb-2",children:s.title}),e.jsx("p",{className:"text-sm md:text-base text-foreground opacity-70 dark:opacity-80 font-medium",children:s.description})]},n))})]})};export{N as Stats2};
