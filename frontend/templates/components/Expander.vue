<template>
  <div class="Expander">
    <div
      @click.prevent="toggle"
      class="expanderHeader"
      :class="isCollapsed ? 'closed' : 'open'"
    >
      Expander
      <svg
        class="expanderIcon"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
        role="presentation"
      >
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
      </svg>
    </div>

    <div v-if="!isCollapsed">
      <div class="hint">[EXPANDER OPENED]</div>
      <EditableArea
        v-if="expanderItems"
        v-bind:content="expanderItems"
        v-bind:parentTemplateId="metadata['mgnl:template']"
      />
    </div>
  </div>
</template>

<script>
import { EditableArea } from "@magnolia/vue-editor";

export default {
  name: "Expander",
  components: {
    EditableArea,
  },
  props: ["expanderItems", "metadata"],

  data() {
    return {
      isCollapsed: true,
    };
  },

  updated() {
    if (
      window.location.search.includes("mgnlPreview") &&
      window.parent.mgnlRefresh
    ) {
      window.parent.mgnlRefresh();
    }
  },

  methods: {
    toggle() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>
