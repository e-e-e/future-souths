<template>
  <transition name="fade">
    <div v-show="loading" class="loader">
      <div class="contentsWrapper">
        <transition name="fade">
        <header>
          <div class="column left">
            <h1 style="color: white">Future Souths</h1>
          </div>
        </header>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'loader',
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
  },
  data() { return {}; },
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "client/assets/variables.scss";

  div.loader {
    background-color: $primary-color;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 999999;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
</style>
