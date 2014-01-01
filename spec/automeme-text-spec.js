var automeme = require('../')
  , nock = require('nock');

describe('#getMeme text', function() {

  describe('without count', function() {
    it('should return a promise', function() {
      var promise = automeme.getMeme('text');

      promise.then.should.exist;
      promise.fail.should.exist;
    });

    it('should also work with a callback', function(done) {
      nock('http://api.automeme.net')
        .get('/text?lines=1')
        .reply(200, 'test');

      automeme.getMeme('text', function(err, data) {
        data.should.exist;
        data.should.equal('test');

        done();
      });
    });
  });

  describe('with count', function() {
    it('should return a promise', function() {
      var promise = automeme.getMeme('text', 3);

      promise.then.should.exist;
      promise.fail.should.exist;
    });

    it('should also work with a callback', function(done) {
      nock('http://api.automeme.net')
        .get('/text?lines=2')
        .reply(200, 'test');

      automeme.getMeme('text', 2, function(err, data) {
        data.should.exist;
        data.should.equal('test');

        done();
      });
    });
  });

});