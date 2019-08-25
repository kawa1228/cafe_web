
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
 server: {
  port: 2000
  },
  srcDir: 'src/',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Crimson+Pro|Noto+Serif+JP&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/common.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // Nuxt.js 2.4 以降、mode: 'client'になる
    { src: '~/plugins/vue-image-previewer.js', ssr: false },
    { src: '~/plugins/vue-carousel.js',  ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-svg-loader',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: ['~/assets/scss/common.scss']
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        cssnano: {
          preset: ['default', {minifyFontValues: {removeQuotes: false}}]
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  generate: {
    routes: [
      '/about',
      '/menu',
      '/photo'
    ]
  }
}
