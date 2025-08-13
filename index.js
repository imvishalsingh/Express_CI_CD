const express = require('express');
const app = express();

// Root routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});