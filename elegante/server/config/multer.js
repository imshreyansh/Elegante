const multer = require('multer');
const fs = require('fs');
const uuid = require("uuid")
const shell = require('shelljs');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let path = `./uploads/avatar/`;
        fs.exists(path, function (exists) {
            if (exists) {
                cb(null, path)
            } else {
                shell.mkdir('-p', path);
                cb(null, path)
            }
        });
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});




exports.uploadAvatar = multer({
    storage: storage
}).any();