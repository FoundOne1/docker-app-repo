const app = require("express")()
const fs = require("fs")
const path = require("path")
const axios = require("axios")
const ejs = require("ejs")

app.set("view engine","ejs")
let val = 0

const ENVIRONMENT = process.env.ENVIRONMENT
const VERSION = (process.env.APP_VERSION || "unknown").slice(0, 7)

const server = app.listen(80,()=>{
    console.log("app is listening...")
    console.log(process.env)
    console.log("environment: " + ENVIRONMENT + ", version: " + VERSION)
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
        version: VERSION
    })
})

app.get("/welcome",(req,res)=>{
    res.send("Welcome!")
})

app.get("/health",(req,res)=>{
    res.send("App is up and running")
    // server.close(()=>{process.exit(0)})
})

app.get("/api/status", (req, res) => {
    res.json({
        status: "up",
        environment: ENVIRONMENT,
        version: VERSION
    })
})
