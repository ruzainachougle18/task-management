require('dotenv').config(); // Load environment variables

const express = require("express");
const cors = require('cors');
const connectDB = require("./config/db"); // Import database connection
const userRoutes = require("./routes/userRoutes"); // Import userRoutes
const errorMiddleware = require("./middleware/errorMiddleware"); // Import error handler

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json()); // Parse incoming JSON requests

// API Routes
app.use('/api', userRoutes); // Prefix API routes with '/api'

// Error handling middleware
app.use(errorMiddleware); // Use error handler for catching errors

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
