'use strict';


var mongoose = require('mongoose'),
  Categories = mongoose.model('Categories'),
  Favorites = mongoose.model('Favorites'),
  Products = mongoose.model('Products');

exports.list_all_products = function(req, res) {
      Products.find({}, function(err, product) {
      if (err)
        res.send(err);
      res.json(product);
    });
};

exports.list_all_products_by_category = function(req, res) {
      Products.find({category: req.params.categoryId}, function(err, product) {
      if (err)
        res.send(err);
      res.json(product);
    });
};

exports.list_all_products_by_product_name = function(req, res) {
    Products.find({ name : { $regex : req.params.name, $options : 'i' } }, function(err, product) {
        if (err)
            res.send(err);
        res.json(product);
    });
};

exports.add_favorite_for_user = function(req, res) {
    var new_favorite = new Favorites({product: req.body.product, user: req.params.userId});
    new_favorite.save(function(err, favorite) {
      if (err)
        res.send(err);

      res.json(favorite);
    });
};

exports.list_all_favorites_for_user = (req, res) => {
    Favorites.find({ user : req.params.userId }, function(err, favorites) {
        if (err)
            res.send(err);
        res.json(favorites);
    });
};

exports.list_all_products_by_categories = function(req, res) {
        Products.find({category: { $all: req.body.categories } }, function(err, product) {
          if (err)
            res.send(err);
          res.json(product);
        });
};

exports.create_a_product = function(req, res) {

    var new_product = new Products(req.body);
    new_product.save(function(err, product) {
      if (err)
        res.send(err);

      res.json(product);
    });
};

exports.read_a_product = function(req, res) {
    Products.findById(req.params.productId, function(err, product) {
      if (err)
        res.send(err);
      res.json(product);
    });
};

// exports.update_a_product = function(req, res) {
//
//     Products.findOneAndUpdate({_id: req.params.productId}, req.body, {new: true}, function(err, product) {
//       if (err)
//         res.send(err);
//       res.json(product);
//     });
// };

// exports.delete_a_product = function(req, res) {
//     Products.deleteOne({
//       _id: req.params.productId
//     }, function(err, product) {
//       if (err)
//         res.send(err);
//       res.json({ message: 'Categories successfully deleted' });
//     });
// };
//
// exports.delete_all_products_by_category = function(req, res) {
//     Products.deleteMany({
//       category: req.params.categoryId
//     }, function(err, product) {
//       if (err)
//         res.send(err);
//       res.json({ message: 'Categories successfully deleted' });
//     });
// };
