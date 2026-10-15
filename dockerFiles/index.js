const app = require("express")()
const fs = require("fs")
const path = require("path")
const axios = require("axios")
const ejs = require("ejs")

app.set("view engine","ejs")
let val = 1

const ENVIRONMENT = process.env.ENVIRONMENT

const server = app.listen(80,()=>{
    console.log("app is listening...")
})

app.use("/health",(req,res,next)=>{
    file = fs.writeFile("log.txt","request from "+req.socket.remoteAddress,(err)=>{
        if(err) throw err
    })
    next("route")
})
app.get("/",(req,res)=>{
    res.render('index',{
        environment: process.env.ENVIRONMENT
    })
})

app.get("/welcome",(req,res)=>{
    res.send("Welcome!")
})

app.get("/health",(req,res)=>{
    res.send("App is up and running")
    // server.close(()=>{process.exit(0)})
})
