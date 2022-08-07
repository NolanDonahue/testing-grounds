module.exports = (config) => {
  // config.addPassthroughCopy("/src/images/");
  // config.addPassthroughCopy("src/styles");
  // config.addPassthroughCopy("images");
  // config.addPassthroughCopy("styles");

  config.addWatchTarget("/src/styles/");
  config.addWatchTarget("/src/images/");
  config.addWatchTarget("css");
  config.addWatchTarget("img");

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};

// const CleanCSS = require("clean-css");
// module.exports = function (eleventyConfig) {
//   eleventyConfig.addFilter("cssmin", function (code) {
//     return new CleanCSS({}).minify(code).styles;
//   });
// };
