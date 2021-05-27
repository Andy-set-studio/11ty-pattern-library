// Create a global base directory variable for easier includes
global.__basedir = __dirname;

const markdownFilter = require('./src/filters/markdown-filter.js');

module.exports = config => {
  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  config.addCollection('patterns', collection => {
    return collection.getFilteredByGlob('./src/patterns/**/*.njk');
  });

  config.addFilter('markdownFilter', markdownFilter);

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
