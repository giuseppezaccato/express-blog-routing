
//task importo express
const express = require("express");

//task creo istanza tramite la classe epress.Router()
const blog = express.Router()

// const posts = require("./")
const posts = require("../public/data")



//task raccolgo tutte le rotte qui(REST) facendo riferimento alla variabile sopra 

//* index
blog.get('/posts', function (req, res) {
    // res.send('Lista delle pizze');
    req.json(posts)
});

//* show
blog.get('/posts/:id', function (req, res) {
    res.send('Dettagli della pizza ' + req.params.id);
});

//* store
blog.post('/posts', function (req, res) {
    res.send('Creazione nuova pizza');
});

//* update
blog.put('/posts/:id', function (req, res) {
    res.send('Modifica integrale della pizza ' + req.params.id);
});

//* modify
blog.patch('/posts/:id', function (req, res) {
    res.send('Modifica parziale della pizza ' + req.params.id);
});

//* destroy
blog.delete('/posts/:id', function (req, res) {
    res.send('Eliminazione della pizza ' + req.params.id);
});

module.exports = blog