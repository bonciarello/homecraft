/**
 * Post-build script: rewrites absolute asset paths in index.html to relative paths.
 * Only touches paths that are SvelteKit assets (/_app/...), not external URLs.
 */
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const indexPath = join(import.meta.dirname, '..', 'build', 'index.html');
let html = readFileSync(indexPath, 'utf-8');

// Replace absolute asset paths with relative ones in href/src attributes, but NOT in external URLs
// Only match /app/homecraft when it's followed by _app/ (SvelteKit assets)
html = html.replace(/"\/app\/homecraft\/_app\//g, '"./_app/');

// In inline scripts, fix import() paths similarly
html = html.replace(/import\("\/app\/homecraft\/_app\//g, 'import("./_app/');

// Fix base/assets properties in __sveltekit config (these are used for client routing)
// The <base href="./"> handles URL resolution, so these can be relative
html = html.replace(/base: "\/app\/homecraft"/g, 'base: "./"');
html = html.replace(/assets: "\/app\/homecraft"/g, 'assets: "./"');

writeFileSync(indexPath, html, 'utf-8');
console.log('✅ Fixed asset paths in build/index.html');
