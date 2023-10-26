const jwt = require("jsonwebtoken");
const AppError = require("./appError");

module.exports.createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRATION,
    });
}

module.exports.verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (e) {
        return new AppError("Invalid token", 401);
    }
};

