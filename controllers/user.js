'use strict'

function pruebas(req, res) {
	res.status(200).send({
		message: 'Prueba de contralador de usuario'
	});
}

module.exports = {
	pruebas
};