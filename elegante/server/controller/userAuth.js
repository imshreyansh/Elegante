const {UserAuth} =require('../model/userAuth')
const bcrypt = require('bcrypt')
const { handler: { errorResponseHandler, successResponseHandler }, upload: { uploadAvatar } } = require('../config')


exports.createUser = async (req, res)=>{
    try{
        const check = await UserAuth.findOne({email: req.body.email})
        if(check) return errorResponseHandler(res, 'Error','Email Already Exists')
        const {name,email,designation,address,password,mobile}=req.body
        const salt = await bcrypt.genSalt(10)
        const newPassword = await bcrypt.hash(password,salt)
        const addUser = new UserAuth({name,email,designation,address,password:newPassword,mobile})
        const user =await addUser.save()
        successResponseHandler(res,user,'Successfully Created User')
    }
    catch{
    errorResponseHandler(res, 'Error','Error While Creating User')
    }
}

exports.loginUser = async (req, res)=>{
    try{
       const getUser = await UserAuth.findOne({ email: req.body.email})
       if(!getUser) return errorResponseHandler(res, 'Error','Email does not exits')
       const comparePassword = await bcrypt.compare(req.body.password, getUser.password)
       if (comparePassword)
       return successResponseHandler(res, getUser.generateToken(), 'Succesfully Logged In')
       else
       return errorResponseHandler(res, 'Error', 'Incorrect Password')
    }
    catch{
    errorResponseHandler(res, 'Error','Error While Login In')
    }
}