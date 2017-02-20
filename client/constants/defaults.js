
export const INITIAL_STATE = { // eslint-disable-line
  loading: false,
  data: {},
  articles: [],
  info: [],
  error: null,
};

export const PRISMIC_ENDPOINT = 'https://future-souths.prismic.io/api';
export const PRISMIC_DEFAULT_OPTIONS = {
  pageSize: 30,
  orderings: '[my.info.lastPublicationDate]',
};
