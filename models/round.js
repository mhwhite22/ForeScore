const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const roundSchema = new Schema ({
    course: { type: Schema.Types.ObjectId, ref: 'Course' },
    score: {type: Number},
    dateOfPlay: Date
});

module.exports = mongoose.model('Round', roundSchema);