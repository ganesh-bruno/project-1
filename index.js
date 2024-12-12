// Import express module
const express = require('express');

// Initialize the express app
const app = express();

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a route for another endpoint
app.get('/about', (req, res) => {
  res.send('About this server');
});

// Set up a simple POST endpoint
app.post('/submit', (req, res) => {
  res.send('Data submitted');
});

// Set the port number for the server
const PORT = process.env.PORT || 3000;

// Start the server and listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

