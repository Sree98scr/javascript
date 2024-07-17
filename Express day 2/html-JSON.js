const express= require('express');
const app = express();
let name="sree";
let password=1234;

function loginmiddleware(req,res,next) {
    if (name=="sree" && password ==1234){
     next();
    }
    else{
     res.send('Invalid credentials');
   
    }
    
 }
 app.use(loginmiddleware);

app.get('/', function(req, res) {
   
    res.send("Welcome")
});

app.get('/login', (req, res) => {
    res.json([{
        firstName: 'John',lastName: 'Doe', age: 30
        },{
        firstName: 'sree', lastName: 'laksh', age:23
    }]);

});
app.get('/feed', (req, res) => {
    res.send('Feedpage Successful');

})  ;

app.listen(5000);