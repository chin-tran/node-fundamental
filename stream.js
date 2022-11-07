var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/stream_data.txt', { encoding: 'utf8', highWaterMark: 16 * 1024});
var writeable = fs.createWriteStream(__dirname + '/stream_data_copy.txt');
var compressWriteable = fs.createWriteStream(__dirname + '/stream_data.gz');
var gzip = zlib.createGzip();

// readable.on('data', (chunk) => {
//     console.log(chunk.length + ' bytes');
//     // writeable.write(chunk);
// })

readable.pipe(writeable);
readable.pipe(gzip).pipe(compressWriteable);