'use strict';


var mongoose = require('mongoose'),
  Categories = mongoose.model('Categories'),
  Products = mongoose.model('Products');


exports.list_all_categories = function(req, res) {

    Categories.find({}, function(err, category) {
      if (err)
        res.send(err);
      res.json(category);
    });
};


exports.create_a_category = function(req, res) {

    var new_category = new Categories(req.body);
    new_category.save(function(err, category) {
      if (err)
        res.send(err);

      res.json(category);
    });
};


exports.read_a_category = function(req, res) {
    Categories.findById(req.params.categoryId, function(err, category) {
      if (err)
        res.send(err);
      res.json(category);
    });
};


exports.update_a_category = function(req, res) {

    Categories.findOneAndUpdate({_id: req.params.categoryId}, req.body, {new: true}, function(err, category) {
      if (err)
        res.send(err);
      res.json(category);
    });
};


exports.delete_a_category = function(req, res) {
    Products.deleteMany({
      category: req.params.categoryId
    }, function(err, product) {
      if (err)
        res.send(err);
    });
    Categories.deleteOne({
      _id: req.params.categoryId
    }, function(err, category) {
      if (err)
        res.send(err);
      res.json({ message: 'Categories successfully deleted with all products associated.' });
    });
};
