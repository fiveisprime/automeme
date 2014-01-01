var request = require('request')
  , Q       = require('q');

const AUTOMEME_URL = 'http://api.automeme.net/';

exports.getMeme = function(type, count, fn) {
  var deferred = Q.defer();

  if (!type) type = 'text';
  if (!count) count = 1;

  if (typeof type === 'function') {
    fn = type;
    type = 'text';
    count = 1;
  }

  if (typeof count === 'function') {
    fn = count;
    count = 1;
  }

  var opts = {
    url: AUTOMEME_URL + type
  , method: 'GET'
  , qs: {
      lines: count
    }
  };

  request(opts, function(err, response, body) {
    if (err) return deferred.reject(err);
    if (response.statusCode !== 200) return deferred.reject(body);
    deferred.resolve(body);
  });

  return deferred.promise.nodeify(fn);
};
