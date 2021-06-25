const {UserCart}= require('../model/userCart')
const { handler: { errorResponseHandler, successResponseHandler }} = require('../config')

exports.addToCart = async (req,res)=>{
    try{
        const add = new UserCart({user:req.body.user,stock:req.body.stock,qty:req.body.qty})
        await add.save()
        successResponseHandler(res,add,'Successfully added Stock')
    }
    catch(error){
        errorResponseHandler(res, error,'Error While adding to cart')
    }
}

exports.getMemberCart=async(req,res)=>{
    try{
      const get = await UserCart.find({user:req.params.id}).populate('user').populate('stock')
      successResponseHandler(res,get,'Successfully get Stock')
    }
    catch(error){
        errorResponseHandler(res, error,'Error While getting cart')
    }
}

exports.removeCart=async(req,res)=>{
    try{
      const remove = await UserCart.findOneAndDelete({_id:req.params.id})
      successResponseHandler(res,remove,'Successfully get Stock')
    }
    catch(error){
        errorResponseHandler(res, error,'Error While getting cart')
    }
}