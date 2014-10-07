function SpottrServer(){
    this.port = 8080;
}

SpottrServer.prototype.start = function () {
    console.log('Spottr: Vroom!');
};

module.exports = SpottrServer;
