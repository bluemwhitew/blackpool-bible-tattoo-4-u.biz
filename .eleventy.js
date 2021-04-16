/**
 * @param eleventyConfig
 * @returns {{dir: {output: string, input: string}}}
 * @see {@link https://www.11ty.dev/docs/config|Configuration}
 */
module.exports = function (eleventyConfig) {
    // Passthroughs
    eleventyConfig.addPassthroughCopy({ './tmp/style.css': './style.css' });

    // Watch Targets
    eleventyConfig.addWatchTarget('./tmp/style.css')

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    };
};
