const {Offer} = require('../model/offer')
const { handler: { errorResponseHandler, successResponseHandler }, upload: { uploadAvatar } } = require('../config')

exports.addOffer = async (req,res)=>{
    try{
        const addNewOffer = new Offer({offer:req.body.offer,percentage:req.body.percentage})
        await addNewOffer.save()
        successResponseHandler(res,addNewOffer,'Successfully added offer')
    }
    catch(error){
        errorResponseHandler(res, error,'Error While adding offer')
    }
}

exports.getAllOffer =async(req,res)=>{
    try{
        const allOffers = await Offer.find({})
        successResponseHandler(res,allOffers,'Successfully Get All Offers')
    }
    catch(error){
        errorResponseHandler(res, error,'Error While getting offers')
    }
}

exports.updateOffer = async(req,res)=>{
    try{
        if(req.body.status && req.body.status==='Active'){
        await Offer.updateMany({},{$set:{status:"Inactive"}},{multi: true })
        const updateAll = await Offer.findOneAndUpdate({_id:req.params.id},req.body,{new: true})
        successResponseHandler(res,updateAll,'Successfuly updated status')
        }else{
        const update = await Offer.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        successResponseHandler(res,update,'Successfully Updated Offer')
        }
    }
    catch(error){
        errorResponseHandler(res, error,'Error While updating offers')
    }
}

exports.getActiveOffer = async (req,res)=>{
    try{
        const getActive = await Offer.findOne({status:'Active'})
        successResponseHandler(res,getActive,'Successfully get active offer')
    }
    catch(error){
        errorResponseHandler(res, error,'Error While getting offer')
    }
}