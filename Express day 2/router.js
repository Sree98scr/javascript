var express = require('express');
var app=express();
var router=express.Router();

router.use(function(req, res, next) {
    alert("welcome");
next();
});
app.get('/', function(req, res,next) {
    res.send('Home page!');
next();
});

router.get('/page', function(req, res, next) {
    res.send('Hello World!');
    next();
});

router.get('/about', function(req, res, next) {
    res.send('goodbye');
    next();
});
app.use(function(req, res, next) {
    alert("The End");
});
app.listen(2000);
