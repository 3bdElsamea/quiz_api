const mongoose = require("mongoose");

const AppError = require("../utils/appError");

const announcementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"],
    }   ,
    description: {
        type: String,
        required: [true, "Please provide a description"],
    },
});


const Announcement = mongoose.model("Announcement", announcementSchema);

module.exports = Announcement;