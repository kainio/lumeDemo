import{g as l,j as e,S as n,f as r,R as o,r as c}from"./registries-WDM4NXTZ.CcGqyzVG.js";import"./index.DQDNfAS8.js";var p=({data:s})=>{const a=l(s.type,s.content);return e.jsxs(n,{id:s.id,design:s.design,className:"overflow-hidden py-12",children:[e.jsx("div",{className:"mb-8 text-center px-4",children:e.jsx(r,{design:s.design,className:"text-2xl font-bold",children:a.heading})}),e.jsx("div",{className:"relative w-full",children:e.jsx("div",{className:"flex gap-4 animate-scroll whitespace-nowrap hover:pause-animation",children:[...a.items||[],...a.items||[]].map((t,i)=>e.jsxs("div",{className:"inline-block w-[300px] md:w-[400px] aspect-[16/9] flex-shrink-0 rounded-lg overflow-hidden relative group",children:[e.jsx(o,{src:t.image||c(`gallery-${i}`,600,400),alt:t.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"}),e.jsx("div",{className:"absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",children:e.jsx("span",{className:"text-white font-semibold text-lg",children:t.title})})]},i))})}),e.jsx("style",{children:`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }
                .hover\\:pause-animation:hover {
                    animation-play-state: paused;
                }
            `})]})};export{p as Gallery7};
