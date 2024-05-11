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
    url: "https://fnjbhxrpikspggruoitj.supabase.co", // Updated Supabase URL
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZuamJoeHJwaWtzcGdncnVvaXRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc1MTM2MjUsImV4cCI6MjAyMzA4OTYyNX0.0f01t3HvjZPyJYxNDtjmizM9yzJ0ZrwlLv7BRbTZ32A", // Updated Supabase key
    redirect: false
  },
  // baseUrl: '/nuxt-github-pages/',
  // buildAssetsDir: 'assets',

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