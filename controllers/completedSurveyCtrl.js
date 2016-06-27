

module.exports = {
  index: function(req, res, next) {
    CompletedSurveyModel.find(function(err, surveys) {
      if (err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(surveys)
      }
    })
  },
  update: function(req, res, next) {
    CompletedSurveyModel.findByIdAndUpdate(function(err, surveys) {
      if (err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(surveys)
      }
    })
  }
}
