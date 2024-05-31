const express = require("express");
const router = express.Router();
const Bed = require("../models/Bed");

// Get all beds
router.get("/", async (req, res) => {
    try {
        const beds = await Bed.find();
        res.json(beds);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

// Get a single bed by ID
router.get('/:id', async (req, res) => {
    try {
      const bed = await Bed.findById(req.params.id);
      if (bed) { 
        res.json(bed);
      } else {
        res.status(404).send('Bed not found');
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  module.exports = router;