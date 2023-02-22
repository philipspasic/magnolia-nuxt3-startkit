<template>
<v-lazy
  :min-height="200"
  :options="{'threshold':0.5}">

  <div>
    <h1>Text and Image</h1>
    <p v-if="layout.orientation">Orientation is: {{ layout.orientation }}</p>
  </div>
  
</v-lazy>  
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