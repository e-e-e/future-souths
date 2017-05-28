
export const INITIAL_STATE = { // eslint-disable-line
  loading: false,
  data: null,
  dialogues: [],
  contributors: [],
  about: null,
  footer: null,
  schedule: null,
  live: null,
  focused: -1,
  error: null,
};

export const PRISMIC_ENDPOINT = 'https://future-souths.prismic.io/api';
export const PRISMIC_DEFAULT_OPTIONS = {
  pageSize: 30,
  orderings: '[my.info.lastPublicationDate]',
};
