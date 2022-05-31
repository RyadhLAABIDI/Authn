const express = require('express')
const cors = require('cors')
const connectddb = require('./config/connectdb')
const app = express()

const port = 4444

app.use (cors())
require('dotenv').config()

app.use(express.json())
connectddb()
app.use('/auth/user',userRouter)

app.listen(port.err=()=> {
err?console.log(err):console.log(`Go to ${port}`)


});




