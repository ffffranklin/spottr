/**
 * SpottrServer
 * A tumblr blog proxy that converts XML tumblr logs to JSON
 * @author ffffranklin
 */

var http = require('http');
var url = require('url');
var _ = require('lodash');
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

        var contentURL;
        var urlParts = url.parse(req.url, true);
        var query = urlParts.query;
        var formatter = function (options) {
            var template = _.extend({
                open: '',
                close: ''
            }, options);
            return function (obj) {
                return template.open + JSON.stringify(obj) + template.close;
            }
        };
        var format;

        if (query.hasOwnProperty('callback')) {
            format = formatter({
                open: query.callback + '(',
                close: ');'
            });
        } else {
            format = formatter();
        }

        // check if url path starts with content and has a character after it
        if (req.url.match(/^\/content\/\S+/)) {

            contentURL = _this.getContentURL(req.url);

            if (contentURL) {

                console.log('Spottr: Requesting source of "%s"', contentURL);

                http.get('http://' + contentURL, function (response) {
                    var xml = '';

                    res.writeHeader(200, {"Content-Type": "application/json"});

                    console.log('Spottr: Response received with status code %s', response.statusCode);

                    if (response.statusCode === 200) {
                        response.setEncoding('utf8');
                        response.on('data', function (chunk) {
                            xml += chunk;
                        });
                        response.on('end', function () {
                            var options = {
                                trim: true,
                                // ommit the root node
                                explicitRoot: false,
                                // only put values in array if there are multiple values
                                explicitArray: false
                            };
                            var dataMatch = xml.match(/<data>([\s\S]*)<\/data>/i);
                            var data = dataMatch[0] || void 0;
                            if (!data) throw "Invalid format.  Data xml node not found";

                            // TODO make sure to end response if this 'end' event never happens
                            parseString(data, options, function (err, result) {
                                res.write(format(result));
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
