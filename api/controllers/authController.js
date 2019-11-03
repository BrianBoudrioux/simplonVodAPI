'use strict';


var mongoose = require('mongoose'),
  Users = mongoose.model('Users'),
  passwordHash = require('password-hash');


exports.connect = function(req, res) {

  if (req.body.password) {
    Users.findOne({ email: req.body.email }, function(err, user) {
      if (err)
        res.send(err);

      if (user != "" && user != null) {
        var check_pwd = passwordHash.verify(req.body.password, user.password);

        if (check_pwd) {
          res.json({ auth: true, user: user });
        }
        else
          res.json({ auth: false, message: "Your email do not match with the specified password."})

      }
      else
          res.json({ auth: false, message: "This account do not exist." });

    });
  }
  else
    res.json({ auth: false, message: "You must define your email and password for connecting to this api." });

};
