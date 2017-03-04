<template>
  <transition name="fade">
    <div v-if="show" :style="position">
      <div class="fn">
        <h2>{{index + 1}}</h2>
        <div v-html="content"></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'footnote',
  props: {
    index: {
      type: Number,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    show: {
      type: Boolean,
      default: false,
    },
    relativeTo: {
      type: String,
    },
  },
  beforeUpdate() {
    const el = document.getElementById(this.relativeTo);
    if (el) {
      const rect = el.getBoundingClientRect();
      this.position.top = `${rect.top + window.scrollY}px`;
    }
  },
  data() {
    return {
      position: {
        position: 'absolute',
        top: 0,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "client/assets/variables.scss";

.fn {
  font-weight: normal;
  display: block;
  position: relative;
  left: -$margin-width;
  width: $margin-width - 1;
  height: 0;
  margin: 0;
  overflow: visible;
  font-size: 0.8rem;
}

h2 {
  margin: 0;
  font-size: 1rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}

</style>