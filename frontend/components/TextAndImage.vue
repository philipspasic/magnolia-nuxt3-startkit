<template>
  <section>
    <h1>Text and Image</h1>
    <p>Orientation is: {{ orientation }}</p>
  </section>
</template>

<script>
export default {
  name: "Text and Image",
  props: [
    "orientation",
    "headline",
    "content",
    "image"
  ]
};
</script>