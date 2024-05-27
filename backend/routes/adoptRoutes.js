const express = require('express');
const router = express.Router();
const Adopt = require('../models/adopt');

// Get all adoptions
router.get('/', async (req, res) => {
    try {
        const adopt = await Adopt.find();
        res.status(200).json(adopt);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Create a new Adoption
router.post('/addAdoption', async (req, res) => {
    const { name, age, breed, gender, description, image } = req.body;

    try {
        const adopt = new Adopt({ name, age, breed, gender, description, image });
        await adopt.save();
        res.status(201).json(adopt);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
