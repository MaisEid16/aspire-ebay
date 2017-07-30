const errors = require('./components/errors');
const path = require('path');

module.exports = (app) => {
  app.use('/api/example', require('./api/example'));
  app.route('/:url(api|auth|components|app|bower_components|assets)/*').get(errors[404]);
  app.route('/*')
    .get((req, res) =>{
      var x = app.get('appPath');
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};
