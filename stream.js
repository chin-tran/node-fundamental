var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/stream_data.txt', { encoding: 'utf8', highWaterMark: 16 * 1024});
var writeable = fs.createWriteStream(__dirname + '/stream_data_copy.txt');

readable.on('data', (chunk) => {
    console.log(chunk.length + ' bytes');
    // writeable.write(chunk);
})