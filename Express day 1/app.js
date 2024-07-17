const  express= require('express');
const app = express();

//http methods-get,post,put ,delete
//app.get(route,callback(req,res))
app.get('/', (req, res)=> {
    res.send('Hello World!');
});
app.listen(3000);