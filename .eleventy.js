module.exports = (config) => {
  config.addPassthroughCopy("/src/images/");
  config.addPassthroughCopy("/src/styles/");
  config.addPassthroughCopy("images");
  config.addPassthroughCopy("css");

  config.addWatchTarget("/src/styles/");
  config.addWatchTarget("/src/images/");
  // eleventyConfig.addWatchTarget("css");
  // eleventyConfig.addWatchTarget("img");

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
