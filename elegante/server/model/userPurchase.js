const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userPurchase=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'UserAuth'
    },

    orderId:{
        type:String,
    },

    date:{
        type:Date,
        default:new Date()
    },

    time:{
        type:Date,
        default:Date.now
    },

    status:{
        type:Boolean,
        default:false
    },

    total:{
        type:Number
    },

    subTotal:{
        type:Number
    },

    discount:{
        type:Number
    },

    tax:{
        type:Schema.Types.ObjectId,
        ref:'Tax'
    },

    shipping:{
        type:Number
    },

    name:{
        type:String
    },

    email:{
        type:String
    },

    mobile:{
        type:Number
    },

    address:{
        type:String
    },

    state:{
        type:String
    },

    pin:{
        type:Number
    },

    city:{
        type:String
    },

    service:{
        type:String
    },

    trackingId:{
        type:String
    },

    stock:[{
        qty:{
            type:Number
        },
        stockId:{
            type:Schema.Types.ObjectId,
            ref:'Stock'
        },
        amount:{
            type:Number
        }
    }],
    created_at: {
        type: Date,
        default: new Date()
    }
})

const UserPurchase = mongoose.model('UserPurchase',userPurchase)
exports.UserPurchase=UserPurchase