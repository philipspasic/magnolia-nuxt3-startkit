<template>
  <div>
    <EditableArea v-if="header" :content="header" />

    <h1>{{ title || metadata["@name"] }}</h1>

    <main>
      <div class="hint">[Main Area]</div>
      <EditableArea v-if="main" :content="main" />
    </main>

    <EditableArea v-if="footer" :content="footer" />
  </div>
</template>

<script>
import { EditableArea } from "@magnolia/vue-editor";

export default {
  name: "Basic",
  components: {
    EditableArea,
  },
  props: ["title", "metadata", "main", "header", "footer"],
};
</script>
