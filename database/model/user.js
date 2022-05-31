const { Module } = require('module')
const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({
    name:String,
    Email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
})
module.exports = mongoose.model('lesutilisateurs',userSchema)