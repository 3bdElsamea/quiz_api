const Announcement = require('../models/Announcement');
const Factory = require("./../utils/factory");

module.exports.getAllAnnouncements = Factory.getAll(Announcement);

module.exports.getAnnouncement = Factory.getOne(Announcement);

module.exports.createAnnouncement = Factory.createOne(Announcement);

module.exports.updateAnnouncement = Factory.updateOne(Announcement);

module.exports.deleteAnnouncement = Factory.deleteOne(Announcement);