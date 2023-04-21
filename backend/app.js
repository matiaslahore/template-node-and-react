const express = require('express');
const app = express();

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Frontend App Port
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Parse JSON request bodies
app.use(express.json());

// Add routers
app.get('/', async (req, res) => {
  res.status(200).json("hi there!");
})

// Start the server
app.listen(3001, () => {
  console.log(`Server listening on port 3001`);
});

module.exports = app;
