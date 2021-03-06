const YesOrNoModel = require('../models/yesOrNoModel')

module.exports = {
  index: function(req, res, next) {
    YesOrNoModel.find(function(err, questions) {
      if (err) {
        res.status(500).json(err)
      } else {
        res .status(200).json(questions)
      }
    })
  },
  create: function(req, res, next) {
    YesOrNoModel.create(req.body, function(err, question) {
      if (err) {
        res.status(500).json(err)
      } else {
        res .status(200).json(question)
      }
    })
  }
}
