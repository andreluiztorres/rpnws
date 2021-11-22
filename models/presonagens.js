const mongoose = require('mongoose');

const Personagem = mongoose.model('Personagem', {
    iduser: String,
    nome: String,
    classenivel: Number,
    antecedente: String,
    raca: String,   
    pontosxp: Number,
    pontosatributo: Number,
    forca:  Number,
    destreza: Number,
    constituicao: Number,
    inteligencia: Number,
    sabedoria: Number,
    carisma: Number,
    
});

module.exports = Personagem;