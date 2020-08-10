module.exports = function(eleventyConfig) {
    eleventyConfig.addShortcode("greet", function(entity) {
        return entity + "!";
    });

    return {
        pathPrefix: "/",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        dir: {
            input: "source",
            output: "_site",
            includes: "_includes",
            layouts: "_layouts",
            data: "_data"
        }
    };
}