
export default {
  basePath: '/studiodentisticofarjoud',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
