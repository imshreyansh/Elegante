const mongoose = require('mongoose')
const Schema = mongoose.Schema

const offer = new Schema({
    offer:{
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

const Offer = mongoose.model('Offer',offer)
exports.Offer = Offer