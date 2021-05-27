const markdown = require('markdown-it');
const stripIndent = require('strip-indent');
const renderer = new markdown();

module.exports = (content = '') => {
  const trimmedContent = stripIndent(content);

  return content.split('\n').length > 1
    ? renderer.render(trimmedContent)
    : renderer.renderInline(trimmedContent);
};
