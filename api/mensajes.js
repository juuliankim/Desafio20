const Mensaje = require('../models/mensaje')
const MongoCRUD = require('../repository/crud')

class Mensajes extends MongoCRUD {

    constructor() {
        super(Mensaje)
    }
    
}

module.exports = new Mensajes()

/* async guardar(mensaje) {
    try {
        return await Mensaje.guardar(mensaje)
    } catch (error) {
        throw error
    }
}

async buscar(condicion) {
    try {
        return await Mensaje.buscar(condicion)
    } catch (error) {
        throw error
    }
} */

/* const fs = require('fs')

class Mensajes {
    constructor() {
        this.mensajes = []
    }

    guardarMensajes(mensaje) {
        this.mensajes.push(mensaje)
        fs.writeFileSync('./assets/mensajes.txt', JSON.stringify(this.mensajes, null, '\t'))
    }

    leerMensajes() {
        let contenidoArchivo =  fs.readFileSync('./assets/mensajes.txt', 'utf-8')
            if(contenidoArchivo.length > 0){
                this.mensajes = JSON.parse(contenidoArchivo);
            }
        return this.mensajes; 
    }
}

module.exports = new Mensajes() */