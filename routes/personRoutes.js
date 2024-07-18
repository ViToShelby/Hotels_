const express = require('express');
const router = express.Router();
const Person = require('../models/Person')

router.post('/', async (req, res) => {
    try {
      const data = req.body; // Request body contains the person data
      console.log('Received data:', data); // Received JSON data
  
      const newPerson = new Person(data);
  
      // Save the new person to the database
      const response = await newPerson.save();
      console.log('data saved');
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.get('/', async (req, res) => {
    try {
      const data = await Person.find();
      console.log('data fetched');
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.get('/', async (req, res) => {
    try {
      const data = await Person.find();
      console.log('data fetched');
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.get('/:workType', async(req , res) =>{
    try {
      const workType = req.params.workType;
     
    if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
     
      const response = await Person.find({work: workType});
      console.log('response fetched');
      res.status(200).json(response)

    } else{
      res.status(404).json({error: 'Invalid work Type'})
    }
    } catch (err) {
      console.log(err)
        res.status(500).json({error: 'Inernal server Error'})
      
    }
  })

   router.put('/:id', async(req , res)=>{
    try {
        const personId = req.params.id; // extract url from the url parameter
        const updatePersonData = req.body; // updated data for the person

        const response = await Person.findByIdAndUpdate(personId, updatePersonData,{
            new: true, //return update document 
            runValidators: true, // Run Mongoose validation
        })

        if(!response){
            return res.status(400).json({error: 'Person not found'});
        }

        console.log('data updated');
        
        res.status(200).json(response);
   
    } catch (err) {
        console.log(err)
        res.status(500).json({error: 'Internal Server Error' })
    }
   })

   router.delete('/:id', async(req, res)=>{
    try {
      const personId = req.params.id // extract file id from the URL parameter
      const response = await Person.findByIdAndRemove(personId);

      if(!response){
        return res.status(400).json({error: 'Person not found'});
      }
      console.log('data deleted')
      res.status(200).json({message: 'person Deleted sucessfully'})
    } catch (error) {
      console.log(err);
      res.status(500).json({error: 'internal server error'})
    }
      
  })
   


  module.exports = router;