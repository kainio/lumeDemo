import { f as createComponent, k as renderHead, r as renderTemplate } from '../chunks/astro/server_A5IbpFaS.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><title>404 - Page Not Found</title><meta name="viewport" content="width=device-width">${renderHead()}</head> <body className="flex items-center justify-center h-screen bg-gray-100 text-gray-800"> <div className="text-center"> <h1 className="text-4xl font-bold mb-4">404</h1> <p className="mb-4">Page not found</p> <a href="/" className="text-blue-500 hover:underline">Go Home</a> </div> </body></html>`;
}, "C:/Users/HP/Desktop/lumegenbuilderv0.6.4.2/apps/site/src/pages/404.astro", void 0);

const $$file = "C:/Users/HP/Desktop/lumegenbuilderv0.6.4.2/apps/site/src/pages/404.astro";
const $$url = "/lumeDemo/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
