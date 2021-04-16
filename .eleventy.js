const cleancss = require('clean-css');

/**
 * @param eleventyConfig
 * @returns {{dir: {output: string, input: string}}}
 * @see {@link https://www.11ty.dev/docs/config|Configuration}
 */
module.exports = function (eleventyConfig) {
    // Filters
    eleventyConfig.addFilter('cssmin', function (code) {
        return new cleancss({}).minify(code).styles;
    });

    // Passthroughs
    eleventyConfig.addPassthroughCopy({
        './src/css/modern-normalize.css': './modern-normalize.css',
        './src/css/style.css': './style.css'
    });

    return {
        dir: {
            input: 'src',
            output: 'dist'
        }
    };
};
