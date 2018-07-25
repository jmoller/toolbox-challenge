const texts = require('express').Router();

texts.post('/', (req, res) => {
	const message = req.body.message;
	if (message && message !== '') {
		res.status(200).send({message});
	} else {
		res.status(500).send({error: 'Message is either undefined or empty'});
	}
});

module.exports = texts;