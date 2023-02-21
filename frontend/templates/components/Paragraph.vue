<template>
  <div class="Paragraph" v-html="richText"></div>
</template>

<script>
export default {
  name: "Paragraph",
  props: ["richText"]
};
</script>