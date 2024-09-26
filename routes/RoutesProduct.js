const express= require("express")
const appRouter= express.Router()
const Controller= require("../Controllers/ProductController")

appRouter.post('/post',Controller.addproduct)
appRouter.get('/get', Controller.getproduct)
appRouter.patch('/edit/:id',Controller.updateproducts)
appRouter.delete('/:id',Controller.deletproducts)

module.exports=appRouter
