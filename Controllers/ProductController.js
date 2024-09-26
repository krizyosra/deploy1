
const product = require("../Models/Product")



exports.addproduct= async(req,res)=>{
    try {

        const newproduct= new product(req.body)
      
        await newproduct.save()
        console.log("product saved")
        res.status(201).send("saved")



    } catch (error) {
        console.log(error)
        
    }


}

exports.getproduct= async(req,res)=>{

    try {
        let getproducts= await product.find()
        return res.status(200).send(getproducts)
        
    } catch (error) {
        console.log(error)
    }

}



exports.updateproducts= async(req,res)=>{
    try {

        let updateproduct= await product.findByIdAndUpdate(req.params.id, req.body, {new: true})
        console.log('test')
        return res.status(200).send(updateproduct)
        
    } catch (error) {
        console.log(error)
    }
}

exports.deletproducts= async(req,res)=>{
    try {
        let deleteproduct= await product.deleteOne({_id: req.params.id})
        return res.send(deleteproduct)
        
    } catch (error) {
        console.log(error)
        res.status(400)
    }
}