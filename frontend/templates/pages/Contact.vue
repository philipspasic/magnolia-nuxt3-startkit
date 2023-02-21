<template>
  <div class="Contact">
    <h2 class="hint">[Contact Page]</h2>
    <div class="box">
      <h1>{{ title || "Nulla vitae elit libero, a pharetra augue." }}</h1>
    </div>
    <EditableArea v-if="main" v-bind:content="main" />
  </div>
</template>

<script>
import { EditableArea } from "@magnolia/vue-editor";

export default {
  name: "Contact",
  components: {
    EditableArea,
  },
  props: ["title", "metadata", "main"],
};
</script>

<style scoped>
.box {
  background: #eaf7f5;
  padding: 20px;
}
</style>
