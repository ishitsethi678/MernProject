const express = require('express');
//router is provided by express
const router = express.Router();
const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');
const User=require('../model/userSchema');

router.get("/", (req, res) => {
  res.send(`hello world from server router.js`);
});

//-------api for signup------------
router.post('/register',async(req,res)=>{
  const {name,email,phone,work,password,cpassword}=req.body

  if(!name || !email || !phone||!work||!password||!cpassword){
    return res.status(422).json({error:"please fill all fields"})
  }
  try{
  const userExist=await User.findOne({email:email})
   if(userExist){
    return res.status(422).json({error:"email already exist"});
   }

   let userFields={name,email,phone,work,password,cpassword};
   let user = new User(userFields);

   user.save();
   if(user){
    res.send("user got saved");
   }

}
  catch(err){
    console.log(err);
    res.status(500).send({error:"failed"})
  }

})

//--------api for login----------
router.post("/login", async(req, res)=>{
  try{
    let token;
    const{email,password}=req.body;
    if (!email ||!password ){
      res.status(400).json({mesage:"Invalid Data"})
  }
  const userLogin=await User.findOne({email:email});

  const isMatch=await bcrypt.compare(password,userLogin.password);

   token = await userLogin.generateAuthToken();
  console.log(token);
//token to be stored in cookie and get expired
  res.cookie("jwtoken",token,{
    expires:new Date(Date.now()+25892000000),
    httpOnly : true
  })

  if(isMatch){
    res.status(200).json({message:"user logged in"});
  }
  else{
    res.status(401).json({message:"invalid credentials"});
  }
}
  catch(err){
  console.log(err);
  }
});

module.exports = router;