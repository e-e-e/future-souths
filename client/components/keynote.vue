<template>
  <section>
    <h1>{{article.title}}</h1>
    <h2 class="marginalia">author<br>date</h2>
    <div v-if="!focus" v-html="article.summary" />
    <div v-if="focus" :class="[styles.body, 'article-body']" v-html="article.body" />
    <footnote v-if="focus" v-for="(footnote, index) in article.footnotes"
      :key="index"
      :index="index"
      :show="footnote.show"
      :relativeTo="footnote.relativeTo"
      :content="footnote.content"
    />
  </section>
</template>

<script>
import footnote from 'components/footnote';

export default {
  name: 'keynote',
  components: {
    footnote,
  },
  props: {
    article: {
      type: Object,
      required: true,
    },
    focus: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    console.log('mounted!');
    this.footnotes = this.$el.getElementsByClassName('footnote');

    for (let i = 0; i < this.footnotes.length; i++) {
      const el = this.footnotes[i];
      this.article.footnotes[i].relativeTo = el.id;
      el.addEventListener('mouseover', this.revealFootnote(i));
    }
  },
  beforeDestroy() {
    const elements = this.$el.getElementsByClassName('footnote');
    for (let i = 0; i < elements.length; i++) {
      elements[i].removeEventListener('mouseover', this.revealFootnote(i));
    }
  },
  data() {
    return {
      footnotes: [],
    };
  },
  methods: {
    revealFootnote(index) {
      return () => {
        this.article.footnotes.map((f, i) => {
          f.show = (i === index);
          return f;
        });
      };
    },
  },
};
</script>

<style lang="scss" module="styles">
  .body {
    img {
      display: block;
      width: 100%;
    }
  }
</style>

<style lang="scss">
  @import "client/assets/variables.scss";

  span.footnote {
    text-decoration: underline;
    color: $primary-color;
    position: relative;
    top:-0.5rem;
    margin: 0.1rem;
    cursor: pointer;
    font-size: 0.8em;
    &:hover {
      color: black;
    }
  }
  .article-body {
    position: relative;
  }

  div.caption {
    font-weight: normal;
    display: block;
    position: absolute;
    left: -$margin-width;
    width: $margin-width - 1;
    overflow: visible;
    font-size: 0.8rem;
    transform: translateY(-100%);
  }

</style>