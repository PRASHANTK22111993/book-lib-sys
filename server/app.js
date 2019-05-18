const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors())

app.get('/api/getBooksList', (req, res) => {
    let jsonData = {};
    fs.readFile('server/books/books.json', 'utf-8', (err, data) => {
        if (err) throw err
        jsonData = JSON.parse(data)
        res.send(jsonData);
    });
});

app.listen(port, () => console.log(`Online Library App listening on port ${port}!`))