const http = require('http');
const fs = require('fs');

const rqListener = (req, res) => {
    if (req.url === '/') {
        res.write('<!DOCTYPE html>');
        res.write('<html>');
        res.write('<head><title>Welcome</title></head>');
        res.write('<body><form action="/message" method="POST" id="message-form"><input type="text" name="message" /><button type="submit">Send</button></form>');
        
        // Display the submitted message if available
        if (req.method === 'POST') {
            const body = [];
            req.on('data', (chunk) => {
                body.push(chunk);
            });

            req.on('end', () => {
                const parsedBody = Buffer.concat(body).toString();
                const message = parsedBody.split('=')[1];
                res.write(`<p>Message: ${message}</p>`);
            });
        }
        
        res.write('</body></html>');
        return res.end();
    }

    if (req.url === '/message' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('Message.txt', message, (err) => {
                if (err) {
                    console.error('Error writing to file:', err);
                } else {
                    console.log('Message saved to Message.txt:', message);
                }
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
};

const server = http.createServer(rqListener);

server.listen(4000, () => {
    console.log('Server is running on port 4000');
});
