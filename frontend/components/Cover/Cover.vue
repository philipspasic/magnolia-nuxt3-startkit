<template>
  <div>
    <h1>Cover</h1>
    <a class="uk-button uk-button-default" href="#">Link</a>
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