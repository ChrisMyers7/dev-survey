var mongoose = require('mongoose');
var yesOrNoSchema = require('../schemas/yesOrNoSchema');

module.exports = mongoose.model('YesOrNo', yesOrNoSchema)
