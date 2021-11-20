const mongoose = require('mongoose');

const Person = mongoose.model('Usuario', {
    nome: String,
    email: String,
    senha: String,
    
});

module.exports = Usuario;