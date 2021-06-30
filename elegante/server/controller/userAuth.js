const {UserAuth} =require('../model/userAuth')
const bcrypt = require('bcrypt')
const { handler: { errorResponseHandler, successResponseHandler }, upload: { uploadAvatar },sendEmail:{sendEmail} } = require('../config')


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
    catch(error){
        errorResponseHandler(res, error,'Error While getting stocks')
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
    catch(error){
        errorResponseHandler(res, error,'Error While getting stocks')
    }
}

exports.updateUser=async(req,res)=>{
    try{
        if(req.body.password){
        const salt = await bcrypt.genSalt(10)
        const passwordToUpdate = await bcrypt.hash(req.body.password,salt)
        const getUser = await UserAuth.findOneAndUpdate({_id:req.params.id},{password:passwordToUpdate},{new:true})
        successResponseHandler(res,getUser,'Successfully Updated User Details')
        }else{
        const getUser = await UserAuth.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        successResponseHandler(res,getUser,'Successfully Updated User Details')
        }
    }
    catch(error){
        errorResponseHandler(res, error,'Error While Updating')
    }
}

exports.updatePassword=async(req,res)=>{
    try{
        const searchUser = await UserAuth.findOne({email:req.body.email})
        if(!searchUser) return errorResponseHandler(res, 'User Not Found','User Not Found')
        const password =makeid(8)
        const salt = await bcrypt.genSalt(10)
        const passwordToUpdate = await bcrypt.hash(password,salt)
        const getUser = await UserAuth.findOneAndUpdate({email:req.body.email},{password:passwordToUpdate},{new:true})
        const obj = {
            to: getUser.email, 
            from: 'elegantebymegha@gmail.com', 
            dynamic_template_data:{  "password":password},
            template_id: "d-3e1822e0599545168fd834ece91edf95" 
        }
           sendEmail(obj)
        successResponseHandler(res,getUser,'Successfully Updated User Details')
    }
    catch(error){
        errorResponseHandler(res, error,'Error While getting stocks')
    }
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}