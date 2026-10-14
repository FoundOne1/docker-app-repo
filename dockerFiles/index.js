const app = require("express")()
const fs = require("fs")
const path = require("path")
const axios = require("axios")
let val = 0

const server = app.listen(3000,'0.0.0.0'()=>{
    console.log("app is listening...")
})

app.use("/health",(req,res,next)=>{
    file = fs.writeFile("log.txt","request from "+req.socket.remoteAddress,(err)=>{
        if(err) throw err
    })
    next("route")
})
app.get("/",(req,res)=>{
    res.send("You are connected")
})

app.get("/welcome",(req,res)=>{
    res.send("Welcome!")
})

app.get("/health",(req,res)=>{
    res.send("App is up and running")
    // server.close(()=>{process.exit(0)})
})
