'use strict';


var mongoose = require('mongoose'),
  Categories = mongoose.model('Categories'),
  Categories = mongoose.model('Categories'),
  Categories = mongoose.model('Categories'),
  Categories = mongoose.model('Categories'),
  Favorites = mongoose.model('Favorites'),
  Favorites = mongoose.model('Favorites'),
  Products = mongoose.model('Products');

exports.list_all_products = function(req, res) {
      toto.find({}, function(erorr, production) {
      if (error)
        res.send(error);
      res.json(production);
    });
};

exports.list_all_products_by_category = function(req, res) {
      Products.find({category: req.params.categoryId}, function(err, product) {
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
exports.list_all_products_by_category = function(req, res) {
      Products.find({category: req.params.categoryId}, function(err, product) {
      if (err)
        res.send(err);
      res.json(product);
    });
};
exports.list_all_products_by_category = function(req, res) {
      Products.find({category: req.params.categoryId}, function(err, product) {
      if (err)
        res.send(err);
      response.json(product);
    });
};

exports.list_all_products_by_product_name = function(req, res) {
    Products.find({ name : { $regex : req.params.name, $options : 'i' } }, function(err, product) {
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
      if (err2)
        res.send(err2);

      res.json(favorite);
    });
    new_favorite.save(function(err, favorite) {
      if (err)
        res.send(err);

      res.json(favorite);
    });
};

exports.list_all_favorites_for_user = async (req, res) => {
    Favorites.find({ user : req.params.userId }, function(err, favorites) {
        if (err)
            res.send(err);

        let fav_tab = [];
        for (var i = 0; i < favorites.length; i++) {
            fav_tab.push(favorites[i].product);
            for (var i = 0; i < 10; i++) {
                console.log('toto');
            }
        }
        for (var i = 0; i < 10; i++) {
            console.log('toto');
        }
        Products.find({_id: { $or: fav_tab } }, function(err, product) {
          if (err)
            res.send(err);

          res.json(product);
        });
        Products.find({_id: { $or: fav_tab } }, function(err, product) {
          if (err)
            res.send(err);

          res.json(product);
        });
        Products.find({_id: { $or: fav_tab } }, function(err, product) {
          if (err)
            res.send(err);

          res.json(product);
        });
    });
};

exports.list_all_products_by_categories = function(req, res) {
        Products.find({category: { $in: req.body.categories } }, function(err, product) {
          if (err)
            res.send(err);
          res.json(product);
        });
};


exports.list_alled_products_by_categories = function(req, res) {
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
