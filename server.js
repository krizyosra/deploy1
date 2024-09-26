const express = require("express")
var cookieParser = require('cookie-parser')
const app= express()

require("dotenv").config()
const port=process.env.port


const connect= require("./config/connectDB")
const RoutesProduct=require('./routes/RoutesProduct')
const Routeuser= require("./routes/RoutesUSer")
const cors = require("cors");

app.use(cookieParser())
const corsOptions = {
    origin: 'http://localhost:3000',  
    credentials: true,      
 };


connect()
app.use(cors(corsOptions))
app.use(express.json())
app.use(Routeuser)
app.use(RoutesProduct)



/*
app.use(function(req,res){
    res.status(404).send("not found")
})
*/

app.listen(port,(err)=>{


    console.log(err)
    console.log("server is running")
})

