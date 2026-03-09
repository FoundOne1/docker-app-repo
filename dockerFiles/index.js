const app = require("express")()
const fs = require("fs")
const path = require("path")
const server = app.listen(3000,()=>{
    console.log("app is listening...")
})

app.use((req,res,next)=>{
    file = fs.writeFile("log.txt","request from "+req.socket.remoteAddress,(err)=>{
        if(err) throw err
    })
    next()
})
app.get("/",(req,res)=>{
    res.send("You are connected")
})

app.get("/health",(req,res)=>{
    if(process.argv.includes("--once")){
        res.send("App is up and running")
        server.close(()=>{process.exit(0)})
    }
})
