module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/sass/abstract/_variables.scss";`
      }
    }
  }
};
