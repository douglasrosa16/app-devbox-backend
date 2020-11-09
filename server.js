const express = require('express');
const cors = require('cors');

const data = require('./data');

const app = express();
const dados = [];

app.use(express.json());
app.use(cors());

app.get('/users', (req, res) => {    
    return res.json({dados});
});

app.post('/cadastro', (req, res) => {
    const cad = req.body;
    dados.push(cad);
    
    return res.json({dados});
});
 
module.exports = app;
