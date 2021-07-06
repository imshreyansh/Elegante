const {Stock} =require('../model/stock')
const { handler: { errorResponseHandler, successResponseHandler }, upload: { uploadAvatar }} = require('../config')
var multiparty = require('multiparty');
var cloudinary = require('cloudinary').v2;

exports.addStock = async (req,res)=>{
    try{
        var form = new multiparty.Form()
        form.parse(req,  (error, fields, files)=> {
            if(error) return errorResponseHandler(res, error, 'Error While Creating')
                    try{
                        const { name,costPrice,sellingPrice,description,qty,category} = JSON.parse(fields.data)
                        const add = new Stock({name,costPrice,sellingPrice,description,qty,category})
                        let arr=[]
                        files.thumbnail.map(d=>{
                            cloudinary.uploader.upload(d.path,async (err, result)=> {
                                try{
                                    arr.push({fieldname : result.original_filename,
                                        originalname : result.original_filename,
                                        encoding : "7bit",
                                        mimetype : `${result.resource_type}/${result.format}`,
                                        destination : result.url,
                                        filename : result.original_filename,
                                        path : result.url,
                                        size : result.bytes})
                                    if(arr.length === files.thumbnail.length){
                                add['thumbnail']=arr
                                await add.save()
                                const newResponse = await Stock.findOne({_id:add._id}).populate('category')
                                successResponseHandler(res,newResponse,'Successfully Added Stock')
                                    }
                                }catch(err){
                                    errorResponseHandler(res, err, 'Error While Adding Stock')
                                }
                                   
                            })
                        })
                    }
                    catch(error){
                        errorResponseHandler(res, error, 'Error While Adding Stock')
                    }       
        })
    }
    catch(error){
        errorResponseHandler(res, error, 'Error While Adding Stock')
    }
}


// exports.addStock =  (req, res)=>{
//     uploadAvatar(req,res,async(error)=>{
//         if(error) return errorResponseHandler(res, error, 'Error While Creating')
//         try{
//             const { name,costPrice,sellingPrice,description,qty,category} = JSON.parse(req.body.data)
//             const add = new Stock({name,costPrice,sellingPrice,description,qty,category})
//              add['thumbnail']=req.files
//             await add.save()
//             successResponseHandler(res,add,'Successfully Added Stock')
//         }
//         catch(error){
//             errorResponseHandler(res, error, 'Error While Adding Stock')
//         }
//     })
// }


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

exports.editStock =  (req,res)=>{
    try{
        var form = new multiparty.Form()
        form.parse(req,  async(error, fields, files)=> {
            if(error) return errorResponseHandler(res, error, 'Error While Updating')
                    try{
                        if(files && files.thumbnail && files.thumbnail.length >0){
                            const data = JSON.parse(fields.data)
                            const find = await Stock.findOneAndUpdate({_id:req.params.id},data,{new:true})
                           let arr=[]
                               files.thumbnail.map(d=>{
                                   cloudinary.uploader.upload(d.path,async (err, result)=> {
                                       try{
                                           arr.push({fieldname : result.original_filename,
                                               originalname : result.original_filename,
                                               encoding : "7bit",
                                               mimetype : `${result.resource_type}/${result.format}`,
                                               destination : result.url,
                                               filename : result.original_filename,
                                               path : result.url,
                                               size : result.bytes})
                                           if(arr.length === files.thumbnail.length){
                                       find['thumbnail'] = arr
                                       await find.save()
                                       const newResponse = await Stock.findOne({_id:find._id}).populate('category')
                                      successResponseHandler(res,newResponse,'Successfully Updated Stock')
                                           }
                                       }catch(err){
                                           errorResponseHandler(res, err, 'Error While Updating Stock')
                                       }
                                          
                                   })
                               })
                        }else{
                            const data = JSON.parse(fields.data)
                            const find = await Stock.findOneAndUpdate({_id:req.params.id},data,{new:true})
                            const newResponse = await Stock.findOne({_id:find._id}).populate('category')
                            successResponseHandler(res,newResponse,'Successfully Updated Stock')
                        }
                      
                    }
                    catch(error){
                        errorResponseHandler(res, error, 'Error While Updating Stock')
                    }       
        })
    }
    catch(error){
        errorResponseHandler(res, error, 'Error While Adding Stock')
    }
}

// exports.editStock = (req,res)=>{
//     uploadAvatar(req,res,async(err)=>{
//         if(err) return errorResponseHandler(res,err,'Error while updating stock')
//         try{
//             const data = JSON.parse(req.body.data)
//             const find = await Stock.findOneAndUpdate({_id:req.params.id},data,{new:true})
//             find['thumbnail'] = req.files
                //await find.save()
//             successResponseHandler(res,find,'Successfully Updated Stock')
//         }
//         catch(error){
//             errorResponseHandler(res, error,'Error While getting stocks')
//         }
//     })
// }

exports.getTopSellerStocks = async(req,res)=>{
    try{
        const allStocks = await Stock.find({})
        let purchasedByCount = 0
        let totalNumberOfStocks = 0
        allStocks.forEach((d,i)=>{
            purchasedByCount+=d.purchasedBy
            totalNumberOfStocks+=(i+1)
        })
        const average = Math.ceil(purchasedByCount/totalNumberOfStocks)
        const topSellers = await Stock.find({"purchasedBy"  : {$gte : average}})
        successResponseHandler(res,topSellers,'Successfully got top sellers')
    }
    catch(error){
        errorResponseHandler(res, error,'Error While getting stocks')
    }
}