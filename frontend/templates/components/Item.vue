<template>
  <li class="Item">{{ text }}</li>
</template>

<script>
export default {
  name: "Item",
  props: ["text"]
};
</script>