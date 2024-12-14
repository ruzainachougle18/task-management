const Task = require('../models/Task');

// Controller for creating a task
const createTask = async (req, res) => {
  console.log("createTask function called"); // Debug log to verify function is called

  const { title, description } = req.body; // Destructure title and description from request body

  // Validate inputs
  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }

  // Validate user
  if (!req.user || !req.user.userId) {
    return res.status(401).json({ message: 'Unauthorized. User not found.' });
  }

  try {
    // Create a new task
    const newTask = new Task({
      title,
      description,
      user: req.user.userId, // Attach user ID from the token
    });

    await newTask.save(); // Save to the database
    res.status(201).json(newTask); // Return the created task
  } catch (err) {
    console.error("Error in createTask:", err); // Log the error
    res.status(500).json({ message: 'Server error. Unable to create task.' });
  }
};

module.exports = { 
  createTask, // Ensure the function is exported
};
