const userSchema = required('userSchema')
const bcrypt = required ('bcrypt')
var jwt = require('jsonwebtoken');

exports.register=async(req,res)=>{
    try{
       const{name,email,password} = req.body 
       const found = await userSchema.findOne({email})
       if (found){req.status(400).send({msg:'vous avez deja un compte avec ce mail'})}
       

       const newUser = await new userSchema(req.body)
       const saltRound = 10;
       const salt = bcrypt.genSaltSync(saltRound);
       const hash = bcrypt.hashSync(Password, salt);
       newUser.password = hash

       const payload = { id : newUser. _id}
       var token = jwt.sign(payload,process.env.privatekey)
       newUser.save()
       res.status(200).send({msg:'welcom to the groupe',newUser,token})

    }catch(err){
        console.log(err)
        res.status(500).send({msg:'you couldt make it'.newUser})
    }
}


exports.signin=async(req,res)=>{
try{
    const{email,password} = req.body 
    const found = await userSchema.findOne({email})
    if (!found){req.status(400).send({msg:'Go to signup'})}
    const match = await bcrypt.compare{password,found.password}
    if (!match){res.status(400).send({msg:'You have the wrong password'})}
    const payload = { id : found._id}
       var token = jwt.sign(payload,process.env.privatekey)
    res.status(200).send({msg:'welcom',token,newUser,found})
}catch(err){
    res.status(500).send({msg:'you couldt make it'.newUser})

}
}

