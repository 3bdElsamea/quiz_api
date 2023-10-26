exports.success = (res, status, data = {}) => {
    res.status(status).json({
        status: "success",
        ...data,
    });
};


exports.deleteResponse = (res, message = "") => {
    res.json({
        message,
    });
};