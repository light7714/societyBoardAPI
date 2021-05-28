const express = require('express');

const indexRoutes = require('./routes/index');

const PORT = 8000;

const app = express();

app.use(express.json());

//to avoid cors issue
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, PATCH, DELETE'
	);
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Content-Type, Authorization'
	);

	next();
});

app.use(indexRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

process.on('SIGINT', () => {
	console.log('\nShutting down');
	process.exit(1);
});