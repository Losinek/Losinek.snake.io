const express= require("express")
const bodyparser= require("body-parser")
//const hbs= require("hbs")
const app=express()
//const session= require("express-session")
//const cookieparser= require("cookie-parser")
const urlencoder= bodyparser.urlencoded({
    extended : false
})

app.use(express.static(__dirname + "/views/public"))
//app.use(session({
//    secret : "secret name",
//    name : "chocolate cookie",
//    resave: true,
//    saveUninitialized: true,
//    cookie:{
//        maxAge : 1000*60*60*24*365
//    }
//}))
//
//app.use(cookieparser())

app.get("/", function(req,res){
    //read cookie
        res.sendFile(__dirname + "/views/public/home.html")
})
app.get("/snakegame.html", function(req,res){
    //read cookie
        res.sendFile(__dirname + "/views/public/snakegame.html")
})
app.get("/login.html", function(req,res){
    res.sendFile(__dirname + "/views/public/login.html")
})

//app.post("/login", urlencoder, function(req,res){
//    
//    let username= req.body.un
//    req.session.username= username
//    console.log(username)
//    res.redirect("/")
//})

app.listen(3000, function(){
    console.log("live at port 3000");
})