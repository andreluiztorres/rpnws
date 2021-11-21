const mongoose = require('mongoose');

const Sala = mongoose.model('Sala', {
    nome: String,
    descricao: String,
    senha: String,
    mestre: String,
    dadoTipo: Number,
    dadoValor: Number,
    
});

module.exports = Sala;