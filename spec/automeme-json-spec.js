var automeme = require('../')
  , nock = require('nock');

require('should');

describe('#getMeme json', function() {

  describe('without count', function() {
    it('should return a promise', function() {
      var promise = automeme.getMeme('json');

      promise.then.should.exist;
      promise.fail.should.exist;
    });

    it('should also work with a callback', function(done) {
      nock('http://api.automeme.net')
        .get('/json?lines=1')
        .reply(200, 'test');

      automeme.getMeme('json', function(err, data) {
        data.should.exist;
        data.should.equal('test');

        done();
      });
    });
  });

  describe('with count', function() {
    it('should return a promise', function() {
      var promise = automeme.getMeme('json', 3);

      promise.then.should.exist;
      promise.fail.should.exist;
    });

    it('should also work with a callback', function(done) {
      nock('http://api.automeme.net')
        .get('/json?lines=4')
        .reply(200, 'test');

      automeme.getMeme('json', 4, function(err, data) {
        data.should.exist;
        data.should.equal('test');

        done();
      });
    });
  });

});
