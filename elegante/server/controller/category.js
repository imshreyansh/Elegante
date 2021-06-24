const {Category} = require('../model/category')
const { handler: { errorResponseHandler, successResponseHandler }, upload: { uploadAvatar } } = require('../config')

exports.addCategory = async (req,res)=>{
    uploadAvatar(req,res,async(error)=>{
        if(error) return errorResponseHandler(res, error, 'Error While Creating')
        try{
            const {category}=JSON.parse(req.body.data)
            const Add = new Category({name:category})
            Add['thumbnail'] = req.files[0]
            await Add.save()
            successResponseHandler(res,Add,'Successfully added category')
        }
        catch(error){
            errorResponseHandler(res, error,'Error While getting stocks')
        }
    })
}

exports.editCategory = async (req,res)=>{
        uploadAvatar(req,res,async(error)=>{
            if(error) return errorResponseHandler(res, error, 'Error While Creating')
            try{
                if(req.files &&req.files.length>0){
                const data=JSON.parse(req.body.data)
                const getCategory = await Category.findOneAndUpdate({_id:req.params.id},data,{new: true})
                getCategory['thumbnail'] = req.files[0]
                successResponseHandler(res,getCategory,'Successfully added category')
                }else{
                        const getCategory = await Category.findOneAndUpdate({_id:req.params.id},req.body,{new: true})
                        successResponseHandler(res,getCategory,'Successfully Updated category')
                    }
            }
            catch(error){
                errorResponseHandler(res, error,'Error While getting stocks')
            }
        })
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