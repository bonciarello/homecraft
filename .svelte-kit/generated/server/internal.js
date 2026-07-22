
import root from '../root.js';
import { set_building, set_prerendering } from '$app/env/internal';
import { set_assets } from '$app/paths/internal/server';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';
import error from '../shared/error-template.js';

export const options = {
	app_template_contains_nonce: false,
	async: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	csrf_trusted_origins: [],
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	service_worker_options: undefined,
	server_error_boundaries: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"it\">\n<head>\n  <meta charset=\"utf-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n  <title>HomeCraft — Genera la tua home page personale</title>\n  <meta name=\"description\" content=\"Crea una home page personale con link e widget in pochi click. Scegli tra 4 template, personalizza colori e scarica il codice HTML pronto da pubblicare.\" />\n  <meta name=\"robots\" content=\"index, follow\" />\n  <link rel=\"canonical\" href=\"https://github.com/bonciarello/homecraft/\" />\n  <meta property=\"og:title\" content=\"HomeCraft — Genera la tua home page personale\" />\n  <meta property=\"og:description\" content=\"Crea una home page personale con link e widget in pochi click. Scegli tra 4 template, personalizza colori e scarica il codice HTML pronto da pubblicare.\" />\n  <meta property=\"og:type\" content=\"website\" />\n  <meta property=\"og:url\" content=\"https://github.com/bonciarello/homecraft/\" />\n  <meta property=\"og:locale\" content=\"it_IT\" />\n  <base href=\"./\" />\n  <link rel=\"icon\" href=\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏠</text></svg>\" />\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n  <link href=\"https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600&family=Outfit:wght@500;600;700&display=swap\" rel=\"stylesheet\" />\n  <script type=\"application/ld+json\">\n    {\n      \"@context\": \"https://schema.org\",\n      \"@type\": \"WebApplication\",\n      \"name\": \"HomeCraft\",\n      \"url\": \"https://github.com/bonciarello/homecraft/\",\n      \"description\": \"Generatore di home page personali da template visivi. Scegli un layout, inserisci i tuoi link, personalizza i colori e scarica il codice HTML pronto.\",\n      \"applicationCategory\": \"DesignApplication\",\n      \"operatingSystem\": \"Web\",\n      \"inLanguage\": \"it\",\n      \"offers\": {\n        \"@type\": \"Offer\",\n        \"price\": \"0\",\n        \"priceCurrency\": \"EUR\"\n      }\n    }\n  </script>\n  " + head + "\n</head>\n<body data-sveltekit-preload-data=\"off\">\n  <div style=\"display: contents\">" + body + "</div>\n</body>\n</html>\n",
		error
	},
	version_hash: "dyhvpw"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let handleValidationError;
	let init;
	

	let reroute;
	let transport;
	

	return {
		handle,
		handleFetch,
		handleError,
		handleValidationError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation };
