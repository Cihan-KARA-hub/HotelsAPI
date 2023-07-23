const mongoose=require('mongoose');



const hotelSchema=new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    distance:{
        type:String,
        required:true
    },
    photos:{
        type:[String],
        
    },
    adress:{
        type:String,
        required:true
    
    },
    type:{
        type:String,
        required:true
    
    },
    title:{
        type:String,
        required:true
    
    },
    rating:{
        type:Number,
        min:0,
        max:5
    
    },
    Comment:{
        type:Boolean,
        default:false
    
    },
    rooms:{
        type:[String],
        min:0,
        max:5
    
    },
    feature:{
        type:Boolean,
        default:false
    
    },
    Price:{
        type:Number,
        required:true
    
    },
    
    


})

module.exports=mongoose.model('Hotel',hotelSchema)