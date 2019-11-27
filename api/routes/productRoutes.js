'use strict';
module.exports = function(app) {
  var product = require('../controllers/productController');

  // product Routes
  app.route('/simplon/api/products')
    .get(product.list_all_products)
    .post(product.create_a_product);

    app.route('/simplon/api/products/favorites/:userId')
      .get(product.list_all_favorites_for_user)
      .post(product.add_favorite_for_user);


  app.route('/simplon/api/products/:productId')
    .get(product.read_a_product)
    .update(product.update_a_product)
    .delete(product.delete_a_product);

  app.route('/simplon/api/productsByName/:name')
    .get(product.list_all_products_by_product_name);

  app.route('/simplon/api/products/category/:categoryId')
    .get(product.list_all_products_by_category)
    .delete(product.delete_all_products_by_category);

  app.route('/simplon/api/products/categories')
    .post(product.list_all_products_by_categories);
};
