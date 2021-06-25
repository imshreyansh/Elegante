const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userCart=new Schema({
user:{
    type:Schema.Types.ObjectId,
    ref:'UserAuth'
},

stock:{
    type:Schema.Types.ObjectId,
    ref:'Stock'
},

dateOfPurchase:{
    type:Date,
    default:new Date()
},

qty:{
    type:Number
}
})

const UserCart = mongoose.model('UserCart',userCart)
exports.UserCart=UserCart