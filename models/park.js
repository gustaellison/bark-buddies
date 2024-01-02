const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    }
}, {
    timestamps: true
});

const parkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    parkpicture: String,
    size: {
        type: String,
        enum: ['small', 'medium', 'large'],
        required: true
    },
    fee: {
        type: String,
        enum: ['Yes', 'No']
    },
    features: {
        type: [String],
        validate: {
            validator: function (array) {
                const allowedValues = [
                    'Agility Equipment',
                    'Benches',
                    'Dirt',
                    'Fenced',
                    'Grass',
                    'Gravel',
                    'Pond/Lake',
                    'Shade',
                    'Small Dog Area',
                    'Trees',
                    'Turf (artificial grass)',
                    'Wading Pool',
                    'Water Spicket',
                ];
            }
        }
    },
    reviews: [reviewSchema],
    dogs: [{
        type: Schema.Types.ObjectId,
        ref: 'Dog'
    }]
}, {
    timestamps: true
})


module.exports = mongoose.model('Park', parkSchema)