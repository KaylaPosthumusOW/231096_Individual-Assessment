const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Import cors middleware

dotenv.config();

const app = express(); // Create express app instance

// Use cors middleware
app.use(cors());

const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Routes
const toysRouter = require("./routes/toysRouter")
app.use("/Toys", toysRouter);

const adoptRoutes = require('./routes/adoptRoutes');
app.use('/adopt', adoptRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
app.get('/', (req, res) => {
  res.send('Welcome to the backend server');
});