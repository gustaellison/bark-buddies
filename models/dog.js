const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  size: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Dog', dogSchema);