

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CjtHh7u0.js","_app/immutable/chunks/disclose-version.D8BzpR_T.js","_app/immutable/chunks/runtime.za0F3QAd.js","_app/immutable/chunks/legacy.Dcyv-P4F.js"];
export const stylesheets = [];
export const fonts = [];
