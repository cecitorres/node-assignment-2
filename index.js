// 1. Make a node project /
// 2. Create a node server
// 3. Create an index.html file with some dummy HTML Code
// 4. Try to use File system module to test
// a. Read (should be on http://localhost:5000/read)
// b. Update (should be on http://localhost:5000/update)
// c. Delete (should be on http://localhost:5000/delete)
// d. Create (should be on http://localhost:5000/create)
// e. Rename (should be on http://localhost:5000/rename)
// 5. Note send proper response to client in case of Update, Delete, Create and Rename

const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  if (req.url === '/read') {
    fs.readFile('index.html', (error, data) => {
      if (error) throw error;
      res.end(data);
    });
  } else if (req.url === '/update') {
    fs.writeFile('index.html', '<h1>Update</h1>', (error) => {
      if (error) throw error;
      res.end('<h1>Update</h1>');
    });
  } else if (req.url === '/delete') {
    fs.unlink('index.html', (error) => {
      if (error) throw error;
      res.end('<h1>Delete</h1>');
    });
  } else if (req.url === '/create') {
    fs.writeFile('index.html', '<h1>Read</h1>', (error) => {
      if (error) throw error;
      res.end('<h1>Create</h1>');
    });      
  } else if (req.url === '/rename') {
    fs.rename("index.html", 'home.html', (error) => {
      if (error) throw error;
      res.end('<h1>Rename</h1>');
    });
  }  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});