const express = require('express');
const cors = require('cors');

const data = require('./data');

const app = express();
require('./controllers/userController')(app);
const datas = [];

app.use(cors());
app.use(express.json());
app.get('/users', (req, res) => {    
    return res.json({datas});
});

app.post('/cadastro', (req, res) => {
    const dados = req.body;
        
    datas.push(dados);
    
    return res.json({datas});
})
 
module.exports = app;
