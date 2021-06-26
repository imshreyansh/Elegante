const {UserPurchase}= require('../model/userPurchase')
const {UserCart}= require('../model/userCart')
const {Stock} =require('../model/stock')
const { handler: { errorResponseHandler, successResponseHandler }} = require('../config')

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
