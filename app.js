const express = require('express')
const app = express()
const port = 3000

//motor de plantillas ENRUTAMIENTO
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//mildeware para contenido estatico
app.use(express.static(__dirname + '/public'));


//enrutamiento del proyecto
app.use('/',require('./router/rutasweb'));
app.use('/mascotas',require('./router/mascotas'));




//codigo error para pagina 404
app.use((req,res,next)=>{
  res.status(404).render("404",{
    titulo:"error 404 ",
    descripcion:"pagina de error genereral 404"
  })
});



app.listen(port, () => {
  console.log(`Example app listening on port  ${port}`)
})
