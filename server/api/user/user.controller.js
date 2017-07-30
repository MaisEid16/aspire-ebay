const service = require('./user.service');

module.exports.sigunp = (req, res) => {
    return service.signup(res.body).then((result) => result ? res.status(200).end() : res.status(500).end());
};

module.exports.login = (req, res) => {
    return service.authenticate(req.body)
        .then((authenticated) => authenticated ? res.status(200).end() : res.status(204).end());
};