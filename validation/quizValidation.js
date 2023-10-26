const joi = require('joi');
const ValidationMW = require('./../middlewares/validationMW');

const createQuizSchema = joi.object({
    title: joi.string().required().trim(),
    questions: joi.array().items(joi.object({
        question: joi.string().required().trim(),
        answers: joi.array().items(joi.string().required().trim()).length(4).required(),
        correctAnswer: joi.number().min(0).max(3).required(),
    })).required(),
});

const updateQuizSchema = joi.object({
    title: joi.string().trim(),
    questions: joi.array().items(joi.object({
        question: joi.string().trim(),
        answers: joi.array().items(joi.string().trim()).length(4),
        correctAnswer: joi.number().min(0).max(3),
    })),
});

module.exports = {
    createQuizValidation: ValidationMW(createQuizSchema),
    updateQuizValidation: ValidationMW(updateQuizSchema)
};