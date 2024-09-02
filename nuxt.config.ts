// https://nuxt.com/docs/api/configuration/nuxt-config
// import  graphql from '@rollup/plugin-graphql'
import { defineNuxtConfig } from 'nuxt/config'
import auth from './middleware/auth'
// const strapiBaseUri = process.env.API_URL || "http://localhost:1337/"
// import graphql from "@rollup/plugin-graphql";
export default defineNuxtConfig({
  vite: {
    define: {
      "process.env.DEBUG": true,
      // plugins: [graphql()]
    },
  },

  ssr: true,
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

  modules: ['@nuxtjs/supabase', ['nuxt-mail', {
    message: {
      to: process.env.email
    },
    smtp: {
      service: 'gmail',
      auth:{
        user:process.env.email,
        pass:process.env.password,
      }
    },
  }]],

  supabase: {
    url: process.env.SUPABASE_URL, // Updated Supabase URL
    key: process.env.SUPABASE_KEY, // Updated Supabase key
    redirect: false
  },



  // baseUrl: '/nuxt-github-pages/',
  // buildAssetsDir: 'assets',
  runtimeConfig: {
    public: {
      PAYSTACK_PUBLIC_KEY: process.env.PAYSTACK_PUBLIC
    },
    PAYSTACK_SECRET_KEY: process.env.PAYSTACK_SECRET
  },

  imports: {
    dirs: [
      'composables/**'
    ]
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-07-14'
})