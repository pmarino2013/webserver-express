const express = require('express') //agrego express al proyecto
const app = express() // asigno a app las funciones de express
 
//para las peticiones y respuestas
app.get('/', function (req, res) {
//   res.send('Hola mundo')

let salida={
    nombre:'Pablo',
    edad:37,
    url:req.url
}

res.send(salida) //envío el json de salida y Express lo reconoce

});
//Para manejar otra url por ejemplo: /data
app.get('/data', function (req, res) {
      res.send('Hola Data')
    
    });

 //Configuro el puerto que va a estar escuchando
 // Mando un callback con el mensaje
app.listen(3000,()=>console.log('Escuchando en el puerto 3000'))