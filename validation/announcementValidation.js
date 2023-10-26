const joi = require('joi');
const ValidationMW = require('./../middlewares/validationMW');

const createAnnouncementSchema = joi.object({
    title: joi.string().required().trim(),
    description: joi.string().required().trim(),
});

const updateAnnouncementSchema = joi.object({
    title: joi.string().trim(),
    description: joi.string().trim(),
});


module.exports = {
    createAnnouncementValidation: ValidationMW(createAnnouncementSchema),
    updateAnnouncementValidation: ValidationMW(updateAnnouncementSchema)
};