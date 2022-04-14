const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    timings: {
        type:String,
        required: true
    },
    duration: {
        type:String,
        required: true
    },
    fees: {
        type:Number,
        required: true
    },
    techStack: {
        type:[String],
        required: true
    },
    tags: {
        type:[String],
        required: true
    },
});


module.exports = mongoose.model('Course',courseSchema);
