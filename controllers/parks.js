const Park = require('../models/park')
const Dog = require('../models/dog')


module.exports = {
    index,
    show,
    new: newPark,
    create
}

async function index(req, res) {
    const park = await Park.find({});
    res.render('parks/index', { title: 'All Parks', park });
} // a controller for the route. a way to house all the functionalities to the routes

async function show(req, res) {
    const park = await Park.findById(req.params.id).populate('dogs');
    const dogs = await Dog.find()
    // const tickets = await Ticket.find({flight: req.params.id})
    res.render('parks/show', { title: 'Park Info', park, dogs })
}

async function newPark(req, res) {
    res.render('parks/new', { title: 'Add Park' })
}

async function create(req, res) {
    try {
        await Park.create(req.body);
        // Always redirect after CUDing data
        // We'll refactor to redirect to the movies index after we implement it
        res.redirect('/parks');  // Update this line
    } catch (err) {
        // Typically some sort of validation error
        console.log(err);
        res.render('parks/new', { errorMsg: err.message });
    }
}