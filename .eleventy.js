// Create a global base directory variable for easier includes
global.__basedir = __dirname;

module.exports = config => {
  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  config.addCollection('patterns', collection => {
    return collection.getFilteredByGlob('./src/patterns/**/*.njk');
  });

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
