const http = require('http') //uso http de node

//creo servidor con callback mandando 
// peticion y respuesta (req,res)
http.createServer((req, res)=>{


    res.write('Hola mundo');//escribo mensaje en navegador
    res.end();//cierro la respuesta para que aparezca

})
.listen(8080) //defino el puerto que estarà escuchando

//mensaje que aparece en el servidor
console.log('Escuchando en el puerto 8080')
