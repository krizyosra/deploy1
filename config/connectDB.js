const mongoose= require("mongoose")

const connectDB=async()=>{

    try {
        await mongoose.connect(process.env.uri)
        console.log("data base connected");
        
    } catch (error) {
        console.log(error);
    }
}

module.exports=connectDB