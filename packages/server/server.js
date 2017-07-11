var http = require('http');
const Speech = require('@google-cloud/speech');

var requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!\n');
}



var server = http.createServer(requestListener)
server.listen(8080);
console.log('running on http://localhost:8080')
var websocket = require('websocket-stream')
var wss = websocket.createServer({server}, handleClientConnection)

function handleClientConnection(stream, request) {

    // commented code is google stuff, no time to figure that out now

    // const googleRequest = {
    //     config: {
    //         // encoding: encoding,
    //         // sampleRateHertz: sampleRateHertz,
    //         // languageCode: languageCode
    //     },
    //     interimResults: false // If you want interim results, set this to true
    // };
    // const recognizeStream = speech.createRecognizeStream(googleRequest)
    // .on('error', console.error)
    // .on('data', (data) => process.stdout.write(data.results));


    stream.on('data', (data) => {
        console.log('got data', data)
    })
    // pipe to google
    // stream.pipe(recognizeStream)
    stream.write('handshake')

}
// AIzaSyBCBjTZSonJBgzyLesOwqgo7V9flZx9gPY
