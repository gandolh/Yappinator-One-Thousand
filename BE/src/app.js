const express = require('express');
const hash = require('object-hash');

const app = express();
const port = 4000;

const api = '/api';

let cache = {};

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/1987', (req, res) => {
    res.status(418).send('Is that the bite of \'87?!');
});

app.post(`${api}/sendFile`, (req, res) => {
    // Replace with DB query for the check
    let requestHash = hash.MD5(req.body);
    if(cache[requestHash]) {
        res.status(400).json({ "error": "Object already exists!" })
    } else {
        // Add to DB with hash as ID, return hash only
        cache[requestHash] = req.body;
        res.status(201).json({ "ID": requestHash, "data": cache[requestHash] });
    }
});

app.get(`${api}/getCache`, (req, res) => {
    res.status(200).json(cache);
});

app.listen(port, () => {
    console.log(`Backend listening on port ${port}`)
});