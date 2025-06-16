
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/studiodentisticofarjoud/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/studiodentisticofarjoud"
  },
  {
    "renderMode": 2,
    "route": "/studiodentisticofarjoud/where"
  },
  {
    "renderMode": 2,
    "route": "/studiodentisticofarjoud/pricing"
  },
  {
    "renderMode": 2,
    "route": "/studiodentisticofarjoud/appointment"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 32188, hash: '300fe199c12b196eaadb5f76764c12fc589c52b03b311a757f608291db017667', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25794, hash: 'abde7255f753c577920c9cd8f1a6ed448748e261e3a9132333ad93eb1fe3b399', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'where/index.html': {size: 127755, hash: '21eef339778b692a69a9962b8835e7a5acc218b51fc45121b45c7e00c74d307c', text: () => import('./assets-chunks/where_index_html.mjs').then(m => m.default)},
    'index.html': {size: 118274, hash: '2c888fa810991b0c1e295e83bc0692b1d017b9fe72f2ffda9bf932b6098d1217', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 123030, hash: 'd1c41c4e82b544e50dee4a8c8fe038051721c4119b1dcecc0d189b65cf91b007', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'appointment/index.html': {size: 220565, hash: '763ff6acc025b06dde6ae9385da8bea014b409383b2a93c9807015c903a73936', text: () => import('./assets-chunks/appointment_index_html.mjs').then(m => m.default)},
    'styles-XXCUDO7D.css': {size: 7043, hash: 'dMkBV/bw5fY', text: () => import('./assets-chunks/styles-XXCUDO7D_css.mjs').then(m => m.default)}
  },
};
