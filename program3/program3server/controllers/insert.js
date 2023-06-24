const Data = require('../models/insert');

// Controller actions
const createData = async (req, res) => {
  try {
    const newData = new Data(req.body);

    await newData.save();
    res.send('Data saved successfully!');
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).send('Error saving data');
  }
};

module.exports = {
  createData,
};
