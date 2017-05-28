import Vue from 'vue';
import Vuex from 'vuex';
import prismic from 'prismic.io';

import { INITIAL_STATE, PRISMIC_ENDPOINT, PRISMIC_DEFAULT_OPTIONS } from 'constants/defaults';
import { processDialogues, processContributors, processFooter, processAbout, processLiveDialogues, processSchedule } from 'lib/utils';

Vue.use(Vuex);

const queries = [
  {
    name: 'about',
    action: 'setAbout',
    query: prismic.Predicates.at('document.type', 'about'),
    opts: {},
    transform: processAbout,
  },
  {
    name: 'footer',
    action: 'setFooter',
    query: prismic.Predicates.at('document.type', 'footer'),
    opts: {},
    transform: processFooter,
  },
  {
    name: 'schedule',
    action: 'setSchedule',
    query: prismic.Predicates.at('document.type', 'schedule'),
    opts: {},
    transform: processSchedule,
  },
  {
    name: 'liveDialogues',
    action: 'setLiveDialogues',
    query: prismic.Predicates.at('document.type', 'live-discussions'),
    opts: {},
    transform: processLiveDialogues,
  },
  {
    name: 'dialogues',
    action: 'setDialogues',
    query: prismic.Predicates.at('document.type', 'dialogue'),
    opts: { orderings: '[my.dialogue.time]' },
    transform: processDialogues,
  },
  {
    name: 'contributors',
    action: 'setContributors',
    query: prismic.Predicates.at('document.type', 'contributor'),
    opts: { orderings: '[my.contributor.name]' },
    transform: processContributors,
  },
];

const store = new Vuex.Store({
  state: INITIAL_STATE,
  mutations: {
    setLoading: (state, payload) => {
      state.loading = payload;
    },
    setData: (state, payload) => {
      state.data = payload;
    },
    setDialogues: (state, payload) => {
      state.dialogues = payload;
    },
    setAbout: (state, payload) => {
      state.about = payload;
    },
    setFooter: (state, payload) => {
      state.footer = payload;
    },
    setContributors: (state, payload) => {
      state.contributors = payload;
    },
    setSchedule: (state, payload) => {
      state.schedule = payload;
    },
    setLiveDialogues: (state, payload) => {
      state.live = payload;
    },
    setFocused: (state, payload) => {
      state.focused = payload;
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
          Promise.all(queries.map(q => api.query(q.query, {
            ...PRISMIC_DEFAULT_OPTIONS,
            ...q.opts,
          })))
        )
        .then((results) => {
          results.forEach((result, index) => {
            const meta = queries[index];
            commit(meta.action, meta.transform(result));
          });
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
