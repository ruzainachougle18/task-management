// routes/userRoutes.js
const express = require('express');
const { loginUser, registerUser, getProfile } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware');
const taskRoutes = require('./taskRoutes'); // Correct path for taskRoutes

// User routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getProfile); // Protected profile route

// Task routes under /tasks
router.use('/tasks', taskRoutes); // Mount taskRoutes at /tasks

module.exports = router;
