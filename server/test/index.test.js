var request = require('supertest');
var app = require('../index');

describe('post request to text api', function() {

  it('returns the text being passed in the body', function(done) {
    request(app).post("/api/texts")
    .send({message: 'Hello World!'})
    .expect(200)
    .expect({message: 'Hello World!'}, done);
  });

  it('returns error if empty message gets passed in the body', function(done) {
    request(app).post("/api/texts")
    .send({message: ''})
    .expect(500)
    .expect({error: 'Message is either undefined or empty'}, done);
  });

  it('returns error if no message gets passed in the body', function(done){
    request(app).post("/api/texts")
    .expect(500)
    .expect({error: 'Message is either undefined or empty'}, done);
  });

});