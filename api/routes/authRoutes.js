'use strict';
module.exports = function(app) {
  var auth = require('../controllers/authController');

  // auth Route
  app.route('/simplon/api/connect')
    .post(auth.connect);
};
