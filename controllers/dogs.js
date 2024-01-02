const Dog = require('../models/dog');
const Park = require('../models/park');

module.exports = {
    new: newDog,
    create,
    addToPark,
    delete: removeFromPark
};

async function removeFromPark(req, res){
    const park = await Park.findById(req.params.id)
    park.dogs.remove(req.params.dId);
    await park.save();
	res.redirect(`/parks/${park._id}`)
}

async function addToPark(req, res) {
    const park = await Park.findById(req.params.id);
    // The cast array holds the performer's ObjectId (referencing)
    park.dogs.push(req.body.dogId);
    await park.save();
    res.redirect(`/parks/${park._id}`);
}

async function newDog(req, res) {
    //Sort performers by their name
    const dogs = await Dog.find({}).sort('name');
    res.render('dogs/new', { title: 'Add Dog', dogs });
}

async function create(req, res) {
    // Need to "fix" date formatting to prevent day off by 1
    // This is due to the <input type="date"> returning the date
    // string in this format:  "YYYY-MM-DD"
    // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
    // Fix by either reformatting to "MM-DD-YYYY" or by 
    // appending a "time" fragment like this... 
    req.body.born += 'T00:00';
    try {
        await Dog.create(req.body);
    } catch (err) {
        console.log(err);
    }
    res.redirect('/dogs/new');
}