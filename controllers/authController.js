const userModel=require("../models/userModel");
const registerController=async(req,res)=>{
  try{
    const existingUser=await userModel.findOne({email:req.body.email})
    if(existingUser){
      return res.status(200).send({
        success:false,
        message:'user already exist'
      })
    }
  }
  catch(error)
  {
    console.log(error)
    res.status(500).send({
      success:false,
      message:'error in register api',
      error
    })
  }
};

cost router=express.Router()