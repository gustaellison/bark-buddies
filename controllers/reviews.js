const Park = require('../models/park');

module.exports = {
  create
};

async function create(req, res) {
  const park = await Park.findById(req.params.id);
  // We can push (or unshift) subdocs into Mongoose arrays
  park.reviews.push(req.body);
  try {
    // Save any changes made to the movie doc
    await park.save();
  } catch (err) {
    console.log(err);
  }
  // Step 5:  Respond to the Request (redirect if data has been changed)
  res.redirect(`/parks/${park._id}`);
}