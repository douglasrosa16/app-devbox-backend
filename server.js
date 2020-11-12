const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const Usuario = require('./models/User');

const app = express();

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
    const {name: usuario, wpp: whatsapp, age: age} = req.body;
    user = req.body;
    const mail = user.mail;
    console.log(mail);
    //console.log(req.body);
    /*
    const user = await Usuario.create({
        name: usuario,
        email: emailt,
        age: age,
        whatsapp : whatsapp,
        key: 4
    })
    */
    console.log(user);
    return res.json({ user });
});
 
module.exports = app;
