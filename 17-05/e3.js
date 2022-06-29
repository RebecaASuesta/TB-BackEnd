const express = require("express");
const app = express();
const puerto = 3000;
// const path = require("path");

// no sé si hay que poner una de estas dos
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'))
// })
// app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

const productos = {
    description: 'Productos',
    items: [
        {id: 1, nombre: 'Taza de Harry Potter', precio: 300},
        {id: 2, nombre: 'FIFA 22 PS5', precio: 1000},
        {id: 3, nombre: 'Figura Goku Super Saiyan', precio: 100},
        {id: 4, nombre: 'Zelda Breath of the Wild', precio: 200},
        {id: 5, nombre: 'Skin Valorant', precio: 120},
        {id: 6, nombre: 'Taza de Star Wars', precio: 220}
]}

app.get('/productos', (req, res) => {
    res.send(productos.items)
  });

app.post('/productos', (req, res) => {
    const nuevoProducto = {
        id: productos.items.length + 1,
        nombre: req.body.nombre,
        precio: req.body.precio
    };
    if (!req.body.nombre || !req.body.precio) {
        res.status(400).send("Rellena todos los campos")
    } else {
        productos.items.push(nuevoProducto);
        res.send(nuevoProducto)
    }
});

// Poner en Postman:
// {
//     "nombre": "Botella",
//     "precio": 5
// }

app.put('/productos/:id', (req, res) => {
    const encontrar = productos.items.some(producto => producto.id === +req.params.id)
    if(encontrar) {
        productos.items.forEach(producto => {
            if(+req.params.id === producto.id){
                producto.nombre = req.body.nombre ? req.body.nombre : producto.nombre
                producto.precio = req.body.precio ? req.body.precio : producto.precio
                res.send(producto)
            }
        })
    } else {
        res.status(404).send(`El producto con id ${req.params.id} no fue encontrado`)
    }
});

app.delete('/productos/:id', (req, res) => {
    const encontrar = productos.items.some(producto => producto.id === +req.params.id)
    if(encontrar) {
        const productosFiltrados = productos.items.filter(producto => producto.id !== +req.params.id)
        res.send({msg:`El producto con id ${req.params.id} fue eliminado`, productosFiltrados})
    } else {
        res.status(404).send(`El producto con id ${req.params.id} no fue encontrado`)
    }
});

// De aquí para abajo corregido de Vane
app.get('/productos/por_precio/:precio', (req, res) => {
    const encontrar = productos.items.some(producto => producto.precio === +req.params.precio)
    if(encontrar) {
        const productosFiltrados = productos.items.filter(producto => producto.precio == +req.params.precio)
        res.send(productosFiltrados)
    } else {
        res.status(404).send(`No se encontraron productos por valor de ${req.params.precio}`)
    }
});

app.get('/productos/rango_precio', (req, res) => {
    const encontrar = productos.items.some(producto => producto.precio >= 50 && producto.precio <= 250)
    if(encontrar) {
        // const productosFiltrados = productos.items.filter(producto => producto.precio == +req.params.precio)
        res.send(items.filter(producto => producto.precio >= 50 && producto.precio <= 250))
    } else {
        res.status(404).send(`No se encontraron productos en este rango de precio`)
    }
});

app.get('/productos/por_id/:id', (req, res) => {
    const encontrar = productos.items.some(producto => producto.id === +req.params.id)
    if(encontrar) {
        const productosFiltrados = productos.items.filter(producto => producto.id == +req.params.id)
        res.send(productosFiltrados)
    } else {
        res.status(404).send(`El producto con id ${req.params.id} no fue encontrado`)
    }
});

app.get('/productos/por_nombre/:nombre', (req, res) => {
    const encontrar = productos.items.some(producto => producto.nombre === +req.params.nombre)
    if(encontrar) {
        const productosFiltrados = productos.items.filter(producto => producto.nombre == +req.params.nombre)
        res.send(productosFiltrados)
    } else {
        res.status(404).send(`El producto ${req.params.nombre} no fue encontrado`)
    }
});

app.listen(puerto, () => {
  console.log(`Servidor levantado en el puerto ${puerto}`);
});