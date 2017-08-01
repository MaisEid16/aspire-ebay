
const signupModel = require('./models/signup.model');
const bcrypt = require('bcrypt');
const Promise = require('bluebird');
const usersRepo = require('../../dataAccess/user/user.repository');

module.exports.signup = ({ email, firstName, lastName, password }) => {
    this.findByEmail(email).then((result) => {
        if (result) return Promise.reject('This email already taken!');
        return bcrypt.genSalt().then((salt) => {
            return bcrypt.hash(password, salt).then((hashed) => {
                let e = signupModel.toEntity({email, firstName, lastName});
                e.salt = salt;
                e.hash = hashed;
                return usersRepo.add(e);
            })
        });
    })
};

this.findByEmail = (email) => {
    return usersRepo.findByEmail(email);
};
