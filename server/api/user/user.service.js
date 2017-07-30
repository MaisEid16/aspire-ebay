
const model = require('./user.model');
const entity = require('../../dataAccess/entities/user.entity');
const bcrypt = require('bcrypt');
const Promise = require('bluebird');

module.exports.signup = ({ email, firstName, lastName, password }) => {
    this.findByEmail(email).then((result) => {
        if (result) return Promise.reject('This email already taken!');
        return bcrypt.genSalt().then((salt) => {
            return bcrypt.hash(password, salt).then((hashed) => {
                let e = model.toEntity({email, firstName, lastName});
                e.salt = salt;
                e.hash = hashed;
                return e.save();
            })
        });
    })
};

this.findByEmail = (email) => {
    return entity.find({ 'email': email }).exec().then(result => result);
};