//Nuxt config page: https://v3.nuxtjs.org/api/configuration/nuxt.config
import fetch from "node-fetch";
import en from "./assets/translations/en";
import de from "./assets/translations/de";

export default defineNuxtConfig({
  // App configuration: https://v3.nuxtjs.org/api/configuration/nuxt.config#app
  app: {
    // Global page headers: https://v3.nuxtjs.org/api/configuration/nuxt.config#head
    head: {
      title: "Magnolia Nuxt3 Startkit",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  // Passing .env configuration: https://v3.nuxtjs.org/api/configuration/nuxt.config#publicruntimeconfig
  runtimeConfig: {
    public: {
      MGNL_HOST: process.env.MGNL_HOST,
      MGNL_API_PAGES: process.env.MGNL_API_PAGES,
      MGNL_API_TEMPLATES: process.env.MGNL_API_TEMPLATES,
      NUXT_APP_MGNL_SITE: process.env.NUXT_APP_MGNL_SITE,
      NUXT_APP_MGNL_LANGUAGES: process.env.NUXT_APP_MGNL_LANGUAGES,
    },
  },

  // Global CSS: https://v3.nuxtjs.org/api/configuration/nuxt.config#css
  css: [
    "@/assets/css/main.scss",
    "@mdi/font/css/materialdesignicons.min.css",
    "vuetify/lib/styles/main.sass"
  ],

  // Transpiling libraries: https://v3.nuxtjs.org/guide/going-further/esm#transpiling-libraries
  build: {
    transpile: [
      "vuetify",
      "@magnolia/vue-editor", 
      "@magnolia/template-annotations"
    ]
  },

  modules: [
    "@nuxtjs/i18n",
    "@pinia/nuxt"
  ],

  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: { en, de }
    }
  },

  alias: {
    "@magnolia/vue-editor": "@magnolia/vue-editor/src/main.js",
    "@magnolia/template-annotations": "@magnolia/template-annotations/src/index.js",
  },

  // Set nuxt to generate static files
  target: "static",

  // Fetch all paths and generate pages (needed for SSG option: npm run generate)
  hooks: {
    async "nitro:config"(nitroConfig) {
      if (nitroConfig.dev) {
        return;
      }
      const results = await fetch(process.env.MGNL_API_PAGES)
        .then((res) => res.json())
        .then((res) => {
          return res?.results.map((node) => {
            if (node["mgnl:template"].startsWith("app-lm")) {
              return node["@path"];
            }
          });
        })
        .then((path) => path.filter((element) => element !== undefined));
      results.forEach((element) => nitroConfig.prerender.routes.push(element));
    },
  },
});
