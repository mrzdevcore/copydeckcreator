export default {
  env: {},
  head: {
    title: "copydeckcreator",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "CopydeckCreator is a web platform for copydeck creation, translation and auto generate script for sitecore"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  loading: { color: "#3B8070" },
  css: ["@/assets/css/main.css", "@/assets/scss/main.scss"],
  styleResources: {
    scss: [
      "@/assets/scss/main.scss",
      "@/assets/scss/abstracts/_variables.scss",
      "@/assets/scss/abstracts/_mixins.scss"
    ]
  },
  vuetify: {
    theme: {
      primary: "#E91D63"
    }
  },
  build: {},
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/vuetify',
    '@nuxtjs/toast',
    '@nuxtjs/style-resources'
  ],
  axios: {},
  router: {
    middleware: ['auth']
  },
  auth: {
    watchLoggedIn: true,
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/auth/login', method: 'post', propertyName: 'token'},
          logout: { url: '/api/auth/login', method: 'post'},
          user: { url: '/api/auth/user', method: 'get', propertyName: 'user'}
        }
      }
    }
  }
};
