'use strict';
module.exports = function(app) {
  var category = require('../controllers/categoryController');

  // category Routes
  app.route('/simplon/api/categories')
    .get(category.list_all_categories)
    .post(category.create_a_category);


  app.route('/simplon/api/categories/:categoryId')
    .get(category.read_a_category);
};
