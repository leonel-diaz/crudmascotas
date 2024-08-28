const express = require('express');
const router = express.Router();


const mascota = require('../models/mascota');

 router.get("/" , async (req,res)=>{
      try {
        const arrayMascotas = await mascota.find();
        res.render('mascotas',{arrayMascotas})
        
      } catch (error) {
        console.log(error);
        
      }
    
 });



 module.exports = router;