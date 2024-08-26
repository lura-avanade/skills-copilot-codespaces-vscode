// Create web server
// Load the comments from the database
// Return the comments to the client

// Load the comments from the database
var comments = require('../data/comments.json');

// Create web server
var express = require('express');
var app = express();

// Return the comments to the client
app.get('/', function(req, res) {
  res.send(comments);
});

app.listen(3000);
console.log('Server is running on port 3000');