const express = require('express')
const router = express.Router()
const bcrypt  = require('bcrypt')
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken')
const otp = require('otp-generator')
const JWT_SECRET = "ciwbuconciwevccwu1229238c/idb871cb91383hc}28vwrgbw8b748{62[]()69cwv";
const student = require('../schema/students');

router.post('/register',async(req,res)=>{
    console.log(req.body)
    const data = new student(req.body)

    const result = await data.save()

    if(result){
        res.json({
            message:"success"
        })
    }
    else{
        res.json({
            message:"reg failure"
        })
    }
})
