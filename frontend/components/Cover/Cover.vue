<template>
  <div>
    <h1>Cover</h1>
    <v-btn prepend-icon="mdi-vuetify">
      Button
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Cover",
  props: [
    "layout",
    "headline",
    "content",
    "image"
  ]
};
</script>