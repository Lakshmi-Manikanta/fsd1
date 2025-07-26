const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Node.js Server</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    color: #333;
                    padding: 40px;
                    max-width: 800px;
                    margin: auto;
                }
                h1 {
                    color: #007ACC;
                }
                p {
                    line-height: 1.6;
                }
                .timestamp {
                    font-weight: bold;
                    color: #555;
                }
            </style>
        </head>
        <body>
            <h1>Welcome to Node.js Server</h1>
            <p>This is a basic web server created using Node.js <code>http</code> module.</p>
            <p class="timestamp">Current time: ${new Date().toLocaleString()}</p>
        </body>
        </html>
    `);
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
