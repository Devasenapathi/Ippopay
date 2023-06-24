const express = require('express');
const dataController = require('../controllers/insert');
const router = express.Router();

// Create a new data record
router.post('/data', dataController.createData);

module.exports = router;
