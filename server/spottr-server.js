/**
 * SpottrServer
 * A tumblr blog proxy that converts XML tumblr logs to JSON
 * @author ffffranklin
 */

var http = require('http');
var parseString = require('xml2js').parseString;

function SpottrServer(){
    this.host = 'localhost';
    this.port = 8080;
}

SpottrServer.prototype.getContentURL = function (url) {
    // returns [1] as undefined if no greater than 0 in length
    return url.match('^/content\/(.*){0,}')[1];
};

SpottrServer.prototype.start = function () {

    var _this = this;

    http.createServer(function (req, res) {

        var url;

        // check if url path starts with content and has a character after it
        if (req.url.match(/^\/content\/\S+/)) {

            url = _this.getContentURL(req.url);

            if (url) {

                console.log('Spottr: Requesting source of "%s"', url);

                http.get('http://' + url, function (response) {
                    var xml = '';

                    res.writeHeader(200, {"Content-Type": "text/plain"});

                    console.log('Spottr: Response received with status code %s', response.statusCode);

                    if (response.statusCode === 200) {
                        response.setEncoding('utf8');
                        response.on('data', function (chunk) {
                            xml += chunk;
                        });
                        response.on('end', function () {
                            // TODO make sure to end response if this 'end' event never happens
                            parseString(xml, function (err, result) {
                                console.log(result);
                                // TODO Fix this
                                res.write(xml);
                                res.end();
                            });
                        })
                    } else {
                        res.write('Didn\'t work');
                        res.end();
                    }
                }).on('error', function (e) {
                    console.log('Got error: ' + e.message);
                });

            }
        } else {
            res.write('404');
            res.end();
        }

    }).listen(this.port);

    console.log('Spottr: Created Server "http://localhost:%s"', this.port);
};

module.exports = SpottrServer;
