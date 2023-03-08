<template>
  <footer class="page-footer">
    <div class="bg-teal">
      <v-container class="d-flex align-center">
        <p>Get connected with us on social networks!</p>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          :icon="icon"
          variant="plain"></v-btn>
      </v-container>
    </div>

    <div class="bg-black text-white text-center">
      <v-container>
        <p class="text-body-2">© {{ new Date().getFullYear() }} Company</p>
      </v-container>
    </div>
  </footer>
</template>

<script>
export default {
  name: "PageFooter",
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
};
</script>

<style lang="scss">
.page-footer {
  margin-top: 3rem;
}
</style>