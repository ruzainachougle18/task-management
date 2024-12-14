// controllers/userController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// User Registration Logic
const registerUser = async (req, res) => {
  console.log('Request body:', req.body); // Log incoming request data
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({
      name,
      email,
      password,
    });

    await user.save();

    res.status(201).json({
      message: 'User registered successfully',
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// User Login Logic
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.json({ message: 'Login successful', token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// User Profile Logic (Protected Route)
const getProfile = async (req, res) => {
  try {
    // Fetch the user from the database using the user ID stored in the JWT
    const user = await User.findById(req.user.userId).select('-password'); // Don't return the password

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send the user profile data in the response
    res.json({
      message: 'User profile fetched successfully',
      data: {
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { registerUser, loginUser, getProfile };
