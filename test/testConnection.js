var request = require('request');
var expect = require('chai').expect;


var server = require('../bin/www').getServer;

describe('server response', function () {
  before(function () {
    server.listen(8000);
  });

  after(function () {
    server.close();
  });

  it('should return 200', function (done) {
    request.get('http://localhost:3000', function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});
