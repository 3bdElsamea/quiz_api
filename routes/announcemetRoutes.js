const express = require('express');
const Announcement = require('../models/Announcement');
const checkExistenceMW = require('./../middlewares/checkExistenceMW');
const {createAnnouncement, deleteAnnouncement, getAllAnnouncements, updateAnnouncement, getAnnouncement} = require('../controllers/announcementController');
const {createAnnouncementValidation, updateAnnouncementValidation} = require('./../validation/announcementValidation');

const router = express.Router();

router.route('/')
    .get(getAllAnnouncements)
    .post(createAnnouncementValidation, createAnnouncement);


router.route('/:id')
    .all(checkExistenceMW(Announcement))
    .get(getAnnouncement)
    .patch( updateAnnouncementValidation, updateAnnouncement)
    .delete(deleteAnnouncement);


module.exports = router;