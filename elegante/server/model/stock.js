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

    discount:{
        type: Number
    },

    category:{
        type:Schema.Types.ObjectId,
        ref:'category'
    },

    thumbnail:Array

})

const Stock = mongoose.model('Stock',stock)
exports.Stock=Stock