var automeme = require('../')
  , nock = require('nock');

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

});
