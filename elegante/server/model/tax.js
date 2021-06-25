const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tax = new Schema({
    tax:{
        type:String
    },
    percentage:{
        type:Number
    },
    status:{
        type:String,
        enum:['Active','Inactive'],
        default:'Inactive'
    },
    created_at: {
        type: Date,
        default: new Date()
    }
})

const Tax = mongoose.model('Tax',tax)
exports.Tax = Tax