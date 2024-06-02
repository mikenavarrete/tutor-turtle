const mongoose = require('mongoose');

const { Schema } = mongoose;

const tutorSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    bio: {
        type: String,
    },
    subjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
    }],
    availability: [{
        day: {
            type: String,
            enum: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday', 'Sunday'],
        },
        startTime: {
            type: String,
        },
        endTime: {
            type: String,
        },
    }],
    rating: {
        type: Number,
        default:0,
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
    }],
});
const Tutor = mongoose.model('Tutor',tutorSchema);

module.exports = Tutor;