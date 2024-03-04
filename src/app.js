const express = require('express')
const connectToDatabase = require('./db/mongoose')
const helprouter = require('./router/help')
const app = express()
const path = require('path')
require('dotenv').config({path:'../config/dev.env'})

connectToDatabase();

const publicDirectory = path.join(__dirname,'../../../React/helloworld/build')
// console.log(publicDirectory)
app.use(express.static(publicDirectory))

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../../../React/helloworld/build/index.html'))
})

app.use(express.json())
app.use(helprouter)



module.exports = app