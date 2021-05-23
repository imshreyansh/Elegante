const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken')
const { SECRET } = require('../config')

const userAuth = new Schema({
    name:{
        type:'String'
    },
    email:{
        type:'String'
    },
    mobile:{
        type:'String'
    },
    designation:{
        type:'String',
        enum:['Admin','User']
    },
    address:{
        type:'String'
    },
    password:{
        type:'String'
    },
    status:{
        type: String,
        default:'Active'
    },
    created_at: {
        type: Date,
        default: new Date()
    }
})

userAuth.methods.generateToken=function () {
    let token = jwt.sign({
        id: this._id.toString(),
        name: this.name,
        avatar: this.avatar,
        designation: this.designation
    },
        SECRET,
        { expiresIn: 60 * 60 * 24 })
    return token
}

const UserAuth = mongoose.model('UserAuth',userAuth)

exports.UserAuth=UserAuth