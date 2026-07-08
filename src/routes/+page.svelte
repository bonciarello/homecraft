<script>
  import { templates, generateHTML } from '$lib/generator.js';

  /** @type {string} */
  let templateId = $state('classic');
  /** @type {string} */
  let primaryColor = $state('#5344DB');
  /** @type {string} */
  let secondaryColor = $state('#FF6B35');
  /** @type {string} */
  let userName = $state('');
  /** @type {string} */
  let userBio = $state('');
  /** @type {string} */
  let pageTitle = $state('');

  /** @type {Array<{title: string, url: string, urlError: string}>} */
  let links = $state(Array.from({length: 6}, () => ({title: '', url: '', urlError: ''})));

  let iframeEl = $state(null);
  let downloadReady = $state(false);

  const previewHTML = $derived(
    generateHTML(templateId, links, primaryColor, secondaryColor, pageTitle, userName, userBio)
  );

  $effect(() => {
    const html = previewHTML;
    if (iframeEl) {
      const blob = new Blob([html], {type: 'text/html;charset=utf-8'});
      const url = URL.createObjectURL(blob);
      iframeEl.src = url;

      const prevUrl = iframeEl.dataset.prevUrl;
      if (prevUrl) URL.revokeObjectURL(prevUrl);
      iframeEl.dataset.prevUrl = url;

      downloadReady = true;
    }
  });

  function handleTemplateSelect(id) {
    templateId = id;
  }

  function updateLink(index, field, value) {
    links[index][field] = value;
    if (field === 'url') {
      links[index].urlError = '';
    }
    links = [...links];
  }

  function validateURL(index) {
    const url = links[index].url.trim();
    if (!url) {
      links[index].urlError = '';
      links = [...links];
      return;
    }
    try {
      const parsed = new URL(url);
      if (!['http:', 'https:'].includes(parsed.protocol)) {
        links[index].urlError = 'Inserisci un URL che inizia con http:// o https://';
      } else {
        links[index].urlError = '';
      }
    } catch {
      links[index].urlError = 'URL non valido. Esempio: https://miosito.com';
    }
    links = [...links];
  }

  function handleDownload() {
    const html = previewHTML;
    const blob = new Blob([html], {type: 'text/html;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'home-page.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function handleReset() {
    templateId = 'classic';
    primaryColor = '#5344DB';
    secondaryColor = '#FF6B35';
    userName = '';
    userBio = '';
    pageTitle = '';
    links = Array.from({length: 6}, () => ({title: '', url: '', urlError: ''}));
  }

  const activeTemplate = $derived(templates.find(t => t.id === templateId));
  const filledLinks = $derived(links.filter(l => l.title.trim() || l.url.trim()).length);
</script>

<div class="app">
  <header class="app-header">
    <div class="app-header-inner">
      <div class="app-logo">
        <span class="logo-icon" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="#5344DB"/>
            <path d="M8 12h6v8H8zM14 22h10V10H14z" fill="white" opacity="0.95"/>
            <circle cx="11" cy="16" r="1.5" fill="#5344DB"/>
          </svg>
        </span>
        <h1 class="logo-text">HomeCraft</h1>
      </div>
      <p class="app-tagline">Genera la tua home page personale in pochi click. Scegli un layout, aggiungi i tuoi link, personalizza i colori e scarica il codice pronto da pubblicare.</p>
    </div>
  </header>

  <main class="app-main">
    <!-- Panel: Controls -->
    <section class="panel panel-controls" aria-label="Pannello di controllo">
      <!-- Layout Selector -->
      <fieldset class="control-group">
        <legend class="control-label">
          <span class="label-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
          </span>
          Scegli il layout
        </legend>
        <div class="layout-grid" role="radiogroup" aria-label="Seleziona un layout">
          {#each templates as tmpl}
            <button
              class="layout-card"
              class:active={templateId === tmpl.id}
              role="radio"
              aria-checked={templateId === tmpl.id}
              onclick={() => handleTemplateSelect(tmpl.id)}
            >
              <span class="layout-preview" aria-hidden="true">
                {#if tmpl.preview === 'single-column'}
                  <span class="lp lp-classic"></span>
                {:else if tmpl.preview === 'two-column-grid'}
                  <span class="lp lp-gallery"></span>
                {:else if tmpl.preview === 'sidebar-main'}
                  <span class="lp lp-sidebar"></span>
                {:else if tmpl.preview === 'horizontal-strip'}
                  <span class="lp lp-minimal"></span>
                {/if}
              </span>
              <span class="layout-name">{tmpl.name}</span>
              <span class="layout-desc">{tmpl.description}</span>
            </button>
          {/each}
        </div>
      </fieldset>

      <!-- Profile Info -->
      <fieldset class="control-group">
        <legend class="control-label">
          <span class="label-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </span>
          Informazioni profilo
        </legend>
        <div class="field-row">
          <div class="field">
            <label for="userName">Il tuo nome</label>
            <input
              id="userName"
              type="text"
              placeholder="Mario Rossi"
              bind:value={userName}
              maxlength="60"
            />
          </div>
          <div class="field">
            <label for="pageTitle">Titolo pagina (opzionale)</label>
            <input
              id="pageTitle"
              type="text"
              placeholder="La mia home page"
              bind:value={pageTitle}
              maxlength="80"
            />
          </div>
        </div>
        <div class="field">
          <label for="userBio">Bio breve</label>
          <input
            id="userBio"
            type="text"
            placeholder="Designer, sviluppatore, creativo…"
            bind:value={userBio}
            maxlength="120"
          />
        </div>
      </fieldset>

      <!-- Links Editor -->
      <fieldset class="control-group">
        <legend class="control-label">
          <span class="label-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          </span>
          Collegamenti <span class="label-badge">{filledLinks}/6</span>
        </legend>
        <div class="links-editor" role="list" aria-label="Lista dei collegamenti">
          {#each links as link, i}
            <div class="link-row" role="listitem">
              <span class="link-index" aria-hidden="true">{i + 1}</span>
              <div class="link-fields">
                <div class="field field-compact">
                  <label for="link-title-{i}">Titolo</label>
                  <input
                    id="link-title-{i}"
                    type="text"
                    placeholder="Il mio sito"
                    value={link.title}
                    oninput={(e) => updateLink(i, 'title', e.target.value)}
                    maxlength="40"
                  />
                </div>
                <div class="field field-compact field-url">
                  <label for="link-url-{i}">URL</label>
                  <input
                    id="link-url-{i}"
                    type="url"
                    placeholder="https://miosito.com"
                    value={link.url}
                    oninput={(e) => updateLink(i, 'url', e.target.value)}
                    onblur={() => validateURL(i)}
                    class:has-error={link.urlError}
                    aria-describedby={link.urlError ? 'link-error-{i}' : undefined}
                    aria-invalid={link.urlError ? 'true' : undefined}
                  />
                  {#if link.urlError}
                    <span id="link-error-{i}" class="field-error" role="alert">{link.urlError}</span>
                  {/if}
                </div>
              </div>
            </div>
          {/each}
        </div>
      </fieldset>

      <!-- Color Pickers -->
      <fieldset class="control-group">
        <legend class="control-label">
          <span class="label-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20"/><path d="M2 12h20"/></svg>
          </span>
          Personalizza colori
        </legend>
        <div class="color-pickers">
          <div class="color-field">
            <label for="primaryColor">Colore primario</label>
            <div class="color-input-wrap">
              <input
                id="primaryColor"
                type="color"
                bind:value={primaryColor}
                aria-label="Seleziona il colore primario"
              />
              <span class="color-hex">{primaryColor}</span>
            </div>
          </div>
          <div class="color-field">
            <label for="secondaryColor">Colore secondario</label>
            <div class="color-input-wrap">
              <input
                id="secondaryColor"
                type="color"
                bind:value={secondaryColor}
                aria-label="Seleziona il colore secondario"
              />
              <span class="color-hex">{secondaryColor}</span>
            </div>
          </div>
        </div>
      </fieldset>

      <!-- Actions -->
      <div class="actions">
        <button class="btn btn-primary" onclick={handleDownload} disabled={!downloadReady}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Scarica HTML
        </button>
        <button class="btn btn-ghost" onclick={handleReset}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
          Ripristina
        </button>
      </div>
    </section>

    <!-- Panel: Preview -->
    <section class="panel panel-preview" aria-label="Anteprima live">
      <div class="preview-header">
        <h2 class="preview-title">
          <span class="label-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          </span>
          Anteprima live
        </h2>
        <span class="preview-badge">{activeTemplate?.name || 'Classico'}</span>
      </div>
      <div class="preview-frame">
        <iframe
          bind:this={iframeEl}
          title="Anteprima della home page generata"
          sandbox="allow-same-origin"
          class="preview-iframe"
          loading="lazy"
        ></iframe>
      </div>
      <p class="preview-hint">
        L'anteprima mostra esattamente come apparirà la tua pagina una volta pubblicata.
        I link sono cliccabili per testarli.
      </p>
    </section>
  </main>

  <footer class="app-footer">
    <p>HomeCraft — generatore gratuito di home page personali. Nessun dato viene salvato sui nostri server.</p>
  </footer>
</div>

<style>
  /* ========== APP SHELL ========== */
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* ========== HEADER ========== */
  .app-header {
    background: #FFFFFF;
    border-bottom: 1px solid #E4E1E8;
    padding: 16px 0;
  }
  .app-header-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }
  .app-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }
  .logo-icon { display: flex; align-items: center; }
  .logo-text {
    font-family: 'Outfit', system-ui, sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #1E1E24;
    letter-spacing: -0.01em;
  }
  .app-tagline {
    color: #787480;
    font-size: 13px;
    line-height: 1.4;
    max-width: 460px;
    flex: 1;
    min-width: 200px;
  }

  /* ========== MAIN LAYOUT ========== */
  .app-main {
    flex: 1;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    align-items: start;
  }

  /* ========== PANELS ========== */
  .panel {
    background: #FFFFFF;
    border: 1px solid #E4E1E8;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(30,30,36,0.06);
  }
  .panel-preview {
    position: sticky;
    top: 20px;
  }

  /* ========== CONTROL GROUPS ========== */
  .control-group {
    border: none;
    padding: 0;
    margin: 0 0 20px 0;
  }
  .control-group:last-of-type { margin-bottom: 16px; }

  .control-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Outfit', system-ui, sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #1E1E24;
    margin-bottom: 10px;
    padding: 0;
    width: 100%;
  }
  .label-icon { color: #5344DB; display: flex; align-items: center; flex-shrink: 0; }
  .label-badge {
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 12px;
    font-weight: 500;
    background: #F5F3F0;
    color: #787480;
    padding: 2px 8px;
    border-radius: 100px;
    margin-left: auto;
  }

  /* ========== LAYOUT CARDS ========== */
  .layout-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
  }
  .layout-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    padding: 12px 8px;
    border: 2px solid #E4E1E8;
    border-radius: 10px;
    background: #FFFFFF;
    cursor: pointer;
    text-align: center;
    transition: border-color 0.2s, box-shadow 0.2s, transform 0.15s;
    min-height: 44px;
    min-width: 44px;
  }
  .layout-card:hover {
    border-color: #5344DB;
    box-shadow: 0 0 0 3px rgba(83,68,219,0.1);
  }
  .layout-card:focus-visible {
    outline: 2.5px solid #5344DB;
    outline-offset: 2px;
  }
  .layout-card.active {
    border-color: #5344DB;
    background: linear-gradient(135deg, rgba(83,68,219,0.04), rgba(255,107,53,0.04));
    box-shadow: 0 0 0 3px rgba(83,68,219,0.15);
  }

  .layout-preview { width: 100%; height: 50px; display: flex; align-items: center; justify-content: center; }
  .lp { display: block; background: #E4E1E8; border-radius: 4px; width: 100%; height: 100%; position: relative; overflow: hidden; }
  .lp::after { content: ''; position: absolute; background: #5344DB; border-radius: 2px; }
  .lp-classic::after { width: 50%; height: 6px; top: 20%; left: 25%; box-shadow: 0 14px 0 #5344DB, 0 28px 0 #5344DB; }
  .lp-gallery::after { width: 40%; height: 40%; top: 10%; left: 8%; box-shadow: 52% 0 0 #5344DB, 0 55% 0 #FF6B35, 52% 55% 0 #FF6B35; border-radius: 3px; }
  .lp-sidebar::after { width: 25%; height: 60%; top: 20%; left: 8%; border-radius: 3px; box-shadow: 11px 0 0 0 #FF6B35; background: #5344DB; }
  .lp-minimal::after { width: 20%; height: 6px; top: 40%; left: 8%; box-shadow: 28% 0 0 #5344DB, 56% 0 0 #5344DB, 84% 0 0 #5344DB; border-radius: 3px; }

  .layout-name {
    font-family: 'Outfit', system-ui, sans-serif;
    font-size: 12px;
    font-weight: 600;
    color: #1E1E24;
    line-height: 1.2;
  }
  .layout-desc {
    font-size: 10px;
    color: #787480;
    line-height: 1.3;
    display: none;
  }

  /* ========== FIELDS ========== */
  .field-row { display: flex; gap: 10px; }
  .field-row .field { flex: 1; }
  .field { margin-bottom: 10px; }
  .field-compact { margin-bottom: 0; }

  .field label, .control-group label:not(.control-label) {
    display: block;
    font-size: 12px;
    font-weight: 500;
    color: #787480;
    margin-bottom: 4px;
    letter-spacing: 0.01em;
  }

  .field input[type="text"],
  .field input[type="url"] {
    width: 100%;
    padding: 8px 12px;
    border: 1.5px solid #E4E1E8;
    border-radius: 8px;
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 14px;
    color: #1E1E24;
    background: #FAFAFA;
    transition: border-color 0.2s, box-shadow 0.2s;
    min-height: 40px;
  }
  .field input[type="text"]:focus,
  .field input[type="url"]:focus {
    border-color: #5344DB;
    box-shadow: 0 0 0 3px rgba(83,68,219,0.1);
    background: #FFFFFF;
    outline: none;
  }
  .field input.has-error {
    border-color: #E84855;
    box-shadow: 0 0 0 3px rgba(232,72,85,0.1);
  }
  .field-error {
    display: block;
    font-size: 11px;
    color: #E84855;
    margin-top: 4px;
    font-weight: 500;
  }

  /* ========== LINKS EDITOR ========== */
  .links-editor { display: flex; flex-direction: column; gap: 8px; }
  .link-row {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 8px;
    background: #FAFAFA;
    border: 1px solid #E4E1E8;
    border-radius: 8px;
  }
  .link-index {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #F5F3F0;
    color: #787480;
    font-size: 11px;
    font-weight: 600;
    flex-shrink: 0;
    margin-top: 6px;
  }
  .link-fields {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 8px;
    min-width: 0;
  }
  .field-url { position: relative; }

  /* ========== COLOR PICKERS ========== */
  .color-pickers {
    display: flex;
    gap: 16px;
  }
  .color-field { flex: 1; }
  .color-field label { margin-bottom: 6px; }
  .color-input-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .color-input-wrap input[type="color"] {
    width: 40px;
    height: 40px;
    border: 2px solid #E4E1E8;
    border-radius: 8px;
    padding: 2px;
    cursor: pointer;
    background: none;
    flex-shrink: 0;
  }
  .color-input-wrap input[type="color"]:focus-visible {
    border-color: #5344DB;
    box-shadow: 0 0 0 3px rgba(83,68,219,0.15);
  }
  .color-hex {
    font-family: 'Courier New', 'JetBrains Mono', monospace;
    font-size: 13px;
    font-weight: 500;
    color: #787480;
    letter-spacing: 0.05em;
  }

  /* ========== ACTIONS ========== */
  .actions {
    display: flex;
    gap: 10px;
    padding-top: 4px;
    flex-wrap: wrap;
  }
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    font-family: 'Outfit', system-ui, sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
    min-height: 44px;
    min-width: 44px;
    text-decoration: none;
  }
  .btn:active { transform: scale(0.97); }
  .btn-primary {
    background: #5344DB;
    color: #FFFFFF;
    box-shadow: 0 2px 8px rgba(83,68,219,0.3);
  }
  .btn-primary:hover { background: #4638C4; box-shadow: 0 4px 12px rgba(83,68,219,0.35); }
  .btn-primary:disabled { background: #C4BFE8; box-shadow: none; cursor: not-allowed; }
  .btn-ghost {
    background: #F5F3F0;
    color: #787480;
    border: 1.5px solid #E4E1E8;
  }
  .btn-ghost:hover { background: #EDEBE6; color: #1E1E24; }

  /* ========== PREVIEW ========== */
  .preview-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }
  .preview-title {
    font-family: 'Outfit', system-ui, sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #1E1E24;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .preview-badge {
    font-size: 11px;
    font-weight: 500;
    background: #F5F3F0;
    color: #5344DB;
    padding: 4px 10px;
    border-radius: 100px;
    border: 1px solid #E4E1E8;
  }
  .preview-frame {
    border: 2px solid #E4E1E8;
    border-radius: 10px;
    overflow: hidden;
    background: #F5F3F0;
    position: relative;
  }
  .preview-frame::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(83,68,219,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(83,68,219,0.03) 1px, transparent 1px);
    background-size: 20px 20px;
    pointer-events: none;
    z-index: 1;
  }
  .preview-iframe {
    width: 100%;
    height: 560px;
    border: none;
    display: block;
    position: relative;
    z-index: 2;
  }
  .preview-hint {
    margin-top: 8px;
    font-size: 11px;
    color: #787480;
    text-align: center;
  }

  /* ========== FOOTER ========== */
  .app-footer {
    text-align: center;
    padding: 16px 20px;
    color: #787480;
    font-size: 12px;
    border-top: 1px solid #E4E1E8;
    background: #FFFFFF;
    margin-top: auto;
  }

  /* ========== RESPONSIVE ========== */
  @media (max-width: 900px) {
    .app-main {
      grid-template-columns: 1fr;
      padding: 12px;
      gap: 12px;
    }
    .panel-preview { position: static; }
    .preview-iframe { height: 420px; }
    .app-header-inner { padding: 0 14px; flex-direction: column; align-items: flex-start; gap: 4px; }
    .app-tagline { font-size: 12px; }
    .layout-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 480px) {
    .panel { padding: 14px; }
    .link-fields { grid-template-columns: 1fr; }
    .field-row { flex-direction: column; gap: 0; }
    .color-pickers { flex-direction: column; gap: 10px; }
    .preview-iframe { height: 340px; }
    .btn { padding: 10px 16px; font-size: 13px; }
    .layout-grid { gap: 6px; }
    .layout-card { padding: 10px 6px; }
    .layout-preview { height: 40px; }
    .app-header { padding: 12px 0; }
    .logo-text { font-size: 18px; }
  }
</style>
