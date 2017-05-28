<template>
  <section>
    <h1>{{title}}</h1>
    <div v-html="description"/>
    <h2 class="marginalia">{{subtitle}}</h2>
    <div v-for="dialogue in dialogues" class="schedule">
      <div class="times">
        <div>{{date(dialogue.time)}}</div>
        <div>{{time(dialogue.time)}}</div>
      </div>
      <div class="names">
        <div>{{dialogue.author}}</div>
        <div>{{dialogue.title}}</div>
      </div>
    </div>
  </section>
</template>

<script>
import { time, date } from 'lib/utils';

export default {
  name: 'keynote',
  components: {},
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    dialogues: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {};
  },
  methods: {
    date,
    time,
  },
};
</script>

<style lang="scss" scoped>
  .schedule {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    box-sizing: border-box;
    justify-content: flex-start;
    margin-bottom: 1rem;
    .times, .names {
      display: flex;
      flex-direction: column;
    }
    .times {
      width: 30%;
    }
    .names {
      width: 60%;
      padding-left: 1rem;
    }
  }
</style>
