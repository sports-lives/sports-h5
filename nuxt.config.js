import fs from 'fs';
import https from 'https';
const text=fs.readFileSync('./script/px2rem.js');
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '豪球直播',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '豪球直播致力于打造全民娱乐的互动体育直播平台，以多样的美女互动、优质的直播内容、极致的互动体验，满足用户体育直播及足球,篮球,电竞等热门体育项目直播的观看需求。' },
      { hid: 'keywords', name: 'keywords', content: '豪球直播,体育直播,体育赛事,足球,篮球,电竞直播,美女直播,2022世界杯,2021欧洲杯半决赛,CCTV5在线直播,CCTV5直播' }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    style: [{
      vmid: 'page-w',
      innerHTML: `
      body  #__nuxt{
        max-width:750px;
        margin:0 auto;
      }
    `,
    }],
    script: [
      {
        vmid: 'px2rem-script',
        innerHTML:text.toString(),
        type: 'text/javascript',
        charset: 'utf-8',
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },
  router: {
    prefetchLinks: false,
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  'vant/lib/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
   // '@/plugins/composition-api',
    '@/plugins/vant-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
 // components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
  //  '@nuxtjs/composition-api',
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    httpsAgent:new https.Agent({ rejectUnauthorized: false })
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss:{
      plugins:{
        "postcss-px2rem": {
          remUnit: 37.5
        }
      }
    },
    extend (config, ctx) {
      const scssLoader = config.module.rules.find(rule => {
        return rule.test.toString() === '/\\.scss$/i';
      });
      scssLoader.oneOf.map(rule => {
        rule.use.forEach(loader => {

          if (loader.loader.includes('\\css-loader\\dist')){
            loader.options.modules={
              mode: 'local',
              localIdentName: '[name]_[local]',
              exportLocalsConvention: 'camelCaseOnly',
              auto: /\.module\.\w+$/i,
            }
          }
        })
      })

    }
  },
  server: {
    host: '0.0.0.0'
  }
}
