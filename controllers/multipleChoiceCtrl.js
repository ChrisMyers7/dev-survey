const multipleChoiceModel = require('../models/multipleChoiceModel')

module.exports = {
  index: function(req, res, next) {
    multipleChoiceModel.find(function(err, questions) {
      if (err) {
        res.status(500).json(err)
      } else {
        res .status(200).json(questions)
      }
    })
  },
  create: function(req, res, next) {
    multipleChoiceModel.create(req.body, function(err, question) {
      if (err) {
        res.status(500).json(err)
      } else {
        res .status(200).json(question)
      }
    })
  }
}
