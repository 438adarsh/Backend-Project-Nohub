const http = require("http");
const port = 9000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "test/plain");
    res.end("Hello World!");
})
server.listen(port, () => {
    console.log("server started at localhost", port);
})


// Created server using http module