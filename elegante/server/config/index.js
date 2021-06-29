module.exports = {
    SECRET: "SHREY1998",
    sendEmail:require('./sendGrid'),
    handler: require('./handler.js'),
    upload: require('./multer.js')
}