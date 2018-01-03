'use strict'

var express = require('express');
var UserController = require('../controllers/user.js');

var api =  express.Router();

api.get('/probando-controlador', UserController.pruebas);

module.exports = api;