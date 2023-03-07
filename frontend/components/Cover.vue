<template>
  <section class="page-cover">
    <v-parallax :src="imageUrl"></v-parallax>
    <v-col lg="6" md="8" class="page-cover__content">
      <h1 class="text-h2 font-weight-thin mb-5">{{ headline }}</h1>
      <div class="text-body-1" v-html="content"></div>
    </v-col>
  </section>
</template>

<script>
import { useMgnlImage } from '../composables/mgnlImage';

export default {
  name: "Cover",
  props: [
    "layout",
    "headline",
    "content",
    "image"
  ],
  setup(props) {
    const imageUrl = useMgnlImage(props.image);
    return {imageUrl};
  }
};
</script>

<style lang="scss">
.page-cover {
  position: relative;
  background-color: rgba(black, .2);
  text-align: center;
  color: white;
  height: 100vh;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow: hidden;

  .v-parallax {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(black, .2);
    pointer-events: none;
    z-index: 1;
  }

  &__content {
    position: relative;
    z-index: 2;

    p:not(:last-child) {
      margin-bottom: 1em;
    }
  }
}
</style>