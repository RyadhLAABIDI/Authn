const express = required ('express')
const userRouter = express.Router()

const {register,singnin} = require ('../controllers/user')
const{validation,registerValidator} = require('../middelware/RegisterValidator')
const{isAuth} = require('../middelware/isAuth')
userRouter.post('/signup',registerValidator,validation,loginValidator,register)

userRouter.post('/signin',loginValidator,signin)

userRouter.get('/getuser',isAuth,(req,res)=>{
    res.send(req.user)
})




module.exports = userRouter