<template>
  <div class="container editor__container">
    <h1 class="mb-4" v-if="headline">{{ headline }}</h1>
    <div v-html="content"></div>
  </div>
</template>

<script>
export default {
  props: [
    "headline",
    "content"
  ]
};
</script>

<style lang="scss">
  .editor__container {
    padding: 3rem 1rem;
    word-break: break-word;
  }
</style>
