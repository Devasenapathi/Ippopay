const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routers/insert')

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/program3', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define a schema for your data
const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
});

// CRUD operations
// Create
app.use('/api',routes);



// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
