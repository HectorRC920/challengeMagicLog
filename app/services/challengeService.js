const crypto = require('crypto');

const generateSHA1Hash = (string) => {
  const hash = crypto.createHash('sha1');
  hash.update(string);
  return hash.digest('hex');
}
const createFinalString = (items, individualRegex) => {
  const initialValue = '';
  return items.reduce((acc = '', item) => {
    let { key } = individualRegex.exec(item).groups;
    return acc + key
  }, initialValue);
}


module.exports = { generateSHA1Hash, createFinalString};