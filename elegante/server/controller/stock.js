const {Stock} =require('../model/stock')
const { handler: { errorResponseHandler, successResponseHandler }, upload: { uploadAvatar } } = require('../config')

exports.addStock =  (req, res)=>{
    uploadAvatar(req,res,async(error)=>{
        if(error) return errorResponseHandler(res, error, 'Error While Creating')
        try{
            const { name,costPrice,sellingPrice,discount,qty,category} = JSON.parse(req.body.data)
            const add = new Stock({name,costPrice,sellingPrice,discount,qty,category})
             add['thumbnail']=req.files
            await add.save()
            successResponseHandler(res,add,'Successfully Added Stock')
        }
        catch(error){
            errorResponseHandler(res, error, 'Error While Adding Stock')
        }
    })
}