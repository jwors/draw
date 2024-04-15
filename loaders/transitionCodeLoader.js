const utils = require('loader-utils');

module.exports = function (source) {
  console.log(source);
  const params = utils.getOptions(this);
  console.log(params);
  return source.replace('good', 'very good');
};
