'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.Promise = global.Promise; // elimina el aviso de mongoose en consola
mongoose.connect('mongodb://localhost:27017/curso_mean2', (err, res) => {
	if( err ) {
		throw err;
	}else {
		console.log("DB ON");

		app.listen(port, function(){
			console.log("Server ON: 3977");
		});
	}
});