const {Stock} =require('../model/stock')
const { handler: { errorResponseHandler, successResponseHandler }, upload: { uploadAvatar } } = require('../config')

exports.addStock =  (req, res)=>{
    uploadAvatar(req,res,async(error)=>{
        if(error) return errorResponseHandler(res, error, 'Error While Creating')
        try{
            const { name,costPrice,sellingPrice,description,qty,category} = JSON.parse(req.body.data)
            const add = new Stock({name,costPrice,sellingPrice,description,qty,category})
             add['thumbnail']=req.files
            await add.save()
            successResponseHandler(res,add,'Successfully Added Stock')
        }
        catch(error){
            errorResponseHandler(res, error, 'Error While Adding Stock')
        }
    })
}

exports.getAllStocks = async (req,res)=>{
    try{
        const all = await Stock.find({}).populate('category')
        successResponseHandler(res,all,'Successfully Got all Stock')
    }
    catch(error){
        errorResponseHandler(res, error,'Error While getting stocks')
    }
}

exports.getStockByCategory = async (req,res)=>{
    try{
        const all = await Stock.find({category:req.params.id}).populate('category')
        successResponseHandler(res,all,'Successfully Got all Stock')
    }
    catch(error){
        errorResponseHandler(res, error,'Error While getting stocks')
    }
}

exports.getStockById = async (req,res)=>{
    try{
        const all = await Stock.find({_id:req.params.id}).populate('category')
        successResponseHandler(res,all,'Successfully Got all Stock')
    }
    catch(error){
        errorResponseHandler(res, error,'Error While getting stocks')
    }
}

exports.deleteStock = async(req,res)=>{
    try{
        const deleteItem = await Stock.findOneAndDelete({_id:req.params.id})
        successResponseHandler(res,deleteItem,'Successfully Deleted Stock')
    }
    catch(error){
        errorResponseHandler(res, error,'Error While getting stocks')
    }
}

exports.editStock = (req,res)=>{
    uploadAvatar(req,res,async(err)=>{
        if(err) return errorResponseHandler(res,err,'Error while updating stock')
        try{
            const data = JSON.parse(req.body.data)
            const find = await Stock.findOneAndUpdate({_id:req.params.id},data,{new:true})
            find['thumbnail'] = req.files
            successResponseHandler(res,find,'Successfully Updated Stock')
        }
        catch(error){
            errorResponseHandler(res, error,'Error While getting stocks')
        }
    })
}