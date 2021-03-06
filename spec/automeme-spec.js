var automeme = require('../')
  , nock = require('nock');

require('should');

describe('#getMeme default', function() {

  it('should return a promise', function() {
    var promise = automeme.getMeme();

    promise.then.should.exist;
    promise.fail.should.exist;
  });

  it('should also work with a callback', function(done) {
    nock('http://api.automeme.net')
      .get('/text?lines=1')
      .reply(200, 'test');

    automeme.getMeme(function(err, data) {
      data.should.exist;
      data.should.equal('test');

      done();
    });
  });

  it('should fail with invalid response', function(done) {
    nock('http://api.automeme.net')
      .get('/text?lines=1')
      .reply(500);

    automeme.getMeme(function(err) {
      err.should.exist;

      done();
    });
  });

});
