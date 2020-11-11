const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: String,
    key: String,
    whatsapp: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },    
});

module.exports = mongoose.model('Usuario', UsuarioSchema);