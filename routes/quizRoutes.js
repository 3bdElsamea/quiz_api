const express = require('express');
const Quiz = require('../models/Quiz');
const checkExistenceMW = require('./../middlewares/checkExistenceMW');
const {createQuiz, deleteQuiz, getAllQuizes, updateQuiz, getQuiz} = require('../controllers/quizController');
const {createQuizValidation, updateQuizValidation} = require('./../validation/quizValidation');

const router = express.Router();

router.route('/')
    .get(getAllQuizes)
    .post(createQuizValidation, createQuiz);


router.route('/:id')
    .all(checkExistenceMW(Quiz))
    .get(getQuiz)
    .patch( updateQuizValidation, updateQuiz)
    .delete(deleteQuiz);


module.exports = router;