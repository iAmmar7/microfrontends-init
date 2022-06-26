const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    host: 'localhost',
  },
  configureWebpack: {
    output: {
      libraryTarget: 'system',
    },
  },
});
