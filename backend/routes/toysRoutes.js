const express = require("express");
const router = express.Router();
const Toy = require("../models/toy");

// Get all toys
router.get("/", async (req, res) => {
  try {
    const toys = await Toy.find();
    res.json(toys);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single toy by ID
router.get("/:id", async (req, res) => {
  try {
    const toy = await Toy.findById(req.params.id);
    if (toy) {
      res.json(toy);
    } else {
      res.status(404).send("Toy not found");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a toy by ID
router.put("/:id", async (req, res) => {
  try {
    const toyId = req.params.id;
    const updatedToyData = req.body;

    // Update the toy in the database
    const updatedToy = await Toy.findByIdAndUpdate(toyId, updatedToyData, { new: true });

    if (!updatedToy) {
      return res.status(404).json({ message: "Toy not found" }); // Return JSON response with error message
    }

    res.json(updatedToy); // Return the updated toy data
  } catch (error) {
    console.error("Error updating toy:", error);
    res.status(500).json({ message: "Failed to update toy" });
  }
});

// Delete a toy by ID
router.delete("/:id", async (req, res) => {
  try {
    const toy = await Toy.findByIdAndDelete(req.params.id);
    if (!toy) {
      return res.status(404).send("Toy not found");
    }
    res.json({ message: "Toy deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
