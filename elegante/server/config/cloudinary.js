var cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'df38lorgo', 
    api_key: '497247786712524', 
    api_secret: '1RKntM35ppDra7AzV-JibLOebB4'
})


exports.uploadOnCloudinary = async (file)=>{
    const newUrl = await cloudinary.uploader.upload(file)
    return newUrl
}