const {Tax} = require('../model/tax')
const { handler: { errorResponseHandler, successResponseHandler }, upload: { uploadAvatar } } = require('../config')

exports.addTax = async (req,res)=>{
    try{
        const addNewTax = new Tax({tax:req.body.tax,percentage:req.body.percentage})
        await addNewTax.save()
        successResponseHandler(res,addNewTax,'Successfully added offer')
    }
    catch(error){
        errorResponseHandler(res, error,'Error While adding tax')
    }
}

exports.getAllTax =async(req,res)=>{
    try{
        const allTax = await Tax.find({})
        successResponseHandler(res,allTax,'Successfully Get All Tax')
    }
    catch(error){
        errorResponseHandler(res, error,'Error While getting tax')
    }
}

exports.updateTax = async(req,res)=>{
    try{
        if(req.body.status && req.body.status==='Active'){
        await Tax.updateMany({},{$set:{status:"Inactive"}},{multi: true })
        const updateAll = await Tax.findOneAndUpdate({_id:req.params.id},req.body,{new: true})
        successResponseHandler(res,updateAll,'Successfuly updated status')
        }else{
        const update = await Tax.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        successResponseHandler(res,update,'Successfully Updated Tax')
        }
    }
    catch(error){
        errorResponseHandler(res, error,'Error While updating Taxs')
    }
}

exports.getActiveTax = async (req,res)=>{
    try{
        const getActive = await Tax.findOne({status:'Active'})
        successResponseHandler(res,getActive,'Successfully get active tax')
    }
    catch(error){
        errorResponseHandler(res, error,'Error While getting tax')
    }
}