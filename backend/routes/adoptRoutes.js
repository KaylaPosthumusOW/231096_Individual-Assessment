const express = require('express');
const router = express.Router();
const Adopt = require('../models/Adopt');

// Get all adoptions
router.get('/', async (req, res) => {
    try {
        const adopts = await Adopt.find();
        res.status(200).json(adopts);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Create a new Adoption
router.post('/addAdoption', async (req, res) => {
    console.log("POST /adopt called with data:", req.body);

    // Destructure the required fields from the request body
    const { name, age, breed, gender, description, image } = req.body;

    try {
        // Create a new instance of the Adopt model with the provided data
        const adopt = new Adopt({ 
            name,
            age,
            breed,
            gender,
            description,
            image,
        });

        // Save the new adoption instance to the database
        await adopt.save();

        // Respond with the saved adoption instance
        res.status(201).json(adopt);
    } catch (err) {
        // Handle any errors that occur during saving
        console.error("Error saving adoption:", err);
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
