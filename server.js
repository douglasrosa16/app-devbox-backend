const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const Usuario = require('./models/User');

const app = express();
const dados = [];

const datas = [];

app.use(express.json());
app.use(cors());

mongoose.connect(
    'mongodb://localhost:27017/nodedevbox', 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true
    }
);

app.get('/users', (req, res) => {    
    return res.json({dados});
});

app.post('/cadastro', async(req, res) => {
    const req_name = 'Wellen';
    const req_email = 'Wellen@hotmail.com';
    const req_age = '10';
    const req_whatsapp = '66999999';
    const req_key = '1';    

    const usuario = await Usuario.create({
        name: req_name,
        email: req_email,
        age: req_age,
        whatsapp : req_whatsapp,
        key: req_key
    })
    
    return res.json({ usuario });
});
 
module.exports = app;
