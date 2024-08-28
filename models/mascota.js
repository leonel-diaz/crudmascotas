const moongose = require('mongoose');

const shema = moongose.Schema;

const mascotaShema= new shema ({
    nombre : String,
    descripcion :  String

});

const mascota = moongose.model('mascota',mascotaShema);

module.exports=mascota;