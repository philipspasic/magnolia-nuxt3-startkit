<template>
  <header class="header" :class="{'position-relative' : isMgnl}">
    <v-col lg="3" class="header__left">
      <img :src="logoUrl" alt="logo">
    </v-col>
    <div class="header__middle">
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
      </ul>
    </div>
    <v-col lg="3" class="header__right"></v-col>
  </header>
</template>

<script>
import { EditorContextHelper } from '@magnolia/vue-editor';

export default {
  name: "Header",
  props: [
    "logo"
  ],
  setup(props) {
    const isMgnl = ref(false);
    const logoUrl = useMgnlImage(props.logo);
    return {logoUrl, isMgnl};
  },
  mounted() {
    this.isMgnl = EditorContextHelper.inIframe();
  }
};
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  padding: .5rem 4rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__left {
    img {
      max-height: 4rem;
    }
  }

  &__middle {
    ul {
      list-style-type: none !important;
      display: flex;
      align-items: center;
      
      li {
        &:not(:last-child) {
          margin-right: 1rem;
        }

        a {
          text-decoration: none;
          color: inherit;

          &.router-link-exact-active {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>