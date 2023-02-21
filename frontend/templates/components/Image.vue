<template>
  <img class="Image" v-bind:src="src" alt="Etiam Purus" />
</template>

<script>
export default {
  name: "Image",
  props: ["image"],
  computed: {
    src() {
      const runtimeConfig = useRuntimeConfig()
      return (
        runtimeConfig.MGNL_HOST +
        "/dam/" +
        this.image["@id"] +
        this.image["@path"]
      );
    },
  },
};
</script>
