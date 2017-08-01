const schema = require('../entities/user.entity');

module.exports.findById = (id) => {
    return entity.findById(id).exec().then(result => result);

}

module.exports.findByEmail = (email) => {
    return entity.find({ 'email': email }).exec().then(result => result);
}

module.exports.add = (user) => {
    return user.Save();
}
