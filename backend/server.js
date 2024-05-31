const dotenv = require('dotenv');
dotenv.config();
console.log("MongoDB URI:", process.env.MONGO_URI);

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors middleware


const app = express(); // Create express app instance
const port = process.env.PORT || 5000;


// Use cors middleware
app.use(cors());

// Middleware
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI, {})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Message that ensures everything is working.
app.get("/", (req, res) => {
  res.send("Express server is running and ready to receive requests");
});

// Routes
const toysRoutes = require("./routes/toysRoutes")
app.use("/toys", toysRoutes);

const bedRoutes = require("./routes/bedRoutes")
app.use("/beds", bedRoutes);

const adoptRoutes = require("./routes/adoptRoutes");
app.use('/adopt', adoptRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
app.get('/', (req, res) => {
  res.send('Welcome to the backend server');
});