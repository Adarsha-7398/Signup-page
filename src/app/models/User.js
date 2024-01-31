const mongoose = require("mongoose")

const userData = new mongoose.Schema({
    name:{
        require: true,
        type: String,
        length: 10
    },
    email:{
        require: true,
        type: String
    },
    password:{
        require: true,
        type: Number,
        length: 10
    }
})

export default mongoose.model("User", userData)