const mongoose = require('mongoose');

// Define the schema for your data model
const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    comments: {
        type: String
    }
});

// Create the model based on the schema
const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;