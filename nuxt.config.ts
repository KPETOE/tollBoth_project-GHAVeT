// https://nuxt.com/docs/api/configuration/nuxt-config
// import  graphql from '@rollup/plugin-graphql'
import { defineNuxtConfig } from 'nuxt/config'
// const strapiBaseUri = process.env.API_URL || "http://localhost:1337/"
// import graphql from "@rollup/plugin-graphql";
export default defineNuxtConfig({
  vite: {
    define: {
      "process.env.DEBUG": true,
      // plugins: [graphql()]
    },
  },
  // ssr: false,
  // autoImports: {
  //   dirs: ["graphql"], // Enable auto-discovery within given folders
  // },

  // runtimeConfig: {
  //   public: {
  //     graphqlUrl: "http://localhost:1337/graphql",
  //   },
  // },
  // vite: {
  //   plugins: [graphql()], // Allow usage of .gql/.graphql files
  // },
  css: [
    'assets/styles/bootstrap.scss',
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],

  build: {
    transpile: ['vuetify'],
  },
  // hooks: {
  //   'vite:extendConfig': (config) => { }
  // },
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' }
  ],
  modules: ['@nuxtjs/supabase'],
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect:false
  },
  baseUrl: '/nuxt-github-pages/',
  buildAssetsDir: 'assets',

  runtimeConfig: {
    public: {
      apiBase: process.env.API_URL
    }
  },
  imports: {
    dirs: [
      'composables/**'
    ]
  },
  devtools: { enabled: true }
})