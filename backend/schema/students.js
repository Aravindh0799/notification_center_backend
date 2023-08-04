const mongoose = require('mongoose')

const student = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        required:true
    },
    residentialStatus:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    dept:{
        type:String,
        required:true
    },
    year:{
        type:String,
        require:true
    },
    religion:{
        type:String,
        required:true
    },
    nationality:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
   
})


const students = new mongoose.model('student', student)
module.exports = students