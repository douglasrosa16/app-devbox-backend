const mongoose = require('../database');

const UsuarioSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    whatsapp: {
        type: String,
        require: true
    }   
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;