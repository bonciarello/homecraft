import{a as q,f as Y}from"../chunks/DTSQhbWA.js";import{i as ye,w as ka,m as R,z as Ee,H as _a,v as ya,O as o,x as Ea,W as Ca,y as We,A as Ce,n as ue,ad as La,al as za,a3 as Xe,k as Z,ao as O,j as Me,ap as Ta,q as $a,aq as Sa,ar as Aa,ak as Re,as as Ma,at as Ia,au as Ra,U as Je,av as Ha,aw as Na,e as pa,h as da,ax as Le,ay as Ua,ai as Ba,o as Fa,g as Oa,af as Da,az as Qe,aA as ja,aB as qa,Q as Ga,aC as Ya,aD as Pa,aE as Va,aF as ua,aG as Ka,aH as Wa,aI as Xa,aJ as Ja,a as Qa,C as Za,p as er,aK as F,aL as ar,u as rr,t as ve,b as tr,s as h,d as f,aM as k,r as v,a4 as Ze,aN as ze}from"../chunks/B0y2ng_1.js";import{d as ir,a as re,s as V,e as lr}from"../chunks/B0YPJumb.js";import{b as sr,i as ea}from"../chunks/CZYi_4fc.js";function aa(e,a){return a}function nr(e,a,r){for(var s=[],l=a.length,i,n=a.length,t=0;t<l;t++){let x=a[t];da(x,()=>{if(i){if(i.pending.delete(x),i.done.add(x),i.pending.size===0){var T=e.outrogroups;Ie(e,Re(i.done)),T.delete(i),T.size===0&&(e.outrogroups=null)}}else n-=1},!1)}if(n===0){var p=s.length===0&&r!==null;if(p){var c=r,m=c.parentNode;Ba(m),m.append(c),e.items.clear()}Ie(e,a,!p)}else i={pending:new Set(a),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(i)}function Ie(e,a,r=!0){var s;if(e.pending.size>0){s=new Set;for(const n of e.pending.values())for(const t of n)s.add(e.items.get(t).e)}for(var l=0;l<a.length;l++){var i=a[l];if(s!=null&&s.has(i)){i.f|=O;const n=document.createDocumentFragment();Fa(i,n)}else Oa(a[l],r)}}var ra;function ta(e,a,r,s,l,i=null){var n=e,t=new Map;{var p=e;n=R?Ee(_a(p)):p.appendChild(ye())}R&&ya();var c=null,m=Sa(()=>{var w=r();return Aa(w)?w:w==null?[]:Re(w)}),x,T=new Map,$=!0;function d(w){(S.effect.f&Na)===0&&(S.pending.delete(w),S.fallback=c,or(S,x,n,a,s),c!==null&&(x.length===0?(c.f&O)===0?pa(c):(c.f^=O,le(c,null,n)):da(c,()=>{c=null})))}function N(w){S.pending.delete(w)}var W=ka(()=>{x=o(m);var w=x.length;let U=!1;if(R){var D=Ea(n)===Ca;D!==(w===0)&&(n=We(),Ee(n),Ce(!1),U=!0)}for(var L=new Set,A=Z,P=$a(),z=0;z<w;z+=1){R&&ue.nodeType===La&&ue.data===za&&(n=ue,U=!0,Ce(!1));var E=x[z],j=s(E,z),M=$?null:t.get(j);M?(M.v&&Xe(M.v,E),M.i&&Xe(M.i,z),P&&A.unskip_effect(M.e)):(M=cr(t,$?n:ra??(ra=ye()),E,j,z,l,a,r),$||(M.e.f|=O),t.set(j,M)),L.add(j)}if(w===0&&i&&!c&&($?c=Me(()=>i(n)):(c=Me(()=>i(ra??(ra=ye()))),c.f|=O)),w>L.size&&Ta(),R&&w>0&&Ee(We()),!$)if(T.set(A,L),P){for(const[se,ne]of t)L.has(se)||A.skip_effect(ne.e);A.oncommit(d),A.ondiscard(N)}else d(A);U&&Ce(!0),o(m)}),S={effect:W,items:t,pending:T,outrogroups:null,fallback:c};$=!1,R&&(n=ue)}function te(e){for(;e!==null&&(e.f&Ua)===0;)e=e.next;return e}function or(e,a,r,s,l){var z;var i=a.length,n=e.items,t=te(e.effect.first),p,c=null,m=[],x=[],T,$,d,N;for(N=0;N<i;N+=1){if(T=a[N],$=l(T,N),d=n.get($).e,e.outrogroups!==null)for(const E of e.outrogroups)E.pending.delete(d),E.done.delete(d);if((d.f&Le)!==0&&pa(d),(d.f&O)!==0)if(d.f^=O,d===t)le(d,null,r);else{var W=c?c.next:t;d===e.effect.last&&(e.effect.last=d.prev),d.prev&&(d.prev.next=d.next),d.next&&(d.next.prev=d.prev),G(e,c,d),G(e,d,W),le(d,W,r),c=d,m=[],x=[],t=te(c.next);continue}if(d!==t){if(p!==void 0&&p.has(d)){if(m.length<x.length){var S=x[0],w;c=S.prev;var U=m[0],D=m[m.length-1];for(w=0;w<m.length;w+=1)le(m[w],S,r);for(w=0;w<x.length;w+=1)p.delete(x[w]);G(e,U.prev,D.next),G(e,c,U),G(e,D,S),t=S,c=D,N-=1,m=[],x=[]}else p.delete(d),le(d,t,r),G(e,d.prev,d.next),G(e,d,c===null?e.effect.first:c.next),G(e,c,d),c=d;continue}for(m=[],x=[];t!==null&&t!==d;)(p??(p=new Set)).add(t),x.push(t),t=te(t.next);if(t===null)continue}(d.f&O)===0&&m.push(d),c=d,t=te(d.next)}if(e.outrogroups!==null){for(const E of e.outrogroups)E.pending.size===0&&(Ie(e,Re(E.done)),(z=e.outrogroups)==null||z.delete(E));e.outrogroups.size===0&&(e.outrogroups=null)}if(t!==null||p!==void 0){var L=[];if(p!==void 0)for(d of p)(d.f&Le)===0&&L.push(d);for(;t!==null;)(t.f&Le)===0&&t!==e.fallback&&L.push(t),t=te(t.next);var A=L.length;if(A>0){var P=i===0?r:null;nr(e,L,P)}}}function cr(e,a,r,s,l,i,n,t){var p=(n&Ma)!==0?(n&Ia)===0?Ra(r,!1,!1):Je(r):null,c=(n&Ha)!==0?Je(l):null;return{v:p,i:c,e:Me(()=>(i(a,p??r,c??l,t),()=>{e.delete(s)}))}}function le(e,a,r){if(e.nodes)for(var s=e.nodes.start,l=e.nodes.end,i=a&&(a.f&O)===0?a.nodes.start:r;s!==null;){var n=Da(s);if(i.before(s),s===l)return;s=n}}function G(e,a,r){a===null?e.effect.first=r:a.next=r,r===null?e.effect.last=a:r.prev=a}const ia=[...` 	
\r\f \v\uFEFF`];function pr(e,a,r){var s=e==null?"":""+e;if(r){for(var l of Object.keys(r))if(r[l])s=s?s+" "+l:l;else if(s.length)for(var i=l.length,n=0;(n=s.indexOf(l,n))>=0;){var t=n+i;(n===0||ia.includes(s[n-1]))&&(t===s.length||ia.includes(s[t]))?s=(n===0?"":s.substring(0,n))+s.substring(t+1):n=t}}return s===""?null:s}function la(e,a,r,s,l,i){var n=e[Qe];if(R||n!==r||n===void 0){var t=pr(r,s,i);(!R||t!==e.getAttribute("class"))&&(t==null?e.removeAttribute("class"):e.className=t),e[Qe]=r}else if(i&&l!==i)for(var p in i){var c=!!i[p];(l==null||c!==!!l[p])&&e.classList.toggle(p,c)}return i}const dr=Symbol("is custom element"),ur=Symbol("is html"),vr=ua?"link":"LINK",fr=ua?"progress":"PROGRESS";function K(e){if(R){var a=!1,r=()=>{if(!a){if(a=!0,e.hasAttribute("value")){var s=e.value;B(e,"value",null),e.value=s}if(e.hasAttribute("checked")){var l=e.checked;B(e,"checked",null),e.checked=l}}};e[qa]=r,Ga(r),Ya()}}function sa(e,a){var r=va(e);r.value===(r.value=a??void 0)||e.value===a&&(a!==0||e.nodeName!==fr)||(e.value=a??"")}function B(e,a,r,s){var l=va(e);R&&(l[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName===vr)||l[a]!==(l[a]=r)&&(a==="loading"&&(e[ja]=r),r==null?e.removeAttribute(a):typeof r!="string"&&hr(e).includes(a)?e[a]=r:e.setAttribute(a,r))}function va(e){var a;return e[a=Pa]??(e[a]={[dr]:e.nodeName.includes("-"),[ur]:e.namespaceURI===Va})}var na=new Map;function hr(e){var a=e.getAttribute("is")||e.nodeName,r=na.get(a);if(r)return r;na.set(a,r=[]);for(var s,l=e,i=Element.prototype;i!==l;){s=Wa(l);for(var n in s)s[n].set&&n!=="innerHTML"&&n!=="textContent"&&n!=="innerText"&&r.push(n);l=Ka(l)}return r}function ie(e,a,r=a){var s=new WeakSet;Xa(e,"input",async l=>{var i=l?e.defaultValue:e.value;if(i=Te(e)?$e(i):i,r(i),Z!==null&&s.add(Z),await Ja(),i!==(i=a())){var n=e.selectionStart,t=e.selectionEnd,p=e.value.length;if(e.value=i??"",t!==null){var c=e.value.length;n===t&&t===p&&c>p?(e.selectionStart=c,e.selectionEnd=c):(e.selectionStart=n,e.selectionEnd=Math.min(t,c))}}}),(R&&e.defaultValue!==e.value||Qa(a)==null&&e.value)&&(r(Te(e)?$e(e.value):e.value),Z!==null&&s.add(Z)),Za(()=>{var l=a();if(e===document.activeElement){var i=Z;if(s.has(i))return}Te(e)&&l===$e(e.value)||e.type==="date"&&!l&&!e.value||l!==e.value&&(e.value=l??"")})}function Te(e){var a=e.type;return a==="number"||a==="range"}function $e(e){return e===""?null:+e}const oa=[{id:"classic",name:"Classico",description:"Colonna centrale con avatar e link impilati. Il formato più popolare per pagine personali.",icon:"columns",preview:"single-column"},{id:"gallery",name:"Galleria",description:"Griglia a due colonne di card colorate. Perfetto per mostrare progetti o collezioni.",icon:"grid",preview:"two-column-grid"},{id:"sidebar",name:"Laterale",description:"Barra laterale con profilo e area link a destra. Ideale per chi ha molti contenuti.",icon:"sidebar",preview:"sidebar-main"},{id:"minimal",name:"Minimale",description:"Striscia orizzontale compatta. Massima densità in poco spazio, stile biglietto da visita.",icon:"rows",preview:"horizontal-strip"}];function gr(e,a,r,s,l,i,n){const t=a.filter(x=>x.title.trim()&&x.url.trim()),p=`
    --primary: ${r};
    --primary-hover: ${Ae(r,-15)};
    --primary-light: ${Ae(r,60,.15)};
    --secondary: ${s};
    --secondary-hover: ${Ae(s,-15)};
    --bg: #F5F3F0;
    --surface: #FFFFFF;
    --text: #1E1E24;
    --text-muted: #787480;
    --border: #E4E1E8;
    --radius: 12px;
    --shadow: 0 1px 3px rgba(30,30,36,0.08), 0 1px 2px rgba(30,30,36,0.06);
    --shadow-lg: 0 4px 16px rgba(30,30,36,0.1);
    --font-display: 'Outfit', system-ui, sans-serif;
    --font-body: 'Inter', system-ui, sans-serif;
  `,c=t.map((x,T)=>mr(e,x,T)).join(`
`);let m="";switch(e){case"classic":m=ca(i,n,c,t.length);break;case"gallery":m=xr(i,n,c,t.length);break;case"sidebar":m=br(i,n,c,t.length);break;case"minimal":m=wr(i,n,c,t.length);break;default:m=ca(i,n,c,t.length)}return`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${H(l||i||"La mia home page")}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@500;600;700&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root { ${p} }
    body {
      font-family: var(--font-body);
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 24px 16px 48px;
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }
    a { color: var(--primary); text-decoration: none; transition: color 0.2s; }
    a:hover { color: var(--primary-hover); }
    a:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; border-radius: 2px; }
    .container { width: 100%; max-width: 680px; }
    ${kr(e)}
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
    }
    @media (max-width: 480px) {
      body { padding: 16px 12px 32px; }
    }
  </style>
</head>
<body>
  <div class="container">
    ${m}
  </div>
</body>
</html>`}function H(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function mr(e,a,r){const s=H(a.title),l=H(a.url);switch(e){case"gallery":return`
      <a href="${l}" class="link-card" target="_blank" rel="noopener noreferrer">
        <span class="link-card-icon">${Se(r)}</span>
        <span class="link-card-title">${s}</span>
        <span class="link-card-arrow">→</span>
      </a>`;case"minimal":return`
      <a href="${l}" class="link-pill" target="_blank" rel="noopener noreferrer">
        <span class="link-pill-dot"></span>
        <span>${s}</span>
      </a>`;case"sidebar":return`
      <a href="${l}" class="link-row" target="_blank" rel="noopener noreferrer">
        <span class="link-row-icon">${Se(r)}</span>
        <div class="link-row-content">
          <span class="link-row-title">${s}</span>
          <span class="link-row-url">${l}</span>
        </div>
        <span class="link-row-arrow">→</span>
      </a>`;case"classic":default:return`
      <a href="${l}" class="link-btn" target="_blank" rel="noopener noreferrer">
        <span class="link-btn-icon">${Se(r)}</span>
        <span class="link-btn-label">${s}</span>
        <span class="link-btn-chevron">›</span>
      </a>`}}function Se(e){const a=["🏠","📝","📷","💼","🔗","⭐"];return a[e%a.length]}function ca(e,a,r,s){const l=H(e||"Il tuo nome"),i=H(a||"La tua bio qui");return`
    <header class="profile">
      <div class="avatar" aria-hidden="true">${(e||"?").charAt(0).toUpperCase()}</div>
      <h1>${l}</h1>
      ${i?`<p class="bio">${i}</p>`:""}
    </header>
    <nav class="links-stack" aria-label="Collegamenti">
      ${r||'<p class="empty-state">Nessun collegamento inserito</p>'}
    </nav>
    <footer class="page-footer">
      <p>Creato con HomeCraft</p>
    </footer>`}function xr(e,a,r,s){const l=H(e||"Il tuo nome"),i=H(a||"La tua bio qui");return`
    <header class="profile profile-compact">
      <div class="avatar avatar-sm" aria-hidden="true">${(e||"?").charAt(0).toUpperCase()}</div>
      <div>
        <h1>${l}</h1>
        ${i?`<p class="bio">${i}</p>`:""}
      </div>
    </header>
    <nav class="links-grid" aria-label="Collegamenti">
      ${r||'<p class="empty-state">Nessun collegamento inserito</p>'}
    </nav>
    <footer class="page-footer">
      <p>Creato con HomeCraft</p>
    </footer>`}function br(e,a,r,s){const l=H(e||"Il tuo nome"),i=H(a||"La tua bio qui");return`
    <div class="sidebar-layout">
      <aside class="sidebar-panel">
        <div class="avatar" aria-hidden="true">${(e||"?").charAt(0).toUpperCase()}</div>
        <h1>${l}</h1>
        ${i?`<p class="bio">${i}</p>`:""}
      </aside>
      <main class="sidebar-main">
        <nav class="links-rows" aria-label="Collegamenti">
          ${r||'<p class="empty-state">Nessun collegamento inserito</p>'}
        </nav>
        <footer class="page-footer">
          <p>Creato con HomeCraft</p>
        </footer>
      </main>
    </div>`}function wr(e,a,r,s){const l=H(e||"Il tuo nome"),i=H(a||"La tua bio qui");return`
    <header class="profile profile-inline">
      <div class="avatar avatar-xs" aria-hidden="true">${(e||"?").charAt(0).toUpperCase()}</div>
      <div>
        <h1>${l}</h1>
        ${i?`<span class="bio-inline"> · ${i}</span>`:""}
      </div>
    </header>
    <nav class="links-strip" aria-label="Collegamenti">
      ${r||'<p class="empty-state">Nessun collegamento inserito</p>'}
    </nav>
    <footer class="page-footer">
      <p>Creato con HomeCraft</p>
    </footer>`}function kr(e){const a=`
    .profile { text-align: center; margin-bottom: 32px; }
    .profile-compact { display: flex; align-items: center; gap: 16px; text-align: left; }
    .profile-inline { display: flex; align-items: baseline; gap: 12px; flex-wrap: wrap; }
    .avatar {
      width: 80px; height: 80px; border-radius: 50%;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      color: white; display: flex; align-items: center; justify-content: center;
      font-family: var(--font-display); font-size: 32px; font-weight: 700;
      margin: 0 auto 16px; box-shadow: var(--shadow-lg);
    }
    .avatar-sm { width: 56px; height: 56px; font-size: 24px; margin: 0; flex-shrink: 0; }
    .avatar-xs { width: 40px; height: 40px; font-size: 18px; margin: 0; flex-shrink: 0; border-radius: 10px; }
    h1 { font-family: var(--font-display); font-size: 28px; font-weight: 700; color: var(--text); line-height: 1.2; }
    .bio { color: var(--text-muted); margin-top: 8px; font-size: 15px; max-width: 400px; margin-left: auto; margin-right: auto; }
    .bio-inline { color: var(--text-muted); font-size: 15px; }
    .profile-compact .bio { margin: 4px 0 0 0; }
    .empty-state { color: var(--text-muted); font-style: italic; text-align: center; padding: 24px; }
    .page-footer { text-align: center; margin-top: 40px; padding-top: 16px; border-top: 1px solid var(--border); color: var(--text-muted); font-size: 13px; }
    .page-footer a { font-weight: 500; }
  `;switch(e){case"classic":return a+`
    .links-stack { display: flex; flex-direction: column; gap: 10px; }
    .link-btn {
      display: flex; align-items: center; gap: 12px; padding: 14px 18px;
      background: var(--surface); border: 1px solid var(--border);
      border-radius: var(--radius); box-shadow: var(--shadow);
      color: var(--text); font-weight: 500; font-size: 16px;
      transition: transform 0.15s, box-shadow 0.15s, border-color 0.15s;
    }
    .link-btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-lg); border-color: var(--primary-light); }
    .link-btn-icon { font-size: 20px; flex-shrink: 0; }
    .link-btn-label { flex: 1; }
    .link-btn-chevron { color: var(--text-muted); font-size: 20px; }
    @media (max-width: 480px) {
      .avatar { width: 64px; height: 64px; font-size: 26px; }
      h1 { font-size: 24px; }
      .link-btn { padding: 12px 14px; font-size: 15px; }
    }`;case"gallery":return a+`
    .links-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
    .link-card {
      display: flex; flex-direction: column; gap: 8px; padding: 20px;
      background: var(--surface); border: 1px solid var(--border);
      border-radius: var(--radius); box-shadow: var(--shadow);
      transition: transform 0.15s, box-shadow 0.15s;
      position: relative; overflow: hidden;
    }
    .link-card::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
      background: var(--primary);
    }
    .link-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-lg); }
    .link-card-icon { font-size: 28px; }
    .link-card-title { font-weight: 600; font-size: 15px; color: var(--text); }
    .link-card-arrow { position: absolute; top: 16px; right: 16px; color: var(--text-muted); font-size: 14px; }
    @media (max-width: 480px) {
      .links-grid { grid-template-columns: 1fr; }
      .profile-compact { flex-direction: column; text-align: center; }
      .profile-compact .bio { margin-left: auto; margin-right: auto; }
    }`;case"sidebar":return a+`
    .sidebar-layout { display: flex; gap: 24px; align-items: flex-start; }
    .sidebar-panel {
      width: 200px; flex-shrink: 0; text-align: center; position: sticky; top: 24px;
    }
    .sidebar-panel .avatar { margin-bottom: 12px; }
    .sidebar-panel h1 { font-size: 22px; }
    .sidebar-panel .bio { font-size: 14px; }
    .sidebar-main { flex: 1; min-width: 0; }
    .links-rows { display: flex; flex-direction: column; gap: 8px; }
    .link-row {
      display: flex; align-items: center; gap: 12px; padding: 12px 16px;
      background: var(--surface); border: 1px solid var(--border);
      border-radius: var(--radius); box-shadow: var(--shadow);
      transition: transform 0.15s, box-shadow 0.15s;
    }
    .link-row:hover { transform: translateX(2px); box-shadow: var(--shadow-lg); }
    .link-row-icon { font-size: 20px; flex-shrink: 0; }
    .link-row-content { flex: 1; min-width: 0; }
    .link-row-title { display: block; font-weight: 500; font-size: 15px; color: var(--text); }
    .link-row-url { display: block; font-size: 12px; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .link-row-arrow { color: var(--text-muted); flex-shrink: 0; }
    @media (max-width: 600px) {
      .sidebar-layout { flex-direction: column; }
      .sidebar-panel { width: 100%; position: static; display: flex; align-items: center; gap: 12px; text-align: left; }
      .sidebar-panel .avatar { width: 48px; height: 48px; font-size: 20px; margin: 0; }
    }`;case"minimal":return a+`
    .links-strip { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
    .link-pill {
      display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px;
      background: var(--surface); border: 1px solid var(--border);
      border-radius: 100px; font-size: 14px; font-weight: 500;
      color: var(--text); transition: transform 0.15s, border-color 0.15s, box-shadow 0.15s;
    }
    .link-pill:hover { transform: translateY(-1px); border-color: var(--primary); box-shadow: var(--shadow); }
    .link-pill-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--primary); flex-shrink: 0; }
    @media (max-width: 480px) {
      .profile-inline { flex-direction: column; align-items: center; text-align: center; }
      .link-pill { font-size: 13px; padding: 6px 12px; }
    }`;default:return a}}function Ae(e,a,r=1){let s,l,i;if(e.startsWith("#")){const t=e.slice(1);t.length===3?(s=parseInt(t[0]+t[0],16),l=parseInt(t[1]+t[1],16),i=parseInt(t[2]+t[2],16)):(s=parseInt(t.slice(0,2),16),l=parseInt(t.slice(2,4),16),i=parseInt(t.slice(4,6),16))}else return e;const n=t=>Math.max(0,Math.min(255,t+a));return r<1?`rgba(${n(s)}, ${n(l)}, ${n(i)}, ${r})`:`#${[n(s),n(l),n(i)].map(t=>t.toString(16).padStart(2,"0")).join("")}`}var _r=Y('<span class="lp lp-classic svelte-1uha8ag"></span>'),yr=Y('<span class="lp lp-gallery svelte-1uha8ag"></span>'),Er=Y('<span class="lp lp-sidebar svelte-1uha8ag"></span>'),Cr=Y('<span class="lp lp-minimal svelte-1uha8ag"></span>'),Lr=Y('<button role="radio"><span class="layout-preview svelte-1uha8ag" aria-hidden="true"><!></span> <span class="layout-name svelte-1uha8ag"> </span> <span class="layout-desc svelte-1uha8ag"> </span></button>'),zr=Y('<span class="field-error svelte-1uha8ag" role="alert"> </span>'),Tr=Y('<div class="link-row svelte-1uha8ag" role="listitem"><span class="link-index svelte-1uha8ag" aria-hidden="true"></span> <div class="link-fields svelte-1uha8ag"><div class="field field-compact svelte-1uha8ag"><label class="svelte-1uha8ag">Titolo</label> <input type="text" placeholder="Il mio sito" maxlength="40" class="svelte-1uha8ag"/></div> <div class="field field-compact field-url svelte-1uha8ag"><label class="svelte-1uha8ag">URL</label> <input type="url" placeholder="https://miosito.com"/> <!></div></div></div>'),$r=Y(`<div class="app svelte-1uha8ag"><header class="app-header svelte-1uha8ag"><div class="app-header-inner svelte-1uha8ag"><div class="app-logo svelte-1uha8ag"><span class="logo-icon svelte-1uha8ag" aria-hidden="true"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#5344DB"></rect><path d="M8 12h6v8H8zM14 22h10V10H14z" fill="white" opacity="0.95"></path><circle cx="11" cy="16" r="1.5" fill="#5344DB"></circle></svg></span> <h1 class="logo-text svelte-1uha8ag">HomeCraft</h1></div> <p class="app-tagline svelte-1uha8ag">Genera la tua home page personale in pochi click. Scegli un layout, aggiungi i tuoi link, personalizza i colori e scarica il codice pronto da pubblicare.</p></div></header> <main class="app-main svelte-1uha8ag"><section class="panel panel-controls svelte-1uha8ag" aria-label="Pannello di controllo"><fieldset class="control-group svelte-1uha8ag"><legend class="control-label svelte-1uha8ag"><span class="label-icon svelte-1uha8ag" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="3" x2="9" y2="21"></line></svg></span> Scegli il layout</legend> <div class="layout-grid svelte-1uha8ag" role="radiogroup" aria-label="Seleziona un layout"></div></fieldset> <fieldset class="control-group svelte-1uha8ag"><legend class="control-label svelte-1uha8ag"><span class="label-icon svelte-1uha8ag" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span> Informazioni profilo</legend> <div class="field-row svelte-1uha8ag"><div class="field svelte-1uha8ag"><label for="userName" class="svelte-1uha8ag">Il tuo nome</label> <input id="userName" type="text" placeholder="Mario Rossi" maxlength="60" class="svelte-1uha8ag"/></div> <div class="field svelte-1uha8ag"><label for="pageTitle" class="svelte-1uha8ag">Titolo pagina (opzionale)</label> <input id="pageTitle" type="text" placeholder="La mia home page" maxlength="80" class="svelte-1uha8ag"/></div></div> <div class="field svelte-1uha8ag"><label for="userBio" class="svelte-1uha8ag">Bio breve</label> <input id="userBio" type="text" placeholder="Designer, sviluppatore, creativo…" maxlength="120" class="svelte-1uha8ag"/></div></fieldset> <fieldset class="control-group svelte-1uha8ag"><legend class="control-label svelte-1uha8ag"><span class="label-icon svelte-1uha8ag" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></span> Collegamenti <span class="label-badge svelte-1uha8ag"> </span></legend> <div class="links-editor svelte-1uha8ag" role="list" aria-label="Lista dei collegamenti"></div></fieldset> <fieldset class="control-group svelte-1uha8ag"><legend class="control-label svelte-1uha8ag"><span class="label-icon svelte-1uha8ag" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a10 10 0 0 1 0 20"></path><path d="M2 12h20"></path></svg></span> Personalizza colori</legend> <div class="color-pickers svelte-1uha8ag"><div class="color-field svelte-1uha8ag"><label for="primaryColor" class="svelte-1uha8ag">Colore primario</label> <div class="color-input-wrap svelte-1uha8ag"><input id="primaryColor" type="color" aria-label="Seleziona il colore primario" class="svelte-1uha8ag"/> <span class="color-hex svelte-1uha8ag"> </span></div></div> <div class="color-field svelte-1uha8ag"><label for="secondaryColor" class="svelte-1uha8ag">Colore secondario</label> <div class="color-input-wrap svelte-1uha8ag"><input id="secondaryColor" type="color" aria-label="Seleziona il colore secondario" class="svelte-1uha8ag"/> <span class="color-hex svelte-1uha8ag"> </span></div></div></div></fieldset> <div class="actions svelte-1uha8ag"><button class="btn btn-primary svelte-1uha8ag"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> Scarica HTML</button> <button class="btn btn-ghost svelte-1uha8ag"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg> Ripristina</button></div></section> <section class="panel panel-preview svelte-1uha8ag" aria-label="Anteprima live"><div class="preview-header svelte-1uha8ag"><h2 class="preview-title svelte-1uha8ag"><span class="label-icon svelte-1uha8ag" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></span> Anteprima live</h2> <span class="preview-badge svelte-1uha8ag"> </span></div> <div class="preview-frame svelte-1uha8ag"><iframe title="Anteprima della home page generata" sandbox="allow-same-origin" class="preview-iframe svelte-1uha8ag" loading="lazy"></iframe></div> <p class="preview-hint svelte-1uha8ag">L'anteprima mostra esattamente come apparirà la tua pagina una volta pubblicata.
        I link sono cliccabili per testarli.</p></section></main> <footer class="app-footer svelte-1uha8ag"><p>HomeCraft — generatore gratuito di home page personali. Nessun dato viene salvato sui nostri server.</p></footer></div>`);function Rr(e,a){er(a,!0);let r=F("classic"),s=F("#5344DB"),l=F("#FF6B35"),i=F(""),n=F(""),t=F(""),p=F(ar(Array.from({length:6},()=>({title:"",url:"",urlError:""})))),c=F(null),m=F(!1);const x=ze(()=>gr(o(r),o(p),o(s),o(l),o(t),o(i),o(n)));rr(()=>{const u=o(x);if(o(c)){const g=new Blob([u],{type:"text/html;charset=utf-8"}),b=URL.createObjectURL(g);o(c).src=b;const _=o(c).dataset.prevUrl;_&&URL.revokeObjectURL(_),o(c).dataset.prevUrl=b,k(m,!0)}});function T(u){k(r,u,!0)}function $(u,g,b){o(p)[u][g]=b,g==="url"&&(o(p)[u].urlError=""),k(p,[...o(p)],!0)}function d(u){const g=o(p)[u].url.trim();if(!g){o(p)[u].urlError="",k(p,[...o(p)],!0);return}try{const b=new URL(g);["http:","https:"].includes(b.protocol)?o(p)[u].urlError="":o(p)[u].urlError="Inserisci un URL che inizia con http:// o https://"}catch{o(p)[u].urlError="URL non valido. Esempio: https://miosito.com"}k(p,[...o(p)],!0)}function N(){const u=o(x),g=new Blob([u],{type:"text/html;charset=utf-8"}),b=URL.createObjectURL(g),_=document.createElement("a");_.href=b,_.download="home-page.html",document.body.appendChild(_),_.click(),document.body.removeChild(_),URL.revokeObjectURL(b)}function W(){k(r,"classic"),k(s,"#5344DB"),k(l,"#FF6B35"),k(i,""),k(n,""),k(t,""),k(p,Array.from({length:6},()=>({title:"",url:"",urlError:""})),!0)}const S=ze(()=>oa.find(u=>u.id===o(r))),w=ze(()=>o(p).filter(u=>u.title.trim()||u.url.trim()).length);var U=$r(),D=h(f(U),2),L=f(D),A=f(L),P=h(f(A),2);ta(P,21,()=>oa,aa,(u,g)=>{var b=Lr();let _;var X=f(b),oe=f(X);{var ee=C=>{var y=_r();q(C,y)},ce=C=>{var y=yr();q(C,y)},J=C=>{var y=Er();q(C,y)},pe=C=>{var y=Cr();q(C,y)};ea(oe,C=>{o(g).preview==="single-column"?C(ee):o(g).preview==="two-column-grid"?C(ce,1):o(g).preview==="sidebar-main"?C(J,2):o(g).preview==="horizontal-strip"&&C(pe,3)})}v(X);var Q=h(X,2),I=f(Q,!0);v(Q);var ae=h(Q,2),_e=f(ae,!0);v(ae),v(b),ve(()=>{_=la(b,1,"layout-card svelte-1uha8ag",null,_,{active:o(r)===o(g).id}),B(b,"aria-checked",o(r)===o(g).id),V(I,o(g).name),V(_e,o(g).description)}),re("click",b,()=>T(o(g).id)),q(u,b)}),v(P),v(A);var z=h(A,2),E=h(f(z),2),j=f(E),M=h(f(j),2);K(M),v(j);var se=h(j,2),ne=h(f(se),2);K(ne),v(se),v(E);var He=h(E,2),Ne=h(f(He),2);K(Ne),v(He),v(z);var fe=h(z,2),he=f(fe),Ue=h(f(he),2),fa=f(Ue);v(Ue),v(he);var Be=h(he,2);ta(Be,21,()=>o(p),aa,(u,g,b)=>{var _=Tr(),X=f(_);X.textContent=b+1;var oe=h(X,2),ee=f(oe),ce=f(ee);B(ce,"for",`link-title-${b}`);var J=h(ce,2);K(J),B(J,"id",`link-title-${b}`),v(ee);var pe=h(ee,2),Q=f(pe);B(Q,"for",`link-url-${b}`);var I=h(Q,2);K(I),B(I,"id",`link-url-${b}`);let ae;var _e=h(I,2);{var C=y=>{var de=zr();B(de,"id",`link-error-${b}`);var wa=f(de,!0);v(de),ve(()=>V(wa,o(g).urlError)),q(y,de)};ea(_e,y=>{o(g).urlError&&y(C)})}v(pe),v(oe),v(_),ve(()=>{sa(J,o(g).title),sa(I,o(g).url),B(I,"aria-describedby",o(g).urlError?"link-error-{i}":void 0),B(I,"aria-invalid",o(g).urlError?"true":void 0),ae=la(I,1,"svelte-1uha8ag",null,ae,{"has-error":o(g).urlError})}),re("input",J,y=>$(b,"title",y.target.value)),re("input",I,y=>$(b,"url",y.target.value)),lr("blur",I,()=>d(b)),q(u,_)}),v(Be),v(fe);var ge=h(fe,2),Fe=h(f(ge),2),me=f(Fe),Oe=h(f(me),2),xe=f(Oe);K(xe);var De=h(xe,2),ha=f(De,!0);v(De),v(Oe),v(me);var je=h(me,2),qe=h(f(je),2),be=f(qe);K(be);var Ge=h(be,2),ga=f(Ge,!0);v(Ge),v(qe),v(je),v(Fe),v(ge);var Ye=h(ge,2),we=f(Ye),ma=h(we,2);v(Ye),v(L);var Pe=h(L,2),ke=f(Pe),Ve=h(f(ke),2),xa=f(Ve,!0);v(Ve),v(ke);var Ke=h(ke,2),ba=f(Ke);sr(ba,u=>k(c,u),()=>o(c)),v(Ke),Ze(2),v(Pe),v(D),Ze(2),v(U),ve(()=>{var u;V(fa,`${o(w)??""}/6`),V(ha,o(s)),V(ga,o(l)),we.disabled=!o(m),V(xa,((u=o(S))==null?void 0:u.name)||"Classico")}),ie(M,()=>o(i),u=>k(i,u)),ie(ne,()=>o(t),u=>k(t,u)),ie(Ne,()=>o(n),u=>k(n,u)),ie(xe,()=>o(s),u=>k(s,u)),ie(be,()=>o(l),u=>k(l,u)),re("click",we,N),re("click",ma,W),q(e,U),tr()}ir(["click","input"]);export{Rr as component};
