var mongoose = require('mongoose');
var rankingSchema = require('../schemas/rankingSchema');

module.exports = mongoose.model('Ranking', rankingSchema)
