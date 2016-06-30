const SurveyModel = require('../models/surveyModel')

module.exports = {
  index: function(req, res, next) {
    SurveyModel.find(function(err, surveys) {
      if (err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(surveys)
      }
    })
  },
  show: function(req, res, next) {
    SurveyModel.findById({_id: req.params.id}, function(err, surveys) {
      if (err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(surveys)
      }
    })
  },
  create: function(req, res, next) {
    SurveyModel.create(req.body, function(err, survey) {
      if (err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(survey)
      }
    })
  },
  update: function(req, res, next) {
    SurveyModel.findByIdAndUpdate({_id: req.params.id}, function(err, survey) {
      if (err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(survey)
      }
    })
  },
  delete: function(req, res, next) {
    SurveyModel.remove({_id: req.params.id}, function(err, surveys) {
      if (err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(surveys)
      }
    })
  }
}
