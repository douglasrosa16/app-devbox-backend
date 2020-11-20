const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const Usuario = require('./models/user');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
    'mongodb+srv://devbox:devbox@cluster0.gpr2d.mongodb.net/<dbname>?retryWrites=true&w=majority', 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true
    }
);

app.get('/',(req, res) => {
    return res.json({mensagem: 'DevBox - HomePage'})
})


app.get('/users', async(req, res) => {    
    const users = await Usuario.find();
    
    return res.json(users);
});

app.post('/cadastro', async(req, res) => {
    const {name, wpp: whatsapp, age: idade, mail: mail} = req.body;
    
    const user = await Usuario.create({
        name,
        email: mail,
        age: idade,
        whatsapp : whatsapp,        
    })
        
    return res.json({ user });
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Servidor no ar!");
});

 

