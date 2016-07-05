var UserModel = require('../models/userModel');

module.exports = {
  index: function(req, res, next) {
    UserModel.find(function(err, users) {
      if (err) {
        res.status(500).json(err)
      } else {
        res .status(200).json(users)
      }
    })
  },
  show: function(req, res, next) {
    UserModel.findById(req.params.id).populate('surveys').exec(function(err, users) {
      if (err) {
        res.status(500).json(err)
      } else {
        res .status(200).json(users)
      }
    })
  },
  create: function(req, res, next) {
    UserModel.create(req.body, function(err, user) {
      if (err) {
        res.status(500).json(err)
      } else {
        res .status(200).json(user)
      }
    })
  },
  update: function(req, res, next) {
    if (req.query.surveyid) {
      var promise = [];
      for (var i = 0; i < req.body.length; i++) {
         promise.push(UserModel.findByIdAndUpdate(req.body[i], {$push: {surveys: req.query.surveyid}}))
      }
      Promise.all(promise).then(function(results) {
        res.send(results);
      })
    }
    // UserModel.update({username: req.body}, function(err, users) {
    //   if (err) {
    //     res.status(500).json(err)
    //   } else {
    //     res .status(200).json(user)
    //   }
    // })
  }
}
