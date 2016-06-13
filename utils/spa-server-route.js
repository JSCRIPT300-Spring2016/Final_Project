/* eslint-disable */
var path = require('path');
/* eslint-enable */
module.exports = function (file) {
  return function (request, response, next) {
    if (request.method === 'GET' && request.accepts('html')) {
      response.sendFile(file);
    } else {
      next();
    }
  };
};
