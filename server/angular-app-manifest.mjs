
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 980, hash: '4879e9f34489a3d73b0bd211c92f74ec8426de9d857bfe98548335460f38dab3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1241, hash: 'f179e8f9efc4c105f7f3cbd114257cd425f2747f27ecb474fdb7e79bbd96297f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 78973, hash: 'f5b830a003587c4484f6c1d2f7bce2d9e9c7dfb5e8a054c138c0da1c70bb3e22', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-WIBYURPB.css': {size: 132, hash: 'Eg7PbUeIS/A', text: () => import('./assets-chunks/styles-WIBYURPB_css.mjs').then(m => m.default)}
  },
};
