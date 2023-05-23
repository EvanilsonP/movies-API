const Movie = require('../model/Schema');

const welcome = async (req, res) => {
    res.send('Hi!');
};

const createMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        res.status(200).json(movie);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    };
};

const listAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.json(movies);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

const updateMovie = async (req, res) => {
    try {
        const id = req.params.id;
        const movie = await Movie.findByIdAndUpdate(id, req.body);
        if(!movie) {
            return res.status(404).json({message: 'cannot find any movie'})
        }
        res.status(200).json(movie);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

const deleteMovie = async (req, res) => {
    try {
        const id = req.params.id
        const movie = await Movie.findByIdAndDelete(id);
        if(!movie) {
            return res.status(404).json({message: 'cannot find any movie'})
        }
        res.status(200).json(movie);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
}

module.exports = { createMovie, welcome, listAllMovies, deleteMovie, updateMovie };