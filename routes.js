const express=require('express')
const course  = require('./mongomodel')

const router = express.Router()

//create a course
router.post('/courses', async(req,res)=>{ 
    try{
        const corse = new course(req.body)
        await corse.save()
        res.status(201).send(corse)
    }
    catch(error){
        res.status(400).send({error:error.message})
    }
})

//read the course
router.get('/courses', async (req,res)=>{
    try{
        const courses = await course.find()
        res.status(200).send(courses)
    }
    catch(error){
        res.status(400).send({error:error.message})
    }

})

router.get('/courses/:id',async (req,res)=>{
    try{
        const coursen = await course.findById (req.params.id)
        res.status(200).send(coursen)
    }
    catch(error){
        res.status(400).send({error:error.message})
    }
})

//update the course
router.put('/courses/:id', async (req,res)=>{
    try{
      const corse = await course.findByIdAndUpdate(req.params.id,req.body,{new:true})
      if(!corse){
        return res.status(404).send({error:'Course not found!!'})
      }
      res.send(corse)
    } 
    catch(error){
        res.status(400).send({error:error.message})
    }
})

//delete the course
router.delete('/courses/:name', async (req, res) => {
    try {
        // Find and delete the course by name
        const corse = await course.findOneAndDelete({ name: req.params.name });

        // If no course is found, send a 404 response
        if (!corse) {
            return res.status(404).send({ error: 'Course with the given name not found' });
        }

        // Send a success response with the deleted course details
        res.send({ message: 'Course deleted successfully', course });
    } catch (error) {
        // Handle any server errors and send a 500 response
        res.status(500).send({ error: error.message });
    }
});

module.exports=router;
 

