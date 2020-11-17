const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const Usuario = require('./models/User');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
    process.env.MONGO_URL, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true
    }
);

app.get('/users', async(req, res) => {    
    const users = await Usuario.find();
    console.log(users);
    return res.json({users});
});

app.post('/cadastro', async(req, res) => {
    const {name , wpp: whatsapp, age: idade, mail: mail} = req.body;
    console.log(req.body);
    const user = await Usuario.create({
        name,
        email: mail,
        age: idade,
        whatsapp : whatsapp,        
    })
        
    return res.json({ user });
});
 
module.exports = app;
