module.exports = {
  filenameHashing: false,
  chainWebpack: (config) => {
    config.externals(["vue", "vue-router"]);
  },
};
