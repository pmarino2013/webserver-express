const express = require('express') //agrego express al proyecto
const app = express() // asigno a app las funciones de express
const hbs = require('hbs'); 

require('./hbs/helpers')

app.use((express.static(__dirname + '/public'))); //para crear direccion estatica
                                                // y le mando la ruta publica

hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs'); //Para usar handlebars - plantillas ràpidas


//para las peticiones y respuestas por cada página
 app.get('/', function (req, res) {

//renderizar en la web el archivo handlebar
    res.render('home',{
        nombre:'Pablo'
        
    
    })
   
 });

 app.get('/about', function(req,res){

    res.render('about',{

            imagen:'assets/img/node.jpg',
            
    })

 })
// //Para manejar otra url por ejemplo: /data
// app.get('/data', function (req, res) {
//       res.send('Hola Data')
    
//     });

 //Configuro el puerto que va a estar escuchando
 // Mando un callback con el mensaje
app.listen(3000,()=>console.log('Escuchando en el puerto 3000'))