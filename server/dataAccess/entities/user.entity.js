
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: string,
    firstName: string,
    lastName: string,
    salt: string,
    hash: string
});

module.exports = mongoose.model('User', userSchema);