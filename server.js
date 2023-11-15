const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001; // You can change the port if needed

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle any other routes by serving the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
