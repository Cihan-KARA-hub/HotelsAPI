const {getAllRoom,getDetailRoom,deleteRoom,updateRoom,createRoom}=require('../controllers/room_cont.js')
const Express=require('express');
const {verifyAdmin}=require('../middleware/verify.js')


const router=Express.Router();


router.get('/getAllRoom',getAllRoom )
router.get('/getDetailRoom/:id',getDetailRoom)
router.put('/updateRoom/:id',updateRoom,verifyAdmin)
router.post('/createRoom/:id/:hotelId',createRoom,verifyAdmin)
router.delete('/deleteRoom/:id/:hotelId',deleteRoom,verifyAdmin)
module.exports=router;