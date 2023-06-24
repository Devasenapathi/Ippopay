const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  // Define the fields for your data
  userName: String,
  password: String,
  // ...
});

const Data = mongoose.model('Program3', dataSchema);

module.exports = Data;