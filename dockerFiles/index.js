const app = require("express")()

app.listen(3000,()=>{
    console.log("app is listening...")
})

app.get("/",(req,res)=>{
    res.send("You are connected")
})
