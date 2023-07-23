const{typeByCity,typeByCount,getAllHotel,getSingleHotel,deleteteHotel,updateHotel,createHotel} = require("../controllers/hotel_cont.js");
const Express = require('express');
const {verifyAdmin}=require('../middleware/verify.js')


const router = Express.Router();

router.get('/typeByCount',typeByCount)
router.get('/typeByCity',typeByCity)
router.post('/createHotel',createHotel,verifyAdmin)
router.put('/updateHotel/:id',updateHotel,verifyAdmin)
router.delete('/deleteteHotel',deleteteHotel,verifyAdmin)
router.get('/getSingleHotel/:id',getSingleHotel)
router.get('/getAllHotel',getAllHotel)



module.exports=router;