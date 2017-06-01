<template>
  <section class="dialogue">
    <div class="displayDate">
      <div class="marginalia-block">{{time(article.time)}}</div>
      <div>{{date(article.time)}}</div>
    </div>

    <h1>{{article.title}}</h1>
    <div class="marginalia-block">
      <h2 class="top">{{article.author}}</h2>
    </div>
    <h2 class="marginalia black">
      <span v-for="participant in article.participants">{{participant}}<br></span>
    </h2>
    <div :class="[styles.body, 'article-body']" v-html="article.image"/>
    <div v-if="article.caption" v-html="article.caption" class="caption" />
    <a v-if="!focus" v-on:click="setFocused(index)">Continue Reading...</a>
    <div v-show="focus" :class="[styles.body, 'article-body']" v-html="article.blurb" />
    <footnote v-show="focus" v-for="(footnote, index) in article.footnotes"
      :key="index"
      :index="index"
      :show="footnote.show"
      :relativeTo="footnote.relativeTo"
      :content="footnote.content"
    />
  </section>
</template>

<script>
import { mapMutations } from 'vuex';
import { time, dateHeader } from 'lib/utils';
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
    index: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    this.footnotes = this.$el.getElementsByClassName('footnote');
    for (let i = 0; i < this.footnotes.length; i++) {
      const el = this.footnotes[i];
      // this is a hacky violation of state
      this.article.footnotes[i].relativeTo = el.id;
      el.addEventListener('mouseover', this.revealFootnote(i));
      el.addEventListener('touchstart', this.revealFootnote(i));
    }
  },
  beforeDestroy() {
    const elements = this.$el.getElementsByClassName('footnote');
    for (let i = 0; i < elements.length; i++) {
      elements[i].removeEventListener('mouseover', this.revealFootnote(i));
      elements[i].addEventListener('touchstart', this.revealFootnote(i));
    }
  },
  data() {
    return {
      footnotes: [],
    };
  },
  methods: {
    ...mapMutations(['setFocused']),
    time,
    date: t => `Dialogue: ${dateHeader(t)}`,
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
      height: auto;
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

  .black {
    color: black;
  }

  .displayDate {
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
    font-family: $feature-font;
    text-transform: uppercase;
  }

  div.caption {
    font-weight: normal;
    font-size: 0.8rem;
    padding: 0.5rem 0;
    font-style: italic;
    em {
      font-style: normal;
    }
  }

</style>
