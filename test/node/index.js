describe('Spottr', function () {
    it('should start', function () {
         var Server = require('../../lib/spottr-server');
         var server = new Server();
         server.start();
    });
})
