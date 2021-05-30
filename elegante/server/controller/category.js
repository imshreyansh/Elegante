const {Category} = require('../model/category')
const { handler: { errorResponseHandler, successResponseHandler } } = require('../config')

exports.addCategory = async (req,res)=>{
    try{
        const category = new Category({name:req.body.category})
        await category.save()
        successResponseHandler(res,category,'Successfully added category')
    }
    catch(error){
        errorResponseHandler(res, error,'Error While getting stocks')
    }
}

exports.editCategory = async (req,res)=>{
    try{
        const getCategory = await Category.findOneAndUpdate({_id:req.params.id},{name:req.body.category},{new: true})
        successResponseHandler(res,getCategory,'Successfully updated category')

    }
    catch(error){
        errorResponseHandler(res, error,'Error While getting stocks')
    }
}

exports.deleteCategory = async (req,res)=>{
    try{
        const getCategory = await Category.findOneAndDelete({_id:req.params.id})
        successResponseHandler(res,getCategory,'Successfully deleted category')
    }
    catch(error){
        errorResponseHandler(res, error,'Error While getting stocks')
    }
}

exports.getAllCategory = async (req, res)=>{
    try{
        const getCategory = await Category.find()
        successResponseHandler(res,getCategory,'Successfully deleted category')
    }
    catch(error){
        errorResponseHandler(res, error,'Error While getting stocks')
    }
}