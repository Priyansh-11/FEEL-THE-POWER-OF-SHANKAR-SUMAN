const express = require('express');
const app = express();

const port = process.env.PORT || 5000

// const port = 5000

app.get('/', (req, res) => res.send('Remade By Cliff S!!'));

app.listen(port, () =>
	console.log(`Your app is listening a http://localhost:${port}`)
);