<template>
<v-lazy
  :min-height="200"
  :options="{'threshold':0.5}">

    <footer>
      <h1>Footer</h1>
    </footer>
    
</v-lazy>
</template>

<script>
export default {
  name: "Footer"
};
</script>