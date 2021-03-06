const svgContents = require("eleventy-plugin-svg-contents");

module.exports = function(config) {
    config.addPlugin(svgContents);

    config.addCollection('posts', collection => {
      return collection.getFilteredByGlob('posts/*.md').reverse();
    });
    config.addCollection('sponsors', collection => {
      return collection.getFilteredByGlob('sponsors/*.md');
    });

    config.addFilter("slice", require("./filters/slice.js"));
    config.addFilter("lookup", require("./filters/lookup.js"));
    // config.addFilter("contents", require("./filters/contents.js"));
    config.addFilter("military", require("./filters/military.js"));
    config.addPassthroughCopy("images");
    config.addPassthroughCopy("./admin");

    return {
        dir: {
          input: ".",
          output: "dist",
          includes: "templates"
        },
        templateFormats : ["html", "md", "css", "liquid"],
        htmlTemplateEngine : "liquid",
        markdownTemplateEngine : "liquid"
      };
}