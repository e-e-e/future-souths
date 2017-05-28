<template>
  <div>
    <a v-on:click="toggle">{{name}}</a>
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
