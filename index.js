var https = require('https');
var querystring = require('querystring');
var msg = querystring.escape("Hi there, thank you for sending your first test message from Textlocal. See how you can send effective SMS campaigns here: https://tx.gl/r/2nGVj/");
var number = '7780190248';
var apikey = "NGM1NjRhNmI0OTUyNTE3YTc0NmY2ZTU0NDg0MzRhNjI=";

var sender = '600010';
var data = 'apikey=' + apikey + '&sender=' + sender + '&numbers=' + number + '&message=' + msg
var options = {
    host: 'api.textlocal.in',
    path: '/send?' + data
};
callback = function (response) {
    var str = '';
    //another chunk of data has been recieved, so append it to `str`
    response.on('data', function (chunk) {
        str += chunk;
    });
    //the whole response has been received, so we just print it out here
    response.on('end', function () {
        console.log(str);
    });
}
//console.log('hello js'))
https.request(options, callback).end();