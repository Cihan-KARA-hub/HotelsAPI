const {login,create}=require('../controllers/auth_cont.js');
const Express = require('express')



const router = Express.Router();
router.post('/login',login)
router.post('/create',create)

module.exports=router;