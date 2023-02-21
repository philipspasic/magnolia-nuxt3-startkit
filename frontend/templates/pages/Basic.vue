<template>
  <div class="Basic">
    <div class="hint">[Basic Page]</div>
    <h1>{{ title || metadata["@name"] }}</h1>

    <main>
      <div class="hint">[Main Area]</div>
      <EditableArea v-if="main" v-bind:content="main" />
    </main>

    <div class="Extras">
      <div class="hint">[Extras Area]</div>
      <EditableArea v-if="extras" v-bind:content="extras" />
    </div>
  </div>
</template>

<script>
import { EditableArea } from "@magnolia/vue-editor";

export default {
  name: "Basic",
  components: {
    EditableArea,
  },
  props: ["title", "metadata", "main", "extras"],
};
</script>
