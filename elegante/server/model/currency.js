const mongoose = require('mongoose')
const Schema = mongoose.Schema

const currency = new Schema({
    name:{
        type: String
    },
    active:{
        type: Boolean,
        default:false
    },
    created_at: {
        type: Date,
        default: new Date()
    }
})

const Currency = mongoose.model('Currency',currency)
exports.Currency=Currency