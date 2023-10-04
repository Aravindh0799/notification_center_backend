const express = require('express')
const router = express.Router()
// const bcrypt  = require('bcrypt')
// const nodemailer = require('nodemailer');
// const jwt = require('jsonwebtoken')
// const otp = require('otp-generator')
// const JWT_SECRET = "ciwbuconciwevccwu1229238c/idb871cb91383hc}28vwrgbw8b748{62[]()69cwv";
const student = require('../schema/students');
const poster = require('../schema/postSchema');
const bcrypt  = require('bcrypt')



router.post('/register',async(req,res)=>{
    const{name,email,password,resiStatus,dob,dept,year,religion,nationality,address} = req.body;
    const encryptedPassword = await bcrypt.hash(password,10);
    try{
    console.log(req.body,encryptedPassword)

    const otheruser = await student.findOne({email:email})

    if(otheruser){
        return res.json({
            status:409, 
            message:"user already registered"
        })
    }
    else{
    const data = await new student({
        name:name,
        email:email,
        password:encryptedPassword,
        dept:dept,
    }
        
    )

    const result = await data.save()

    if(result){
        res.json({
            message:"success",
            status:200
        })
    }
    else{
        res.json({
            message:"reg failure",
            status:300
        })
    }
    }
}
    catch(e){
        console.log(e)
    }

})


router.post('/login',async(req,res)=>{
    const{email,password}=req.body;

    console.log(req.body)
    try{
        const user = await student.findOne({email:email})
        console.log(user,"from try")
        if(user){
            if(await bcrypt.compare(password, user.password)){
                console.log(user.password)
                return res.json({
                    status:200,
                    dept:user.dept
                })
            }
            else{
                console.log("error")
                return res.json({
                    status:300
                })
            }
        }
        else{
            console.log("error")
                return res.json({
                    status:400
                })
        }


    }
    catch(err){
        console.log(err)
    }
})

router.post('/newPost', async(req, res) => {
    console.log("Request body: ", req.body);
    try{
        const data = new poster(req.body);
        const result = await data.save();
        if(result){
            res.json({
                message: "success",
                id: result._id,
            });
        }
        else{
            res.json({
                message: "Failure",
            });
        }
    }
    catch(err){
        console.log("error occured in the api", err);
        res.status(500).json({
            message: "Failure",
            error: err.message,
        });
    }
})


router.post("/getnotices",async(req,res) =>{
    const{dept} = req.body;
    // console.log(dept)
    const notices = await poster.find({dept:dept})

    if(notices){
        return res.json(notices)
    }
    else{
        return res.json({
            message:"not found"
        })
    }
})



module.exports=router
