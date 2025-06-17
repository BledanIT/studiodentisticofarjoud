
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
  },
  {
    "renderMode": 2,
    "route": "/studiodentisticofarjoud/privacy"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 32196, hash: '7a8fac8b74e046183428a0030f82fd7aa452129ae9b5ddfb8db22ef29bae8198', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25852, hash: 'b70527a9059e63044f53ffb1c778550f065a62e9873fc8a5f22f2aba48d9f915', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'where/index.html': {size: 130284, hash: '9407745e31ee7e3e24da36710346c5b9804dec86fdab9ae10470cbacc332c915', text: () => import('./assets-chunks/where_index_html.mjs').then(m => m.default)},
    'privacy/index.html': {size: 108779, hash: 'c2b5f96a9b19f074f31fde3fb6311b0041d84547bd0b2f8fe29d663e0d2701e7', text: () => import('./assets-chunks/privacy_index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 126183, hash: 'feb5e3d375f26381d6e13ec5c5393f79a552aa4b46a12eaa3fbc223bced19887', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'appointment/index.html': {size: 226800, hash: '830ae45f048c939cff5ec0c528a2d2018edaf017c559372c0f127440bbc53e8d', text: () => import('./assets-chunks/appointment_index_html.mjs').then(m => m.default)},
    'index.html': {size: 121237, hash: 'e3399f41e11c5c51908cf11a21ecf3655ba9476b79184d02c75ef3497508464d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-65IWZ6W2.css': {size: 6993, hash: '+A9W7XfYYT8', text: () => import('./assets-chunks/styles-65IWZ6W2_css.mjs').then(m => m.default)}
  },
};
