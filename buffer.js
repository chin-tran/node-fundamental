var buffer = new Buffer.from('Bắt đầu', 'utf8');

console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toString('ascii'));
console.log(buffer.toJSON());

buffer.write('chín');
console.log(buffer.toString());