const Quiz = require('../models/Quiz');
const Factory = require("./../utils/factory");

module.exports.getAllQuizes = Factory.getAll(Quiz);

module.exports.getQuiz = Factory.getOne(Quiz);

module.exports.createQuiz = Factory.createOne(Quiz);

module.exports.updateQuiz = Factory.updateOne(Quiz);

module.exports.deleteQuiz = Factory.deleteOne(Quiz);