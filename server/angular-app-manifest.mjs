
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
    'index.csr.html': {size: 980, hash: 'fbdc6aa77a8aaa3369d898a316c6c8f93816b73627d30ba0e2ccd8e25d8509e2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1241, hash: 'da53b3ddb7760f3eb97789362c356aef206eb1f6f93b05393ac60dfd7d92beb5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 79116, hash: 'b7e11a958462f872f10b361ab599fee43ffc796cc0d9f371336b0b9db26d94ea', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-WIBYURPB.css': {size: 132, hash: 'Eg7PbUeIS/A', text: () => import('./assets-chunks/styles-WIBYURPB_css.mjs').then(m => m.default)}
  },
};
