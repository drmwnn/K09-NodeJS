const port = 3000;
    http = require('http');
    httpStatus = require('http-status-codes'),
    router = require('./Router'),
    fs = require('fs');
    plainTextContentType = {
        "Content-Type": "text/plain"
    },
    htmlContentType = {
        "Content-Type": "text/html"
    },
    customReadFile = (file, res) => {
        fs.readFile(`./${file}`, (error, data) => {
            if (errors) {
                console.log("Error reading the file...");
            }
            res.end(data);
        });
    };

router.get("/", (req, res) => {
    res.writeHead(httpStatus.OK, plainTextContentType);
    res.end("INDEX");
});

router.get("/index.html", (req, res) => {
    res.writeHead(httpStatus.OK, htmlContentType);
    customReadFile("views/index.html", res);
});

router.post("/", (req, res) => {
    res.writeHead(httpStatus.OK, plainTextContentType);
    res.end("POSTED");
});

http.createServer(router.handle).listen(port);

console.log("The server is listening on port number: " + port);