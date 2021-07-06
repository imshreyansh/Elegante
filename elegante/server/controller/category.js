const {Category} = require('../model/category')
const { handler: { errorResponseHandler, successResponseHandler }, upload: { uploadAvatar } } = require('../config')
var multiparty = require('multiparty');
var cloudinary = require('cloudinary').v2;


exports.addCategory = async (req,res)=>{
    try{
        var form = new multiparty.Form()
        form.parse(req,  (error, fields, files)=> {
            if(error) return errorResponseHandler(res, error, 'Error While Creating')
                    try{
                                const {category}=JSON.parse(fields.data)
                                const Add = new Category({name:category})
                                cloudinary.uploader.upload(files.thumbnail[0].path,async (err, result)=> {
                                    try{
                                            if(result){
                                                Add['thumbnail'] = {fieldname : result.original_filename,
                                                    originalname : result.original_filename,
                                                    encoding : "7bit",
                                                    mimetype : `${result.resource_type}/${result.format}`,
                                                    destination : result.url,
                                                    filename : result.original_filename,
                                                    path : result.url,
                                                    size : result.bytes}
                                                await Add.save()
                                                successResponseHandler(res,Add,'Successfully added category')
                                            }
                                    
                                    }catch(err){
                                        errorResponseHandler(res, err, 'Error While Adding Stock')
                                    }
                                       
                                })
                            }
                            catch(error){
                                errorResponseHandler(res, error,'Error while creating category')
                            }               
                        })
            }
            catch(error){
                errorResponseHandler(res, error,'Error while creating category')
            }  
        }


// exports.addCategory = async (req,res)=>{
//     uploadAvatar(req,res,async(error)=>{
//         if(error) return errorResponseHandler(res, error, 'Error While Creating')
//         try{
//             const {category}=JSON.parse(req.body.data)
//             const Add = new Category({name:category})
//             Add['thumbnail'] = req.files[0]
//             await Add.save()
//             successResponseHandler(res,Add,'Successfully added category')
//         }
//         catch(error){
//             errorResponseHandler(res, error,'Error While getting stocks')
//         }
//     })
// }


exports.editCategory = async (req,res)=>{
    try{
        var form = new multiparty.Form()
        form.parse(req,  async (error, fields, files)=> {
            if(error) return errorResponseHandler(res, error, 'Error While Creating')
                    try{
                        if(files && files.thumbnail && files.thumbnail.length>0){
                            const data=JSON.parse(fields.data)
                            const getCategory = await Category.findOneAndUpdate({_id:req.params.id},data,{new: true})
                            cloudinary.uploader.upload(files.thumbnail[0].path,async (err, result)=> {
                                try{
                                        if(result){                                        
                                            getCategory['thumbnail'] = {fieldname : result.original_filename,
                                                originalname : result.original_filename,
                                                encoding : "7bit",
                                                mimetype : `${result.resource_type}/${result.format}`,
                                                destination : result.url,
                                                filename : result.original_filename,
                                                path : result.url,
                                                size : result.bytes}
                                                await getCategory.save()
                                                successResponseHandler(res,getCategory,'Successfully updated category')
                                        }
                                
                                }catch(err){
                                    errorResponseHandler(res, err, 'Error While Updating Category')
                                }
                                   
                            })
                        }else{
                            const getCategory = await Category.findOneAndUpdate({_id:req.params.id},req.body,{new: true})
                            successResponseHandler(res,getCategory,'Successfully Updated category')
                        }
                              
                            }
                            catch(error){
                                errorResponseHandler(res, error,'Error while Updating category')
                            }               
                        })
            }
            catch(error){
                errorResponseHandler(res, error,'Error while Updating category')
            }  
        }

// exports.editCategory = async (req,res)=>{
//         uploadAvatar(req,res,async(error)=>{
//             if(error) return errorResponseHandler(res, error, 'Error While Creating')
//             try{
//                 if(req.files &&req.files.length>0){
//                 const data=JSON.parse(req.body.data)
//                 const getCategory = await Category.findOneAndUpdate({_id:req.params.id},data,{new: true})
//                 getCategory['thumbnail'] = req.files[0]
//                 await getCategory.save()
//                 successResponseHandler(res,getCategory,'Successfully added category')
//                 }else{
//                         const getCategory = await Category.findOneAndUpdate({_id:req.params.id},req.body,{new: true})
//                         successResponseHandler(res,getCategory,'Successfully Updated category')
//                     }
//             }
//             catch(error){
//                 errorResponseHandler(res, error,'Error While getting stocks')
//             }
//         })
//     }

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

exports.getCategoryById = async (req, res)=>{
    try{
        const getCategory = await Category.findOne({_id:req.params.id})
        successResponseHandler(res,getCategory,'Successfully deleted category')
    }
    catch(error){
        errorResponseHandler(res, error,'Error While getting stocks')
    }
}