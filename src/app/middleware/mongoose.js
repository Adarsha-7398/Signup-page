import mongoose from "mongoose";

const connectDb = async (handler)=>{
    await mongoose.connect("mongodb://127.0.0.1:27017")
    return handler(req, res)
}

export default connectDb