var request = require('supertest');

describe('loading express', function () {
    var server; //server

    // start the server for each run
    beforeEach(function () {
        delete require.cache[require.resolve('./server.js')];
        server = require('./server.js');
    });

    // stop the server after each run
    afterEach(function () {
        server.close();
    });

    // test the route endpoint
    it('responds to "/api/favorites/" with json', function (done) {
        request(server)
            .get('/api/favorites/')
            .set('Accept', 'application/json')

            // verification of the return values
            .expect('Content-Type', /json/)
            .expect(200, done) // integration
    });

    // test the /health endpoint
    it('responds to "/api/search/jack+johnson/music/" with json', function (done) {
        request(server)
            .get('/api/search/jack+johnson/music')
            .set('Accept', 'application/json')
            // verification of the return values
            .expect('Content-Type', /json/)
            .expect(200, done)
    });
});