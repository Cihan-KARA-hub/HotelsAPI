
const jwt = require('jsonwebtoken')


const verifyToken=(req,res,next)=>{
    const token =req.cookies.token;
    if(!token){
        res.status(500).json({messeage:"giriş yapmadınız"})
    }
    jwt.verify(token ,"SECRET_KEY",(err,user)=>{
        if(err) res.status(500).json({messeage:"token geçersiz"})
            req.user= user
            next();

    })
}
const verifyUser=(req,res,next)=>{
   verifyToken(req,res,next,()=>{
    if(req.user.id==req.params.id || req.user.isAdmin){
        next();
    }
    else{
        res.status(500).json({messeage:"login değilsin"})
    }
   })
}
const verifyAdmin=(req,res,next)=>{
    verifyToken(req,res,next,()=>{
     if( req.user.isAdmin){
         next();
     }
     else{
         res.status(500).json({messeage:"Admin  değilsin"})
     }
    })
 }


 module.exports={verifyAdmin,verifyUser,verifyToken}