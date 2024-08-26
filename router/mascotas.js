const express = require('express');
const router = express.Router();


 router.get("/" ,(req,res)=>{
   res.render("mascotas",{arrayMascotas : [
      {id:'0001',nombre:'rex',descripcion:'perro pastor aleman'},
      {id:'0002',nombre:'vela',descripcion:'gato'},
      {id:'0003',nombre:'kira',descripcion:'perro'},
      {id:'0004',nombre:'mora',descripcion:'perro pastor aleman'}
   ]});
    
 });



 module.exports = router;