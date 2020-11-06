const express = require('express');
const cors = require('cors');

const data = require('./data');

const app = express();

app.use(cors());

app.get('/users', (req, res) => {    
    return res.json({data});
});

app.post('/cadastro', (req, res) => {
    const dados = data;
    console.log(res.data);
    return res.json({dados});
})
 
module.exports = app;
