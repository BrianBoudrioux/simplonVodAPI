var mongoose = require('mongoose'),
  express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  User = require('./api/models/userModel'),
  Category = require('./api/models/categoryModel'),
  Product = require('./api/models/productModel'),
  Favorite = require('./api/models/favoriteModel'),
  bodyParser = require('body-parser'),
  cors = require('cors');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/eCommerceApiDb', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);

// index route
app.route('/').get(function(req, res) {
    res.render("index.html");
});

// doc api route
app.route('/simplon/api').get(function(req, res) {
    res.render("doc.html");
});

//register the routes
var userRoutes = require('./api/routes/userRoutes'); //importing route
var authRoutes = require('./api/routes/authRoutes'); //importing route
var productRoutes = require('./api/routes/productRoutes'); //importing route
var categoryRoutes = require('./api/routes/categoryRoutes'); //importing route
userRoutes(app);
authRoutes(app);
categoryRoutes(app);
productRoutes(app);


app.listen(port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('e-commerce RESTful API server started on: ' + port);
