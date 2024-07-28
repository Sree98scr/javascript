const express= require('express');

const app = express();
const cors= require('cors');

app.use(express.json());

app.use(cors());
 const db= require('./models/index');

 const taskRouter=require('./routes/Task');
 app.use('/tasks',taskRouter);

 db.sequelize.sync().then(() =>{
    app.listen(3001, () => {
        console.log('Server is running on port 3001');  // server is running on port 3001
     }); 
 })
