const express= require('express');
const router= express.Router();
// const Task= require('../models/Task');
const db = require ('../models/index')
const Task = db.Task


router.get('/',async(req,res)=>{
const listoftask=await Task.findAll();
    res.json(listoftask);
});

router.post('/',async(req,res)=>{
    try {
        const { username,task,description,email } = req.body;
        console.log('req',req.body); // Assuming req.body contains an array of tasks
        // const createdTasks = await  ({username,task,description,email});
        const createdTasks= await Task.create({username,task,description,email});
        res.json(createdTasks);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
    });
router.get('/:id',async(req,res)=>{
    const{id}=req.params;
    try{
        const task= await Task.findByPk(id);
        if(!task){
            return res.status(404).json({message:'Task not found'});
        }else{
            res.json(task);
        }
    }catch(error){
        res.status(500).json({message:'Server Error'});
    }

    });

    router.get('/user/:username',async(req,res)=>{
        const{username}=req.params;
            const task= await Task.findAll({where:{username}});
                res.json(task);
    });
    router.delete('/user/:username', async (req, res) => {
        const { username } = req.params;
        try {
          // Find all tasks with the given username
          const tasksToDelete = await Task.findAll({ where: { username } });
      
          // Check if there are tasks to delete
          if (tasksToDelete.length === 0) {
            return res.status(404).json({ message: 'No tasks found for the given username' });
          }
      
          // Delete all tasks found
          await Task.destroy({ where: { username } });
      
          res.json({ message: `Deleted all tasks for username ${username}` });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Server Error' });
        }
  
    });
    // PUT update task by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { username, task, description, email } = req.body;
  
    try {
      const updatedTask = await Task.findByPk(id);
      
      if (!updatedTask) {
        return res.status(404).json({ message: 'Task not found' });
      }
  
      // Update the task properties
      updatedTask.username = username;
      updatedTask.task = task;
      updatedTask.description = description;
      updatedTask.email = email;
  
      // Save the updated task
      await updatedTask.save();
  
      res.json(updatedTask);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
    module.exports=router;