const http = require('http'); // import the http module

// multi-line HTML string using a template literal
const responseBody = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello World!</title>
    </head>
    <body>
        <h1>Hello there!</h1>
    </body>
    </html>
`;

const server = http.createServer((req, res) => {
    // set status code to 200
    res.statusCode = 200;

    // set the content-type header to 'text/html'
    res.setHeader('Content-Type', 'text/html');

    // send the HTML response
    res.write(responseBody);
    res.end(); // end the response
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is listening  on port ${port}`);
})
