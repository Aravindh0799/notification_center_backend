const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    validityDate:{
        type:String,
        required:true,
    },
    staffChecked:{
        type:String,
        required:true,
    },
    studentChecked:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    }

})
const poster = new mongoose.model('Post',postSchema);
module.exports = poster

