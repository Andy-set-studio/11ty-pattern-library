const nunjucks = require('nunjucks');
const fs = require('fs');
const path = require('path');

module.exports = {
  navItems(collection) {
    return collection.filter(x => !x.inputPath.includes('variants'));
  },
  getVariants(item, collection) {
    const basePath = item.filePathStem
      .split('/')
      .filter(x => x.length)
      .slice(0, 2)
      .join('/');

    return collection.filter(
      x =>
        x.filePathStem.indexOf(`/${basePath}`) === 0 &&
        x.filePathStem.includes('variants')
    );
  },
  render(item) {
    console.log(item);
    const markup = fs.readFileSync(
      `${__basedir}${item.inputPath.replace('./', '/')}`,
      'utf8'
    );

    return nunjucks.renderString(markup, {data: item.data});
  },
  renderSource(item) {
    const markup = fs.readFileSync(
      `${__basedir}${item.inputPath.replace('./', '/')}`,
      'utf8'
    );

    return markup;
  },
  getDocs(item) {
    const docsPath = `${__basedir}/src/${item.template.fileSlug.dirs.join('/')}/docs.md`;

    if (!fs.existsSync(docsPath)) {
      return null;
    }

    const docsContent = fs.readFileSync(docsPath, 'utf8');

    return docsContent;
  }
};
