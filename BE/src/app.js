const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/1987', (req, res) => {
    res.send('Is that the bite of \'87?!');
});

app.listen(port, () => {
    console.log(`Backend listening on port ${port}`)
});