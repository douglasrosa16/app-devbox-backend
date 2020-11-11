const express = require('express');

const Usuario = require('../models/user');

const router = express.Router();

router.post('/cadastroUser', async(req, res) => {   
    
    try {
        const usuario = await Usuario.create(req.body);
        
        return res.send({ usuario });

    } catch (err){
        return res.status(400).send({ error: ' Erro ao cadastrar usuario'})
    }
});

module.exports = app => app.use('/auth', router);