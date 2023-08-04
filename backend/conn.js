const mongoose = require('mongoose')

console.log("hi")
mongoose.connect('mongodb+srv://Aravindh:Aravindh@cluster0.f7btaep.mongodb.net/?retryWrites=true&w=majority/myapp1').then(()=>{
    console.log('DB connection succesfull')
}).catch((e)=>{
    console.log('error occured', e)
})