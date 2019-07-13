import http from "http";

const port = 3000;

const generateNumber = (min: number, max: number) => Math.floor(Math.random() * (+max - +min)) + +min;

const server = http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Request-Method', '*');
    response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    response.setHeader('Access-Control-Allow-Headers', '*');
    if ( request.method === 'OPTIONS' ) {
        response.writeHead(200);
        response.end();
        return;
    }
    const operations = ["+", "-", "*", "/"];
    const a = generateNumber(1, 1000);
    const b = generateNumber(1, 1000);
    const operation = operations[generateNumber(0, operations.length)];

    response.end(JSON.stringify({
        operation: `${a} ${operation} ${b}`
    }))
});

server.listen(port, () => {
    console.log(`server is listening on ${port}`)
});
