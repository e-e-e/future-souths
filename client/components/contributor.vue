<template>
  <div>
    <a class="name" v-on:click="toggle">{{name}}</a>
    <div v-show="expanded" v-html="biography"/>
  </div>
</template>

<script>
export default {
  name: 'keynote',
  components: {},
  props: {
    name: {
      type: String,
      default: '',
    },
    biography: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    toggle() {
      this.expanded = !this.expanded;
    },
  },
};
</script>
<style lang="scss">
  .name {
    display: block;
    margin-bottom: 1rem;
  }
</style>
