'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var FavoriteSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
      ref: "Users",
      required: "You must define a user for this favorite"
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: "Products",
        required: "You must define a product for this favorite"
    }
});

module.exports = mongoose.model('Favorites', FavoriteSchema);
