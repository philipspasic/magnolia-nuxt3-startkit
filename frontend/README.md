# app

## Build Setup

```bash
# install dependencies
$ npm install

# build and launch server
$ npm run build
$ npm start

# generate static project to .output/public folder (SSG option)
$ npm run generate
```

## Changes 

### Vue editor
* `@magnolia/vue-editor` (Vue 3) is used instead of `@magnolia-services/vue2-editor` (Vue 2), visit: [@magnolia/vue-editor](https://www.npmjs.com/package/@magnolia-services/vue2-editor) and [@magnolia-services/vue2-editor](https://www.npmjs.com/package/@magnolia-services/vue2-editor)

### Configuration (nuxt.config.js)
* `defineNuxtConfig` function is used, visit: [Configuration](https://v3.nuxtjs.org/migration/configuration)
* Using `alias` to map `@magnolia/vue-editor`, visit: [Aliasing libraries](https://v3.nuxtjs.org/guide/going-further/esm/#aliasing-libraries)
* Setting enviroment variables mapping with `publicRuntimeConfig`, visit [runtimeConfig](https://v3.nuxtjs.org/api/configuration/nuxt.config#publicruntimeconfig)

### pages
* `_.vue` is renamed to `[...slug].vue`, visit: [Catch all route](https://v3.nuxtjs.org/guide/directory-structure/pages#catch-all-route)
* `useAsyncData` function is used in `setup` function insted of `asyncData`, visit: [Component Options](https://v3.nuxtjs.org/migration/component-options)
* Enviroment variables (`.env`) are passed with native `useRuntimeConfig` function, visit: [Runtime Config](https://v3.nuxtjs.org/migration/runtime-config)