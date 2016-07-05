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
    SurveyModel.findById({_id: req.params.id}).populate('yesOrNo_questions').populate('multipleChoice_questions').populate('ranking_questions').populate('textField_questions').exec(function(err, surveys) {
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
    if (req.query.type === 'yesorno') {
      SurveyModel.findByIdAndUpdate({_id: req.params.id}, {$push: {yesOrNo_questions: req.body.id}}, function(err, survey) {
        if (err) {
          res.status(500).json(err)
        } else {
          res.status(200).json(survey)
        }
      })
    } if (req.query.type === 'multiplechoice') {
      SurveyModel.findByIdAndUpdate({_id: req.params.id}, {$push: {multipleChoice_questions: req.body.id}}, function(err, survey) {
        if (err) {
          res.status(500).json(err)
        } else {
          res.status(200).json(survey)
        }
      })
    } if (req.query.type === 'ranking') {
      SurveyModel.findByIdAndUpdate({_id: req.params.id}, {$push: {ranking_questions: req.body.id}}, function(err, survey) {
        if (err) {
          res.status(500).json(err)
        } else {
          res.status(200).json(survey)
        }
      })
    } if (req.query.type === 'textfield') {
      SurveyModel.findByIdAndUpdate({_id: req.params.id}, {$push: {textField_questions: req.body.id}}, function(err, survey) {
        if (err) {
          res.status(500).json(err)
        } else {
          res.status(200).json(survey)
        }
      })
    }
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
