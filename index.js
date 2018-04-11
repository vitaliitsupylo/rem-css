const replace = require('./modules/replace');

module.exports = (string) => {
    console.log(typeof string, string);
    return replace(string + '');
};
