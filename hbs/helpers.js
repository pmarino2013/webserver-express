const hbs = require('hbs'); 

hbs.registerHelper('getAnio',()=>{
    return new Date().getFullYear()
})

hbs.registerHelper('capitalizar', (texto)=>{

    let palabras = texto.charAt(0).toUpperCase()
    let resto=texto.substr(1,texto.length -1).toLowerCase()
    return palabras+resto

})