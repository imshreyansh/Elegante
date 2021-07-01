const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userRequest = new Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    mobile:{
        type: String
    },
    description:{
        type: String
    },
    created_at: {
        type: Date,
        default: new Date()
    }
})

const UserRequest = mongoose.model('UserRequest',userRequest)
exports.UserRequest=UserRequest