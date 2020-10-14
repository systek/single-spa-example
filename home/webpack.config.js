const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "Systek",
    projectName: "home",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    externals: ["react", "react-dom", "@Systek-styles"],
  });
};
