const http = require('http');
const PORT = process.env.PORT || 9000;
const baseURL = `http://localhost:${PORT}`;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    if (req.url === '/') {
        res.write('Hello word! \n Welcome Nodejs study.');
    } else if (req.url === '/test') {
        res.write('Hello hot load')
    }
    else{
        res.writeHead(400);
        res.write('Not found!');
    }
    res.end();
})

server.listen(PORT, () => console.log(`Server started at port ${PORT}`));