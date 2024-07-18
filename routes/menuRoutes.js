const express = require('express');
const router = express.Router();
const menu = require('../models/menu')


  router.post('/menu', async (req, res) => {
   try {
     const data = req.body; // Request body contains the person data
     console.log('Received data:', data); // Received JSON data
 
     const newMenu = new menuenu(data);
 
     // Save the new person to the database
     const response = await newMenu.save();
     console.log('data saved');
     res.status(200).json(response);
   } catch (err) {
     console.log(err);
     res.status(500).json({ error: 'Internal Server Error' });
   }
 });
     router.get('/', async(req , res) =>{
    try {
     const data = await menu.find()
     console.log('data fetched successfully ')
     res.status(200).json(data)
 
    } catch (err) {
     console.log(err);
     res.status(500).json({error: 'Internal Server Error'})
     
    }
  })
     

 module.exports = router;