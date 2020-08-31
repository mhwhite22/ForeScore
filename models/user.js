const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema ({
    name: String,
    email: String,
    googleId: String,
    rounds: [{ type: Schema.Types.ObjectId, ref: 'Round'}]
})


module.exports = mongoose.model('User', userSchema);