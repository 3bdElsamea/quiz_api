const cloudinary = require('cloudinary').v2;
const {CloudinaryStorage} = require("multer-storage-cloudinary")
const {config} = require("dotenv");
const multer = require("multer");

config({path: "./.env"});

console.log(process.env.CLOUDINARY_CLOUD_NAME);
// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINAY_API_SECRET,
});
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "DEV",
    },
});

const assignOnBody = (field) => (req, res, next) => {
    console.log("test");
    if (req.file)
        req.body[field] = req.file.path;

    next();
}

module.exports.single = (field) => [multer({storage: storage}).single(field), assignOnBody(field)];

module.exports.deleteImage = async (url) => await cloudinary.uploader.destroy(url);