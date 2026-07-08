import { a5 as ensure_array_like, a6 as attr_class, a7 as attr, e as escape_html, a3 as derived, a8 as stringify } from "../../chunks/index.js";
const templates = [
  {
    id: "classic",
    name: "Classico",
    description: "Colonna centrale con avatar e link impilati. Il formato più popolare per pagine personali.",
    icon: "columns",
    preview: "single-column"
  },
  {
    id: "gallery",
    name: "Galleria",
    description: "Griglia a due colonne di card colorate. Perfetto per mostrare progetti o collezioni.",
    icon: "grid",
    preview: "two-column-grid"
  },
  {
    id: "sidebar",
    name: "Laterale",
    description: "Barra laterale con profilo e area link a destra. Ideale per chi ha molti contenuti.",
    icon: "sidebar",
    preview: "sidebar-main"
  },
  {
    id: "minimal",
    name: "Minimale",
    description: "Striscia orizzontale compatta. Massima densità in poco spazio, stile biglietto da visita.",
    icon: "rows",
    preview: "horizontal-strip"
  }
];
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let templateId = "classic";
    let primaryColor = "#5344DB";
    let secondaryColor = "#FF6B35";
    let userName = "";
    let userBio = "";
    let pageTitle = "";
    let links = Array.from({ length: 6 }, () => ({ title: "", url: "", urlError: "" }));
    const activeTemplate = derived(() => templates.find((t) => t.id === templateId));
    const filledLinks = derived(() => links.filter((l) => l.title.trim() || l.url.trim()).length);
    $$renderer2.push(`<div class="app svelte-1uha8ag"><header class="app-header svelte-1uha8ag"><div class="app-header-inner svelte-1uha8ag"><div class="app-logo svelte-1uha8ag"><span class="logo-icon svelte-1uha8ag" aria-hidden="true"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#5344DB"></rect><path d="M8 12h6v8H8zM14 22h10V10H14z" fill="white" opacity="0.95"></path><circle cx="11" cy="16" r="1.5" fill="#5344DB"></circle></svg></span> <h1 class="logo-text svelte-1uha8ag">HomeCraft</h1></div> <p class="app-tagline svelte-1uha8ag">Genera la tua home page personale in pochi click. Scegli un layout, aggiungi i tuoi link, personalizza i colori e scarica il codice pronto da pubblicare.</p></div></header> <main class="app-main svelte-1uha8ag"><section class="panel panel-controls svelte-1uha8ag" aria-label="Pannello di controllo"><fieldset class="control-group svelte-1uha8ag"><legend class="control-label svelte-1uha8ag"><span class="label-icon svelte-1uha8ag" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="3" x2="9" y2="21"></line></svg></span> Scegli il layout</legend> <div class="layout-grid svelte-1uha8ag" role="radiogroup" aria-label="Seleziona un layout"><!--[-->`);
    const each_array = ensure_array_like(templates);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let tmpl = each_array[$$index];
      $$renderer2.push(`<button${attr_class("layout-card svelte-1uha8ag", void 0, { "active": templateId === tmpl.id })} role="radio"${attr("aria-checked", templateId === tmpl.id)}><span class="layout-preview svelte-1uha8ag" aria-hidden="true">`);
      if (tmpl.preview === "single-column") {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<span class="lp lp-classic svelte-1uha8ag"></span>`);
      } else if (tmpl.preview === "two-column-grid") {
        $$renderer2.push("<!--[1-->");
        $$renderer2.push(`<span class="lp lp-gallery svelte-1uha8ag"></span>`);
      } else if (tmpl.preview === "sidebar-main") {
        $$renderer2.push("<!--[2-->");
        $$renderer2.push(`<span class="lp lp-sidebar svelte-1uha8ag"></span>`);
      } else if (tmpl.preview === "horizontal-strip") {
        $$renderer2.push("<!--[3-->");
        $$renderer2.push(`<span class="lp lp-minimal svelte-1uha8ag"></span>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></span> <span class="layout-name svelte-1uha8ag">${escape_html(tmpl.name)}</span> <span class="layout-desc svelte-1uha8ag">${escape_html(tmpl.description)}</span></button>`);
    }
    $$renderer2.push(`<!--]--></div></fieldset> <fieldset class="control-group svelte-1uha8ag"><legend class="control-label svelte-1uha8ag"><span class="label-icon svelte-1uha8ag" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span> Informazioni profilo</legend> <div class="field-row svelte-1uha8ag"><div class="field svelte-1uha8ag"><label for="userName" class="svelte-1uha8ag">Il tuo nome</label> <input id="userName" type="text" placeholder="Mario Rossi"${attr("value", userName)} maxlength="60" class="svelte-1uha8ag"/></div> <div class="field svelte-1uha8ag"><label for="pageTitle" class="svelte-1uha8ag">Titolo pagina (opzionale)</label> <input id="pageTitle" type="text" placeholder="La mia home page"${attr("value", pageTitle)} maxlength="80" class="svelte-1uha8ag"/></div></div> <div class="field svelte-1uha8ag"><label for="userBio" class="svelte-1uha8ag">Bio breve</label> <input id="userBio" type="text" placeholder="Designer, sviluppatore, creativo…"${attr("value", userBio)} maxlength="120" class="svelte-1uha8ag"/></div></fieldset> <fieldset class="control-group svelte-1uha8ag"><legend class="control-label svelte-1uha8ag"><span class="label-icon svelte-1uha8ag" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></span> Collegamenti <span class="label-badge svelte-1uha8ag">${escape_html(filledLinks())}/6</span></legend> <div class="links-editor svelte-1uha8ag" role="list" aria-label="Lista dei collegamenti"><!--[-->`);
    const each_array_1 = ensure_array_like(links);
    for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
      let link = each_array_1[i];
      $$renderer2.push(`<div class="link-row svelte-1uha8ag" role="listitem"><span class="link-index svelte-1uha8ag" aria-hidden="true">${escape_html(i + 1)}</span> <div class="link-fields svelte-1uha8ag"><div class="field field-compact svelte-1uha8ag"><label${attr("for", `link-title-${stringify(i)}`)} class="svelte-1uha8ag">Titolo</label> <input${attr("id", `link-title-${stringify(i)}`)} type="text" placeholder="Il mio sito"${attr("value", link.title)} maxlength="40" class="svelte-1uha8ag"/></div> <div class="field field-compact field-url svelte-1uha8ag"><label${attr("for", `link-url-${stringify(i)}`)} class="svelte-1uha8ag">URL</label> <input${attr("id", `link-url-${stringify(i)}`)} type="url" placeholder="https://miosito.com"${attr("value", link.url)}${attr("aria-describedby", link.urlError ? "link-error-{i}" : void 0)}${attr("aria-invalid", link.urlError ? "true" : void 0)}${attr_class("svelte-1uha8ag", void 0, { "has-error": link.urlError })}/> `);
      if (link.urlError) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<span${attr("id", `link-error-${stringify(i)}`)} class="field-error svelte-1uha8ag" role="alert">${escape_html(link.urlError)}</span>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></fieldset> <fieldset class="control-group svelte-1uha8ag"><legend class="control-label svelte-1uha8ag"><span class="label-icon svelte-1uha8ag" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a10 10 0 0 1 0 20"></path><path d="M2 12h20"></path></svg></span> Personalizza colori</legend> <div class="color-pickers svelte-1uha8ag"><div class="color-field svelte-1uha8ag"><label for="primaryColor" class="svelte-1uha8ag">Colore primario</label> <div class="color-input-wrap svelte-1uha8ag"><input id="primaryColor" type="color"${attr("value", primaryColor)} aria-label="Seleziona il colore primario" class="svelte-1uha8ag"/> <span class="color-hex svelte-1uha8ag">${escape_html(primaryColor)}</span></div></div> <div class="color-field svelte-1uha8ag"><label for="secondaryColor" class="svelte-1uha8ag">Colore secondario</label> <div class="color-input-wrap svelte-1uha8ag"><input id="secondaryColor" type="color"${attr("value", secondaryColor)} aria-label="Seleziona il colore secondario" class="svelte-1uha8ag"/> <span class="color-hex svelte-1uha8ag">${escape_html(secondaryColor)}</span></div></div></div></fieldset> <div class="actions svelte-1uha8ag"><button class="btn btn-primary svelte-1uha8ag"${attr("disabled", true, true)}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> Scarica HTML</button> <button class="btn btn-ghost svelte-1uha8ag"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg> Ripristina</button></div></section> <section class="panel panel-preview svelte-1uha8ag" aria-label="Anteprima live"><div class="preview-header svelte-1uha8ag"><h2 class="preview-title svelte-1uha8ag"><span class="label-icon svelte-1uha8ag" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></span> Anteprima live</h2> <span class="preview-badge svelte-1uha8ag">${escape_html(activeTemplate()?.name || "Classico")}</span></div> <div class="preview-frame svelte-1uha8ag"><iframe title="Anteprima della home page generata" sandbox="allow-same-origin" class="preview-iframe svelte-1uha8ag" loading="lazy"></iframe></div> <p class="preview-hint svelte-1uha8ag">L'anteprima mostra esattamente come apparirà la tua pagina una volta pubblicata.
        I link sono cliccabili per testarli.</p></section></main> <footer class="app-footer svelte-1uha8ag"><p>HomeCraft — generatore gratuito di home page personali. Nessun dato viene salvato sui nostri server.</p></footer></div>`);
  });
}
export {
  _page as default
};
