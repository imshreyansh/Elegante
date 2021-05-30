const mongoose = require('mongoose')
const Schema = mongoose.Schema


const category = new Schema({
    name:{
        type: String
    },
    created_at: {
        type: Date,
        default: new Date()
    }
})

const Category = mongoose.model('Category',category)
exports.Category=Category