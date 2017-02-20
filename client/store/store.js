import Vue from 'vue';
import Vuex from 'vuex';
import prismic from 'prismic.io';

import { INITIAL_STATE, PRISMIC_ENDPOINT, PRISMIC_DEFAULT_OPTIONS } from 'constants/defaults';
import { processArticles, processInfoSections } from 'lib/utils';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: INITIAL_STATE,
  mutations: {
    setLoading: (state, payload) => {
      state.loading = payload;
    },
    setData: (state, payload) => {
      state.data = payload;
    },
    setArticles: (state, payload) => {
      state.articles = payload;
    },
    setInfo: (state, payload) => {
      state.info = payload;
    },
    setError: (state, payload) => {
      state.error = payload;
    },
  },
  actions: {
    getData: ({ commit }) => {
      commit('setLoading', true);
      prismic.api(PRISMIC_ENDPOINT)
        .then(api =>
          Promise.all([
            api.query(
              prismic.Predicates.at('document.type', 'information'),
              PRISMIC_DEFAULT_OPTIONS,
            ),
            api.query(
              prismic.Predicates.at('document.type', 'article'),
              PRISMIC_DEFAULT_OPTIONS,
            ),
          ])
        )
        .then((result) => {
          commit('setInfo', processInfoSections(result[0]));
          commit('setArticles', processArticles(result[1]));
          commit('setLoading', false);
        })
        .catch((error) => {
          console.log('error', error);
          commit('setError', error);
          commit('setLoading', false);
        });
    },
  },
});

export default store;
