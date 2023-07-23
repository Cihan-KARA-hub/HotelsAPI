const Express= require('express');
const cors= require('cors');
const cookieParser= require('cookie-parser');
const bodyParser= require('body-parser');
const dotenv= require('dotenv');
const db= require('./config/db.js');
const authRouter=require('./routers/auth.js')
const hotelRouter=require('./routers/hotel.js')
const roomRouter=require('./routers/room.js')
const userRouter=require('./routers/user.js')




dotenv.config();

const app = Express();

app.use(cors())

app.use(bodyParser.json({limit : '30mb',extended:true}))
app.use(bodyParser.urlencoded({limit : '30mb',extended:true}))
app.use(cookieParser())
app.use('/',authRouter)
app.use('/',hotelRouter)
app.use('/',roomRouter)
app.use('/',userRouter)

db();
const PORT=5000;


app.listen(PORT,()=>{
    console.log("deneme portu ",PORT);
})
