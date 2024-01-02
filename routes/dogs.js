const express = require('express');
const router = express.Router();
const dogsCtrl = require('../controllers/dogs');

// This router is mounted to a "starts with" path of '/'

// GET /performers/new (new functionality)
router.get('/dogs/new', dogsCtrl.new);
// POST /performers (create functionality)
router.post('/dogs', dogsCtrl.create);
// POST /movies/:id/performers (associate a performer with a movie)
router.post('/parks/:id/dogs', dogsCtrl.addToPark);

module.exports = router;