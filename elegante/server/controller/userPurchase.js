const {UserPurchase}= require('../model/userPurchase')
const {UserCart}= require('../model/userCart')
const {Stock} =require('../model/stock')
const {UserAuth} =require('../model/userAuth')
const { handler: { errorResponseHandler, successResponseHandler },sendEmail:{sendEmail}} = require('../config')
exports.purchaseCartOrder = async (req,res)=>{
    try{
        const purchase = new UserPurchase(req.body)
        purchase["orderId"]="EL"+JSON.stringify(Math.floor(Math.random()*12+Math.random()*1000*873))
        await purchase.save()
        await UserCart.deleteMany({user:req.body.user})
        req.body.stock.forEach(async (d)=>{
             await Stock.findOneAndUpdate({_id:d.stockId},{$inc:{qty:-d.qty,purchasedBy:d.qty}},{new:true})
        })
        successResponseHandler(res,purchase,'Successfully ordered')

    }
    catch(error){
        errorResponseHandler(res, error,'Error While Purchasing')
    }
}

exports.getAllOrder = async (req,res)=>{
    try{
        const getAll = await UserPurchase.find({}).populate({path:'stock',populate:{path:'stockId',model:'Stock'}}).populate('tax')
        successResponseHandler(res,getAll,'Successfully got all orders')

    }
    catch(error){
        errorResponseHandler(res, error,'Error While getting orders')
    }
}


exports.updateOrder = async (req,res)=>{
    try{
       const update = await UserPurchase.findOneAndUpdate({_id:req.params.id},req.body.objMain,{new:true})
       const user = await UserAuth.findOne({_id:req.body.user})
       const obj = {
        to: user.email, 
        from: 'elegantebymegha@gmail.com', 
        dynamic_template_data:{  "service":update.service,
        "trackingId":update.trackingId},
        template_id: "d-ee3a3ba72269457fa280f01d5154e58d" 
    }
       sendEmail(obj)
       successResponseHandler(res,update,'Successfully got all orders')
    }
    catch(error){
        errorResponseHandler(res, error,'Error While updating orders')
    }
}