const {detailUser,allUser,deleteUser,updateUser} = require('../controllers/user_cont.js')
const Express = require('express')
const {verifyAdmin,verifyUser}=require('../middleware/verify.js')

const router= Express.Router();


router.get('/detailUser',detailUser,verifyUser )
router.get('/allUser/:id',allUser ,verifyAdmin)
router.delete('/deleteUser/:id',deleteUser ,verifyUser)
router.put('/updateUser/:id ',updateUser,verifyUser )