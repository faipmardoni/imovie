const config = {
  publicRuntimeConfig: {
    apiKey: process.env.OMDB_APIKEY || '',
  },
  pageExtensions: ['tsx'],
};

module.exports = config;
