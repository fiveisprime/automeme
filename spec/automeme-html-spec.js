var automeme = require('../')
  , nock = require('nock');

describe('#getMeme html', function() {

  describe('without count', function() {
    it('should return a promise', function() {
      var promise = automeme.getMeme('html');

      promise.then.should.exist;
      promise.fail.should.exist;
    });

    it('should also work with a callback', function(done) {
      nock('http://api.automeme.net')
        .get('/html?lines=1')
        .reply(200, 'test');

      automeme.getMeme('html', function(err, data) {
        data.should.exist;
        data.should.equal('test');

        done();
      });
    });
  });

  describe('with count', function() {
    it('should return a promise', function() {
      var promise = automeme.getMeme('html', 3);

      promise.then.should.exist;
      promise.fail.should.exist;
    });

    it('should also work with a callback', function(done) {
      nock('http://api.automeme.net')
        .get('/html?lines=3')
        .reply(200, 'test');

      automeme.getMeme('html', 3, function(err, data) {
        data.should.exist;
        data.should.equal('test');

        done();
      });
    });
  });

});
