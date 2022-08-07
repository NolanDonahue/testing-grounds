module.exports = (config) => {
  // TODO mess around with passthrough once CSS figured out
  // config.addPassthroughCopy("/src/images/");
  // config.addPassthroughCopy("src/styles");
  // config.addPassthroughCopy("images");
  // config.addPassthroughCopy("styles");

  config.addPassthroughCopy("root.css");

  // TODO research how to have CSS update in npm start automatically
  config.addWatchTarget("/src/styles/");
  config.addWatchTarget("/src/images/");
  config.addWatchTarget("css");
  config.addWatchTarget("img");

  return {
    // TODO the next 3 lines, look up them
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};

// TODO finish figuring out CSS and then play with this
// const CleanCSS = require("clean-css");
// module.exports = function (eleventyConfig) {
//   eleventyConfig.addFilter("cssmin", function (code) {
//     return new CleanCSS({}).minify(code).styles;
//   });
// };
