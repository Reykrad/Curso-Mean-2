'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargar Rutas

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Configurar cabeceras http

// Rutas bases 

app.get('/pruebas', function(req, res){
	res.status(200).send({message: 'Bienvenido al curso Mean2'});
});

module.exports = app;