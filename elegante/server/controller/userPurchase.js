const {UserPurchase}= require('../model/userPurchase')
const {UserCart}= require('../model/userCart')
const {Stock} =require('../model/stock')
const { handler: { errorResponseHandler, successResponseHandler }} = require('../config')

exports.purchaseCartOrder = async (req,res)=>{
    try{
        const purchase = new UserPurchase(req.body)
        await purchase.save()
        await UserCart.deleteMany({user:req.body.user})
        req.body.stock.forEach(async (d)=>{
             await Stock.findOneAndUpdate({_id:d.stockId},{$inc:{qty:-d.qty}},{new:true})
        })
        successResponseHandler(res,purchase,'Successfully ordered')

    }
    catch(error){
        errorResponseHandler(res, error,'Error While Purchasing')
    }
}
