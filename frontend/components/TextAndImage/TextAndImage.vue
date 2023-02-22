<template>
  <div>
    <h1>Text and Image</h1>
    <p v-if="layout.orientation">Orientation is: {{ layout.orientation }}</p>
  </div>
</template>

<script>
export default {
  name: "Text and Image",
  props: [
    "layout",
    "headline",
    "content",
    "image"
  ]
};
</script>