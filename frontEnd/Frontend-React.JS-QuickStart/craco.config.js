module.exports = {
  webpack: {
    resolve: {
      fallback: {
        url: require.resolve("url/"),
      },
    },
    configure: (webpackConfig, { env, paths }) => {
      if (env === "production") {
        // Disable React Refresh in production
        const reactRefreshPluginIndex = webpackConfig.plugins.findIndex(
          (plugin) => plugin.constructor.name === "ReactRefreshPlugin"
        );
        if (reactRefreshPluginIndex !== -1) {
          webpackConfig.plugins.splice(reactRefreshPluginIndex, 1);
        }
      }
      return webpackConfig;
    },
  },
};
