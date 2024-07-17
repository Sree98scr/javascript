const express= require('express')
var app = express()

let a=10;
let b=5;

app.get('/', function(req, res){
    res.send(`Sum of ${a} and ${b} is ${a+b}`);

})
app.use(basic);
app.get('/sub', function(req, res){
    res.send(`Subtraction of ${a} and ${b} is ${a-b}`)})

  app.get('/multi', function(req, res){
    res.send(`Multiplication of ${a} and ${b} is ${a*b}`)})
    app.get('/div', function(req, res){
        res.send(`Division of ${a} and ${b} is ${a/b}`)})


function basic(req, res, next){
    if(a>b){
        next()
    }
    else{
        res.send("Error: A should be greater than B")
    }
}



app.listen(2000);




