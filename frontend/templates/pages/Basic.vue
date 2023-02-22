<template>
  <div>
    <EditableArea v-if="header || sharedContent.header" :content="header || sharedContent.header" />

    <main>
      <EditableArea v-if="main" :content="main" />
    </main>

    <EditableArea v-if="footer || sharedContent.footer" :content="footer || sharedContent.footer" />
  </div>
</template>

<script>
import { EditableArea } from "@magnolia/vue-editor";
import { mapState } from "pinia";
import { useAppStore } from "@/store/app";

export default {
  name: "BasicPage",
  components: {
    EditableArea,
  },
  props: ["title", "metadata", "main", "header", "footer"],
  computed: {
    ...mapState(useAppStore, ['sharedContent'])
  }
};
</script>
