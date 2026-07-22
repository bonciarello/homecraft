/**
 * Template definitions for HomeCraft
 * Each template defines a layout structure and styling approach
 */

export const templates = [
  {
    id: 'classic',
    name: 'Classico',
    description: 'Colonna centrale con avatar e link impilati. Il formato più popolare per pagine personali.',
    icon: 'columns',
    preview: 'single-column'
  },
  {
    id: 'gallery',
    name: 'Galleria',
    description: 'Griglia a due colonne di card colorate. Perfetto per mostrare progetti o collezioni.',
    icon: 'grid',
    preview: 'two-column-grid'
  },
  {
    id: 'sidebar',
    name: 'Laterale',
    description: 'Barra laterale con profilo e area link a destra. Ideale per chi ha molti contenuti.',
    icon: 'sidebar',
    preview: 'sidebar-main'
  },
  {
    id: 'minimal',
    name: 'Minimale',
    description: 'Striscia orizzontale compatta. Massima densità in poco spazio, stile biglietto da visita.',
    icon: 'rows',
    preview: 'horizontal-strip'
  }
];

/**
 * Generate complete HTML for a template with user data
 * @param {string} templateId
 * @param {Array<{title: string, url: string}>} links
 * @param {string} primaryColor
 * @param {string} secondaryColor
 * @param {string} pageTitle
 * @param {string} userName
 * @param {string} userBio
 * @returns {string} Complete HTML document
 */
export function generateHTML(templateId, links, primaryColor, secondaryColor, pageTitle, userName, userBio) {
  const validLinks = links.filter(l => l.title.trim() && l.url.trim());

  const cssVars = `
    --primary: ${primaryColor};
    --primary-hover: ${adjustColor(primaryColor, -15)};
    --primary-light: ${adjustColor(primaryColor, 60, 0.15)};
    --secondary: ${secondaryColor};
    --secondary-hover: ${adjustColor(secondaryColor, -15)};
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
  `;

  const renderedLinks = validLinks.map((link, i) => renderLink(templateId, link, i)).join('\n');

  let layoutHTML = '';
  switch (templateId) {
    case 'classic':
      layoutHTML = classicLayout(userName, userBio, renderedLinks, validLinks.length);
      break;
    case 'gallery':
      layoutHTML = galleryLayout(userName, userBio, renderedLinks, validLinks.length);
      break;
    case 'sidebar':
      layoutHTML = sidebarLayout(userName, userBio, renderedLinks, validLinks.length);
      break;
    case 'minimal':
      layoutHTML = minimalLayout(userName, userBio, renderedLinks, validLinks.length);
      break;
    default:
      layoutHTML = classicLayout(userName, userBio, renderedLinks, validLinks.length);
  }

  return `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHTML(pageTitle || userName || 'La mia home page')}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@500;600;700&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root { ${cssVars} }
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
    ${templateStyles(templateId)}
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
    ${layoutHTML}
  </div>
</body>
</html>`;
}

function escapeHTML(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function renderLink(templateId, link, index) {
  const escapedTitle = escapeHTML(link.title);
  const escapedURL = escapeHTML(link.url);

  switch (templateId) {
    case 'gallery':
      return `
      <a href="${escapedURL}" class="link-card" target="_blank" rel="noopener noreferrer">
        <span class="link-card-icon">${getTemplateIcon(index)}</span>
        <span class="link-card-title">${escapedTitle}</span>
        <span class="link-card-arrow">→</span>
      </a>`;
    case 'minimal':
      return `
      <a href="${escapedURL}" class="link-pill" target="_blank" rel="noopener noreferrer">
        <span class="link-pill-dot"></span>
        <span>${escapedTitle}</span>
      </a>`;
    case 'sidebar':
      return `
      <a href="${escapedURL}" class="link-row" target="_blank" rel="noopener noreferrer">
        <span class="link-row-icon">${getTemplateIcon(index)}</span>
        <div class="link-row-content">
          <span class="link-row-title">${escapedTitle}</span>
          <span class="link-row-url">${escapedURL}</span>
        </div>
        <span class="link-row-arrow">→</span>
      </a>`;
    case 'classic':
    default:
      return `
      <a href="${escapedURL}" class="link-btn" target="_blank" rel="noopener noreferrer">
        <span class="link-btn-icon">${getTemplateIcon(index)}</span>
        <span class="link-btn-label">${escapedTitle}</span>
        <span class="link-btn-chevron">›</span>
      </a>`;
  }
}

function getTemplateIcon(index) {
  const icons = ['🏠', '📝', '📷', '💼', '🔗', '⭐'];
  return icons[index % icons.length];
}

function classicLayout(name, bio, links, count) {
  const safeName = escapeHTML(name || 'Il tuo nome');
  const safeBio = escapeHTML(bio || 'La tua bio qui');
  return `
    <header class="profile">
      <div class="avatar" aria-hidden="true">${(name || '?').charAt(0).toUpperCase()}</div>
      <h1>${safeName}</h1>
      ${safeBio ? `<p class="bio">${safeBio}</p>` : ''}
    </header>
    <nav class="links-stack" aria-label="Collegamenti">
      ${links || '<p class="empty-state">Nessun collegamento inserito</p>'}
    </nav>
    <footer class="page-footer">
      <p>Creato con HomeCraft</p>
    </footer>`;
}

function galleryLayout(name, bio, links, count) {
  const safeName = escapeHTML(name || 'Il tuo nome');
  const safeBio = escapeHTML(bio || 'La tua bio qui');
  return `
    <header class="profile profile-compact">
      <div class="avatar avatar-sm" aria-hidden="true">${(name || '?').charAt(0).toUpperCase()}</div>
      <div>
        <h1>${safeName}</h1>
        ${safeBio ? `<p class="bio">${safeBio}</p>` : ''}
      </div>
    </header>
    <nav class="links-grid" aria-label="Collegamenti">
      ${links || '<p class="empty-state">Nessun collegamento inserito</p>'}
    </nav>
    <footer class="page-footer">
      <p>Creato con HomeCraft</p>
    </footer>`;
}

function sidebarLayout(name, bio, links, count) {
  const safeName = escapeHTML(name || 'Il tuo nome');
  const safeBio = escapeHTML(bio || 'La tua bio qui');
  return `
    <div class="sidebar-layout">
      <aside class="sidebar-panel">
        <div class="avatar" aria-hidden="true">${(name || '?').charAt(0).toUpperCase()}</div>
        <h1>${safeName}</h1>
        ${safeBio ? `<p class="bio">${safeBio}</p>` : ''}
      </aside>
      <main class="sidebar-main">
        <nav class="links-rows" aria-label="Collegamenti">
          ${links || '<p class="empty-state">Nessun collegamento inserito</p>'}
        </nav>
        <footer class="page-footer">
          <p>Creato con HomeCraft</p>
        </footer>
      </main>
    </div>`;
}

function minimalLayout(name, bio, links, count) {
  const safeName = escapeHTML(name || 'Il tuo nome');
  const safeBio = escapeHTML(bio || 'La tua bio qui');
  return `
    <header class="profile profile-inline">
      <div class="avatar avatar-xs" aria-hidden="true">${(name || '?').charAt(0).toUpperCase()}</div>
      <div>
        <h1>${safeName}</h1>
        ${safeBio ? `<span class="bio-inline"> · ${safeBio}</span>` : ''}
      </div>
    </header>
    <nav class="links-strip" aria-label="Collegamenti">
      ${links || '<p class="empty-state">Nessun collegamento inserito</p>'}
    </nav>
    <footer class="page-footer">
      <p>Creato con HomeCraft</p>
    </footer>`;
}

function templateStyles(templateId) {
  const base = `
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
  `;

  switch (templateId) {
    case 'classic':
      return base + `
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
    }`;

    case 'gallery':
      return base + `
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
    }`;

    case 'sidebar':
      return base + `
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
    }`;

    case 'minimal':
      return base + `
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
    }`;

    default:
      return base;
  }
}

/**
 * Adjust a hex color by a percentage (lighten/darken) and optional alpha
 */
function adjustColor(hex, amount, alpha = 1) {
  let r, g, b;
  if (hex.startsWith('#')) {
    const clean = hex.slice(1);
    if (clean.length === 3) {
      r = parseInt(clean[0] + clean[0], 16);
      g = parseInt(clean[1] + clean[1], 16);
      b = parseInt(clean[2] + clean[2], 16);
    } else {
      r = parseInt(clean.slice(0, 2), 16);
      g = parseInt(clean.slice(2, 4), 16);
      b = parseInt(clean.slice(4, 6), 16);
    }
  } else {
    return hex;
  }

  const adjust = (c) => Math.max(0, Math.min(255, c + amount));

  if (alpha < 1) {
    return `rgba(${adjust(r)}, ${adjust(g)}, ${adjust(b)}, ${alpha})`;
  }
  return `#${[adjust(r), adjust(g), adjust(b)].map(c => c.toString(16).padStart(2, '0')).join('')}`;
}
