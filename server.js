const express = require("express")
var cookieParser = require('cookie-parser')
const app= express()

require("dotenv").config()
const port=process.env.port


const connect= require("./config/connectDB")
const RoutesProduct=require('./routes/RoutesProduct')
const Routeuser= require("./routes/RoutesUSer")
const cors = require("cors");

const corsOptions = {
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true, 
  };


connect()
app.use(cors(corsOptions))

app.options('*', cors(corsOptions));
app.use(express.json())
app.use('/api/product', RoutesProduct)
app.use('/api/user',Routeuser)




 





/*
app.use(function(req,res){
    res.status(404).send("not found")
})
*/

app.listen(port,(err)=>{


    console.log(err)
    console.log("server is running")
})

