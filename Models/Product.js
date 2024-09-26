const mongoose = require ("mongoose")
const ProductSchema= mongoose.Schema({

    name:{type:String, required:true},
    Description: {type: String},
    price: {type: Number},
    img:{type:String},
    date:{type: Date, default:Date.now()}
})

const product= mongoose.model("product", ProductSchema)

module.exports=product

