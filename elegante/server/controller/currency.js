const {Currency}= require('../model/currency')
const { handler: { errorResponseHandler, successResponseHandler }} = require('../config')

exports.addCurrency = async (req,res)=>{
    try{
        const add = new Currency({name:req.body.currency})
        await add.save()
        successResponseHandler(res,add,'Successfully added currency')
    }
    catch(error){
        errorResponseHandler(res, error, 'Error While Adding Currency')
    }
}

exports.getAllCurrency = async (req,res)=>{
    try{
        const get = await Currency.find({})
        successResponseHandler(res,get,'Successfully get all currency')
    }
    catch(error){
        errorResponseHandler(res, error, 'Error While Getting All Currency')
    }
}

exports.getDefaultCurrency = async (req,res)=>{
    try{
        const get = await Currency.findOne({active:true})
        successResponseHandler(res,get,'Successfully get default currency')
    }
    catch(error){
        errorResponseHandler(res, error, 'Error While Getting Default Currency')
    }
}

exports.deleteCurrency = async (req,res)=>{
    try{
        const deleteCurrency = await Currency.findOneAndDelete({_id:req.params.id})
        successResponseHandler(res,deleteCurrency,'Successfully get default currency')
    }
    catch(error){
        errorResponseHandler(res, error, 'Error While Deleting Currency')
    }
}

exports.setDefaultCurrency = async (req,res)=>{
    try{
        await Currency.updateMany({active:false})
        await Currency.findOneAndUpdate({_id:req.params.id},{active:true},{new:true})
        const newsetCurrency = await Currency.find({})
        successResponseHandler(res,newsetCurrency,'Successfully set currency')
    }
    catch(error){
        errorResponseHandler(res, error, 'Error While Adding Currency')
    }
}