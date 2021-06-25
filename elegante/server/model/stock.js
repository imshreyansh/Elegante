const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stock=new Schema({
    name:{
        type: String
    },
    
    costPrice:{
        type: Number
    },

    sellingPrice:{
        type: Number
    },

    qty:{
        type: Number
    },

    description:{
        type: String
    },

    category:{
        type:Schema.Types.ObjectId,
        ref:'Category'
    },

    thumbnail:Array,
    purchasedBy:{
        type:Number,
        default:0
    }

})

const Stock = mongoose.model('Stock',stock)
exports.Stock=Stock