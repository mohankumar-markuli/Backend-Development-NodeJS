const http = require("node:http");

const port = 8080;
const server = http.createServer(function (req, res) {

    if (req.url === '/getSecreatData'){
        res.end("inside secreat data");
        console.log("request on /getSecreatData")
    }
    else{
        res.end("Hello the server is up and running");
        console.log("Main request");
    } 
});

server.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);

});