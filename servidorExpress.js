const express = require('express')
const fs = require('fs')
const app = express()

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http esta escuchando el puerto ${server.address().port}`);
})

class Contenedor{
    constructor(title, price, thumbnail, id){
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
        this.id = id;
    }
}

let productos = fs.readFile('productos.txt', (error, dataProductos) => {
    if (error) {
        console.log(error);
    } else {
       productos = JSON.parse(dataProductos);
    }
});

app.get('/productos', (req, res) => {
    res.send(`Los productos son: ${JSON.stringify(productos, null, '\n')}`);
})

app.get('/productoRandom', (req, res) => {
    let productoRandom = productos[Math.floor(Math.random() * productos.length)];
    res.send(`El objeto aleatorio es: ${JSON.stringify(productoRandom)}`)
})