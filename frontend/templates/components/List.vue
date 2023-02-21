<template>
  <ul class="List">
    <EditableArea v-if="items" v-bind:content="items" />
  </ul>
</template>

<script>
import { EditableArea } from "@magnolia/vue-editor";

export default {
  name: "List",
  components: {
    EditableArea,
  },
  props: ["items"],
};
</script>
