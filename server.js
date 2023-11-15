const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3001; // You can change the port if needed

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Parse incoming JSON requests
app.use(bodyParser.json());

// Handle any other routes by serving the index.html file
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/api/contact', (req, res) => {
  console.log('Request Body:', req.body);

  const dataFilePath = path.join(__dirname, 'contact.json');

  const { firstName, lastName, email, message } = req.body;

  const formData = {
    firstName,
    lastName,
    email,
    message,
    timestamp: new Date(),
  };

  // Read existing data from the file
  let existingData = [];
  try {
    existingData = JSON.parse(fs.readFileSync(dataFilePath));
  } catch (error) {
    console.error('Error reading data file:', error);
  }

  // Add new form data to the existing data
  existingData.push(formData);

  // Write the updated data back to the file
  fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2));

  // Send a success response
  res.json({ success: true });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
