if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let n={};const o=e=>i(e,f),t={module:{uri:f},exports:n,require:o};s[f]=Promise.all(c.map((e=>t[e]||o(e)))).then((e=>(r(...e),n)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/critical.min.css",revision:"1218391cf5fc18884e75032fe5c369f5"},{url:"css/landscape.min.css",revision:"638ca04fb6f6b949e120584910c384cf"},{url:"css/portrait.min.css",revision:"230df3772f7c36651b2841dc60d26f1b"},{url:"css/style.min.css",revision:"ae5e96f92d38ce77b6cb2472e0d24eac"},{url:"css/tablet.min.css",revision:"e5e1056412b41fc89439cd5197c2d546"},{url:"fonts/Roboto-Regular.woff2",revision:"2901c31e2127a41548292cb72d1dcbe0"},{url:"index.html",revision:"46411a6577a0958c8aad62c8180bf0be"},{url:"js/app.min.js",revision:"e1a8999f01b158f8fd3e5873b0f367e7"},{url:"img/icons/icons.svg",revision:"ca38c0e08d38fbbb09b0805e660d79db"},{url:"img/eu4fgssvf28.webp",revision:"7d26089716210a40135269294da6377e"},{url:"img/eu4fgssvf211.webp",revision:"0f754039102028568c8f18eaa8f2bee8"},{url:"img/loading.gif",revision:"e26f7abbeb79689fcf2fc9bb6627c811"}],{})}));
//# sourceMappingURL=sw.js.map
