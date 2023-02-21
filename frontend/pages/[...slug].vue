<template>
  <EditablePage
    v-if="content"
    v-bind:content="content"
    v-bind:config="config"
    v-bind:templateAnnotations="templateAnnotations"
  />
</template>

<script>
import { EditablePage } from "@magnolia/vue-editor";

import Basic from "../templates/pages/Basic.vue";
import Header from "../templates/components/Header.vue";
import Footer from "../templates/components/Footer.vue";
import Cover from "../templates/components/Cover.vue";
import TextAndImage from "../templates/components/TextAndImage.vue";

const config = {
  componentMappings: {
    "app-lm:pages/basic": Basic,
    "app-lm:pages/index": Basic,

    "app-lm:components/header": Header,
    "app-lm:components/footer": Footer,
    "app-lm:components/text-and-image": TextAndImage,
    "app-lm:components/cover": Cover
  },
};

function getCurrentLanguage(url, languages) {
  return languages.find(language => url.indexOf("/" + language) > -1) || languages[0];
}

function setURLSearchParams(url, param) {
  return url + (url.indexOf("?") > -1 ? "&" : "?") + param;
}

export default {
  name: "IndexPage",
  components: {
    EditablePage,
  },
  data() {
    return {
      content: null,
      templateAnnotations: {},
      config,
    };
  },
  async setup() {
    const runtimeConfig = useRuntimeConfig();
    const fullPath = useRoute().fullPath;

    // Load paths, see .env and nuxt.config.js files
    const nodeName = runtimeConfig.NUXT_APP_MGNL_SITE_PATH;
    const languages = runtimeConfig.NUXT_APP_MGNL_LANGUAGES.split(" ");
    const pagesApi = runtimeConfig.MGNL_API_PAGES;
    const templateAnnotationsApi = runtimeConfig.MGNL_API_TEMPLATES;

    const currentLanguage = getCurrentLanguage(fullPath, languages);
    const isDefaultLanguage = currentLanguage === languages[0];
    let pagePath = nodeName + fullPath.replace(new RegExp(".*" + nodeName), "");

    const { data: content } = await useAsyncData(fullPath, async () => {
      if (!isDefaultLanguage) {
        pagePath = pagePath.replace("/" + currentLanguage, "");
      }
      return $fetch(
        setURLSearchParams(pagesApi + pagePath, "lang=" + currentLanguage)
      );
    });

    return { content, pagePath, templateAnnotationsApi };
  },
  async mounted() {
    if (window.location.search.includes("mgnlPreview")) {
      const templateAnnotationsRes = await fetch(
        this.templateAnnotationsApi + this.pagePath
      );
      this.templateAnnotations = await templateAnnotationsRes.json();
    }
  },
};
</script>
