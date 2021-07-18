// const chalk = require('chalk')
// const text = require('./data')
//
// console.log(chalk.blue(text));

const http = require('http');
const fs = require('fs')
const path = require('path')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, "public", req.url === '/' ? 'index.html' : req.url);
  const ext = path.extname(filePath)
  let contentType = 'text/html'

  switch (ext) {
    case '.css':
      contentType = 'text/css'
      break
    case '.js':
      contentType = 'text/javascript'
      break
    default:
      contentType = 'text/html'
  }

  if (!ext) {
    filePath += '.html'
  }

  fs.readFile(filePath, (err, content) => {
      if (err) {
        fs.readFile(path.join(__dirname, "public", "error.html"), (err, data) => {
          if (err) {
            res.writeHead(500)
            res.end('Error')
          } else {
            res.writeHead(200, {
              'Content-Type': 'text/html'
            })
            res.end(data)
          }
        });
      } else {
        res.writeHead(200, {
          'Content-Type': contentType
        })
        res.end(content)
      }
    })
});
const PORT = process.env.PORT || 3000

server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});
