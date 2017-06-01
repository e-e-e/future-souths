<template>
  <div id="app">
    <loader :loading="loading"/>
    <div class="contentsWrapper">
      <header>
        <div class="column left">
          <h1>Future</br>Souths</h1>
        </div>
        <div class="column right">
          <h2>Aesthetics and Vocabularies<br>of the Global Souths</h2>
          <nav>
            <a href="mailto:info@futuresouths.org">Contact</a>
            <a href="https://www.facebook.com/futuresouths/" target="__blank">Follow</a>
          </nav>
        </div>
      </header>
      <main>

        <div class="column right">
          <schedule v-if="schedule"
            :title="schedule.title"
            :subtitle="schedule.subtitle"
            :description="schedule.description"
            :dialogues="dialogues"
          />
          <keynote v-for="(dialogue, index) in dialogues" :article="dialogue" :index="index" :focus="index===focused"/>
        </div>

        <div class="column left">
          <section v-if="about">
            <h1>{{about.heading}}</h1>
            <div v-html="about.content"/>
          </section>
          <section>
            <h1>Contributors</h1>
            <contributor
              v-for="contributor in contributors"
              :name="contributor.name"
              :biography="contributor.biography"
            />
          </section>
          <section v-if="live">
            <h1>{{live && live.title}}</h1>
            <div v-html="live.content"/>
          </section>
        </div>
      </main>
    </div>
    <div class="contentsWrapper">
      <footer>
        <div class="column left">
          <section id="SiteDetail">
            <h2 class="marginalia">Site Detail</h2>
            <div v-html="footer"></div>
          </section>
        </div>
        <div class="column right">
          <section>
            <h2 class="marginalia">Colophon</h2>
            <div id="Others">
              <div>
                <p>Design: <a href="http://ellasutherland.design/" target="__blank">Ella Sutherland</a><br>
              Programming: <a href="https://github.com/e-e-e" target="__blank">Benjamin Forster</a></p>
              </div>
              <div>
                <p>Source code: <a href="https://github.com/e-e-e/future-souths" target="__blank">Github</a><br>
              Content: <a href="https://future-souths.prismic.io/api" target="__blank">prismic.io</a></p>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import loader from 'components/loader';
import keynote from 'components/keynote';
import contributor from 'components/contributor';
import schedule from 'components/schedule';

export default {
  name: 'app',
  components: {
    loader,
    keynote,
    contributor,
    schedule,
  },
  created() {
    this.getData();
  },
  computed: {
    ...mapState([
      'loading',
      'about',
      'footer',
      'dialogues',
      'contributors',
      'live',
      'schedule',
      'focused',
    ]),
  },
  methods: {
    ...mapActions(['getData']),
  },
};
</script>

<style src="assets/fonts/fonts.css"></style>
<style src="assets/main.scss" lang="scss"></style>
