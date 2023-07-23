const Hotel =require('../models/Hotel_model');
const Room =require('../models/Room_model');

const createRoom= async(req,res,next)=>{
    const hotelId=req.params.hotelId
    try{
        const room= await Room.create(req,body);

        await Hotel.findByIdAndUpdate(hotelId,{$push:{rooms:room._id}})

        res.status(201).json(room);

    }
    catch(error){
     res.status(500).json({message:error})
    }
}
const updateRoom= async(req,res,next)=>{
    const hotelId=req.params.hotelId
    try{
      

        const room= await Room.findByIdAndUpdate(req.params.id,{$set:req.body},{new : true})

        res.status(200).json(room);

    }
    catch(error){
     res.status(500).json({message:error})
    }
}
const deleteRoom= async(req,res,next)=>{
    const hotelId=req.params.hotelId
    try{
      

    await Room.findByIdAndDelete(req.params.id)
    await Hotel.findByIdAndUpdate(hotelId,{$pull:{rooms:req.params.id}})
    

        res.status(200).json({message:"silme işlemi başarılı"});

    }
    catch(error){
     res.status(500).json({message:error})
    }
}
const getDetailRoom= async(req,res,next)=>{
    
    try{
      

        const room=await Room.findById(req.params.id)
    

        res.status(200).json({message:"silme işlemi başarılı"});

    }
    catch(error){
     res.status(500).json({message:error})
    }
}
const getAllRoom= async(req,res,next)=>{
    
    try{
      

        const room=await Room.find()
    

        res.status(200).json({message:"silme işlemi başarılı"});

    }
    catch(error){
     res.status(500).json({message:error})
    }
}

module.exports={getAllRoom,getDetailRoom,deleteRoom,updateRoom,createRoom}