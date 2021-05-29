const {Category} = require('../model/category')
const { handler: { errorResponseHandler, successResponseHandler } } = require('../config')

exports.addCategory = async (req,res)=>{
    try{
        const category = new Category({name:req.body.category})
        await category.save()
        successResponseHandler(res,category,'Successfully added category')
    }
    catch{
        errorResponseHandler(res, 'Error','Error While adding category')
    }
}

exports.editCategory = async (req,res)=>{
    try{
        const getCategory = await Category.findOneAndUpdate({_id:req.params.id},{name:req.body.category},{new: true})
        successResponseHandler(res,getCategory,'Successfully updated category')

    }
    catch{
        errorResponseHandler(res, 'Error','Error While updating category')
    }
}

exports.deleteCategory = async (req,res)=>{
    try{
        const getCategory = await Category.findOneAndDelete({_id:req.params.id})
        successResponseHandler(res,getCategory,'Successfully deleted category')
    }
    catch{
        errorResponseHandler(res, 'Error','Error While deleting category')
    }
}

exports.getAllCategory = async (req, res)=>{
    try{
        const getCategory = await Category.find()
        successResponseHandler(res,getCategory,'Successfully deleted category')
    }
    catch{
        errorResponseHandler(res, 'Error','Error While deleting category')
    }
}