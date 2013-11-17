var automeme = require('../');

describe('automeme', function() {

  describe('#getMeme', function() {

    it('should return a promise', function() {
      var promise = automeme.getMeme();

      expect(promise.then).toBeDefined();
      expect(promise.fail).toBeDefined();
    });

    it('should also work with a callback', function(done) {
      automeme.getMeme(function(err, data) {
        expect(data).toBeDefined();
        done();
      });
    });

  });
});
