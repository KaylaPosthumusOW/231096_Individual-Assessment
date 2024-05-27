const express = require('express');
const router = express.Router();
const Toy = require('../models/toy'); // Ensure this path is correct

// Get all toys
router.get('/toys', async (req, res) => {
  try {
    const toys = await Toy.find();
    res.json(toys);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single toy by ID
router.get('/:id', async (req, res) => {
  try {
    const toy = await Toy.findById(req.params.id);
    if (toy) { // Fixed variable name from 'toys' to 'toy'
      res.json(toy);
    } else {
      res.status(404).send('Toy not found');
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new toy
router.post('/', async (req, res) => { // Updated route to handle POST request to create a new toy
  const { name, description, price, image } = req.body;

  try {
    const toy = new Toy({ name, description, price, image });
    await toy.save();
    res.status(201).json(toy);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
