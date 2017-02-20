<template>
  <div id="app">
    <loader :loading="loading"/>
    <div class="contentsWrapper">
      <header>
        <div class="column left">
          <h1>Future Souths</h1>
        </div>
        <div class="column right">
          <h2>Energies of the (Expanding) Global South</h2>
          <nav>
            <a href="#">Freenode</a>
            <a href="#">Contact</a>
            <a href="#">Follow</a>
          </nav>
        </div>
      </header>
      <main>
        <div class="column right">
          <keynote v-for="(article, index) in articles" :article="article" :focus="index===0"/>
        </div>
        <div class="column left">
          <section>
            <h1>About</h1>
            <h2 class="marginalia">About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h2 class="marginalia">Schedule
    0f Dialogues</h2>
            <p>ssdfsd</p>
            <p>ssdfsd</p>
            <p>ssdfsd</p>
            <p>ssdfsd</p>
            <h2 class="marginalia">Contributer Name</h2>
            <p>infoadsf fddsafds</p>
            <a href="#">Continue reading</a>
            <h2 class="marginalia">Contributer Name</h2>
            <p>infoadsf fddsafds</p>
            <a href="#">Continue reading</a>
            <h2 class="marginalia">Contributer Name</h2>
            <p>infoadsf fddsafds</p>
            <a href="#">Continue reading</a>
            <h2 class="marginalia">Contributer Name</h2>
            <p>infoadsf fddsafds</p>
            <a href="#">Continue reading</a>
          </section>
          <section>
            <h1>Reading</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h2 class="marginalia">download</h2>
            <div class="image"></div>
            <a href="#">Link to PDF Download</a>
          </section>
          <section>
            <h1>Freenode</h1>
            <h2 class="marginalia">instructions</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </section>
        </div>
      </main>
    </div>
    <div class="contentsWrapper inverse">
      <footer>
        <div class="column left">
          <section id="SiteDetail">
            <h2 class="marginalia">Site Detail</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>
          </section>
          <section id="Subscribe">
            <h2 class="marginalia">Subscribe</h2>
            <p>FORM</p>
          </section>
        </div>
        <div class="column right">
          <section id="Others">
            <h2 class="marginalia">Other Details</h2>
            <p>icons etc...</p>
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

export default {
  name: 'app',
  components: {
    loader,
    keynote,
  },
  created() {
    this.getData();
  },
  computed: {
    ...mapState(['loading', 'articles']),
  },
  methods: {
    ...mapActions(['getData']),
  },
};
</script>


<style src="assets/fonts/fonts.css"></style>
<style src="assets/main.scss" lang="scss"></style>
<style>

</style>
