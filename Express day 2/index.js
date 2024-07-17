var express=require('express');
var app =express()


app.get('/',function(req,res){
    console.log("Req",req.method)
    res.send("hello world");

})

app.get('/Name/:nameId/page/:pageNo',function(req,res){
    console.log("Req",req.method)
    res.send(req.params);

})

app.get('/page/:pageNo',function(req,res){
    console.log("Req",req.method)
    res.send(req.params);

})
app.get('/page/:from-:to',function(req,res){
    console.log("Req",req.method)
    res.send(req.params);

})

app.get('/about.html',function(req,res){
    console.log("Req",req.method)
    res.send("goodbye world");
})

//middleware
app.get('/About',function(req,res,next){
        console.log("homepage")
        next();
    
    },
    function(req,res){
   console.log("welcome to home page")
        res.send("welcome");
    }

    );
   

app.get('/ad?cd',function(req,res){
    console.log("Req",req.method)
    res.send(" world");
})
    
app.get('/a(bc)d',function(req,res){
    console.log("Req",req.method)
    res.send("hello");
    



})



app.listen(5000);

