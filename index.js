'use strict';

var config = require('config');
var watson = require('watson-developer-cloud');
var fs = require('fs');

var speechToText = watson.speech_to_text(config.get('watson'));

var params = {
  content_type: 'audio/wav'
};

// create the stream
var recognizeStream = speechToText.createRecognizeStream(params);

// pipe in some audio
fs.createReadStream(__dirname + '/resources/speech.wav').pipe(recognizeStream);

// and pipe out the transcription
recognizeStream.pipe(fs.createWriteStream('transcription.txt'));


// listen for 'data' events for just the final text
// listen for 'results' events to get the raw JSON with interim results, timings, etc.

recognizeStream.setEncoding('utf8'); // to get strings instead of Buffers from `data` events

['data', 'results', 'error', 'connection-close'].forEach(function(eventName) {
  recognizeStream.on(eventName, console.log.bind(console, eventName + ' event: '));
});
