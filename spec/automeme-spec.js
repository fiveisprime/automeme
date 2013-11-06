var automeme = require('../');

describe('automeme', function() {

  describe('#getMeme', function() {

    it('should return a promise', function() {
      var promise = automeme.getMeme();

      expect(promise.then).toBeDefined();
      expect(promise.fail).toBeDefined();
    });
  });
});
