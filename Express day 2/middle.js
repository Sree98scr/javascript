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
    res.write('<h1>loginpage-home</h1>');
    res.write('<h2>loginpage-home</h2>');
    res.write('<h3>loginpage-home</h3>');
    res.send()//to end
});

app.get('/login', (req, res) => {
    res.send('Login Successful');

});
app.get('/feed', (req, res) => {
    res.send('Feedpage Successful');

})  ;

app.listen(5000);