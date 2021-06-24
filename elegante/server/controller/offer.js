const {Offer} = require('../model/offer')
const { handler: { errorResponseHandler, successResponseHandler }, upload: { uploadAvatar } } = require('../config')

exports.addOffer = async (req,res)=>{
    try{
        const addNewOffer = new Offer({offer:(req.body.offer).toUpperCase(),percentage:req.body.percentage})
        await addNewOffer.save()
        successResponseHandler(res,addNewOffer,'Successfully added offer')
    }
    catch(error){
        errorResponseHandler(res, error,'Error While getting stocks')
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