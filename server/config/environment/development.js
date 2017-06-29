'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/meanApp-dev'
  },

  seedDB: true
  ,

   postgresdb :
   {
    host: '10.110.100.15',
    port: 5432,
    database: 'Ebay',
    user: 'postgres',
    password: 'postgres'
}
};
