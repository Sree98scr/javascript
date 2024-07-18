const  express= require('express');
const app = express();

//http methods-get,post,put ,delete

app.get('/', (req, res)=> {
    res.send('Hello World!');
});
app.post('/post', (req, res)=> {
    console.log('POST request')
    res.send('Hello !');
});
app.put('/put', (req, res)=> {
    console.log('PUT request')
    res.send('good morning!');


});app.delete('/delete', (req, res)=> {
    console.log('DELETE request')
    res.send('good evening!');
});
app.listen(3000);
