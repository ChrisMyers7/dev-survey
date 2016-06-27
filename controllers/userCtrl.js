

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
    UserModel.update({username: req.body}, function(err, users) {
      if (err) {
        res.status(500).json(err)
      } else {
        res .status(200).json(user)
      }
    })
  }
}
