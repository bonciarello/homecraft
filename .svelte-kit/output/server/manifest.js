export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "app/homecraft/_app",
	assets: new Set(["robots.txt","sitemap.xml"]),
	mimeTypes: {".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.u0ZRoYR3.js",app:"_app/immutable/entry/app.Bqx9ttYA.js",imports:["_app/immutable/entry/start.u0ZRoYR3.js","_app/immutable/chunks/DZHsD5i6.js","_app/immutable/chunks/B0y2ng_1.js","_app/immutable/chunks/9_cS-Fra.js","_app/immutable/entry/app.Bqx9ttYA.js","_app/immutable/chunks/B0y2ng_1.js","_app/immutable/chunks/B0YPJumb.js","_app/immutable/chunks/DTSQhbWA.js","_app/immutable/chunks/9_cS-Fra.js","_app/immutable/chunks/CZYi_4fc.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
