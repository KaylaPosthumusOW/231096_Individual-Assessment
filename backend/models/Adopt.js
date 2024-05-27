const mongoose = require('mongoose');

const AdoptSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: String, required: true },
    breed: { type: String, required: true },
    gender: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
});

module.exports = mongoose.model('Adopt', AdoptSchema);