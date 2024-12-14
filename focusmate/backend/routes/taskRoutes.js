const express = require('express');
const { createTask } = require('../controllers/taskController'); // Correct path to taskController
const { protect } = require('../middleware/authMiddleware'); // Protect middleware
const router = express.Router();

// Check if createTask is correctly imported
console.log('createTask imported:', createTask); // Log to check if it's imported correctly

// POST /tasks route
router.post('/',protect, createTask); // This will use the imported createTask

module.exports = router;
