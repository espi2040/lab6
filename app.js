const express = require("express");
const app = express();
//allows node to render html
app.engine('html', require('ejs').renderFile);

//location to static files
app.use(express.static("public"));


//routes
app.get("/",function(req, res){
    
    
    res.render("index.html");
    //res.send("it works!");
})

app.get("/mercury",function(req, res){
    res.render("mercury.html");
})


app.get("/venus",function(req, res){
    res.render("venus.html");
})

app.get("/earth",function(req, res){
    res.render("earth.html");
})


app.get("/jupiter",function(req, res){
    res.render("jupiter.html");
})

app.get("/mars",function(req, res){
    res.render("mars.html");
})







//ser listener 
app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Express Server is Running...");
});