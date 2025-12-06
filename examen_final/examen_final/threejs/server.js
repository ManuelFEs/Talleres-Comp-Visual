const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8000;
const BASE = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

function sendResponse(res, status, data, contentType) {
  const headers = { 'Content-Type': contentType || 'application/octet-stream' };
  // Prevent MIME sniffing in browsers
  headers['X-Content-Type-Options'] = 'nosniff';
  res.writeHead(status, headers);
  res.end(data);
}

const server = http.createServer((req, res) => {
  try {
    const reqUrl = decodeURIComponent(req.url.split('?')[0]);
    let filePath = path.join(BASE, reqUrl === '/' ? 'index.html' : reqUrl);
    let resolved = path.resolve(filePath);
    if (!resolved.startsWith(BASE)) {
      sendResponse(res, 403, 'Forbidden', 'text/plain; charset=utf-8');
      return;
    }

    fs.stat(resolved, (err, stats) => {
      if (err) {
        sendResponse(res, 404, 'Not found', 'text/plain; charset=utf-8');
        return;
      }

      if (stats.isDirectory()) {
        resolved = path.join(resolved, 'index.html');
      }

      fs.readFile(resolved, (err2, data) => {
        if (err2) {
          sendResponse(res, 500, 'Server error', 'text/plain; charset=utf-8');
          return;
        }
        const ext = path.extname(resolved).toLowerCase();
        const type = MIME[ext] || 'application/octet-stream';
        sendResponse(res, 200, data, type);
      });
    });
  } catch (e) {
    sendResponse(res, 500, 'Server error', 'text/plain; charset=utf-8');
  }
});

server.listen(PORT, () => {
  console.log(`Static server running at http://localhost:${PORT}/`);
});
