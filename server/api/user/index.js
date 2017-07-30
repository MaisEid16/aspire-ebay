const controller = require('./user.controller');
module.exports = (app)=>{
    app.route('/signup').post(controller.signup),
    app.route('/login').post(controller.login)
};
