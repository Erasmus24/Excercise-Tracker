const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercise => res.json(exercise))
        .catch(err => status(400).json('Error' + err));
});

router.route('/add').post((req,res) => {
    const username = req.body.username
})