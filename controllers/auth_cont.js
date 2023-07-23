const User =require('../models/User_model');
const bcrypt=require('bcryptjs')
const jwt =require('jsonwebtoken');


const create= async(req,res,next)=>{
    const {userName,password,email}=req.body;
    try{
       const user = await User.findOne(email)
       if (user){

       return res.status(500).json({message:"böyle bir kullanici zaten var"});
       }

       if(password.lenght < 6) res.status(500).json({message:"şifre çok kısa"});


       const passwordHash= await bcrypt.hash(password,12);


       if(!isonEmail(email)) res.status(500).json({message:"email tipinde değil"})

       const newUser = await User.create({...req.body,password:passwordHash})

       const token=await jwt.sign({id:user._id, idAdmin:user.isAdmin },"SECRET_KEY",{expiresIn:"1h"})
       

       res.cokie("token",token,{httpOnly : true}).status(200).json({
        token,
        user

       })

       
        

    }
    catch(error){
     res.status(500).json({message:error})
    }}
    
 const login= async(req,res,next)=>{
        const {password,email}=req.body;
        try{
           const user = await User.findOne(email)
           if (!user){
    
           return res.status(500).json({message:"böyle bir kullanici bulunmamakta"});
           }
    
         
    
    
           const passwordCompare= await bcrypt.compare(password,User.password);
           if(!passwordCompare){
            res.status(500).json({message:"parola eşleşmiyor"})
           }
    
    
         
    
           
    
           const token=await jwt.sign({id:newUser._id, idAdmin:newUser.isAdmin },"SECRET_KEY",{expiresIn:"1h"})
           
    
           res.cokie("token",token,{httpOnly : true}).status(201).json({
            token,
            newUser
    
           })
    
           
            
    
        }
        catch(error){
         res.status(500).json({message:error})
        }}
        
    function isonEmail(emailAddr)  
  {
    let regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAddr.match(regex))
  {
    return true;
  }
    else
    return false;
  }

  module.exports={login,create}