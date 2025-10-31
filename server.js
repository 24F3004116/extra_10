// server.js
const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  // Set the Content-Type header to text/plain
  res.set('Content-Type', 'text/plain');

  // Send the response as plain text
  res.send(
    'Hello from Codespaces!\n' +
    'Email: 24f3004116@ds.study.iitm.ac.in'
  );
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${port}`);
});