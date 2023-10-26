const AppError = require("../utils/appError");
module.exports = (Model) => async (req, res, next) => {
    const doc = await Model.findById(req.params.id);
    if (!doc)
        return next(new AppError(`There is no ${Model.modelName} with this ID`, 404));
    req.doc = doc;
    next();
};