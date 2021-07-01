const {UserRequest}= require('../model/userRequest')
const { handler: { errorResponseHandler, successResponseHandler }} = require('../config')

exports.postUserRequest = async (req,res)=>{
    try{
        const request = new UserRequest(req.body)
        await request.save()
        successResponseHandler(res,request,'Successfully Added Request')
    }
    catch(error){
        errorResponseHandler(res, error,'Error While Adding')
    }
}

exports.getUserRequest=async(req, res)=>{
try{
    const allRequest = await UserRequest.find({})
    successResponseHandler(res,allRequest,'Successfully get all request')
}
catch(error){
    errorResponseHandler(res, error,'Error While Getting')
}
}