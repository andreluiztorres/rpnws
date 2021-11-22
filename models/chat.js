const mongoose = require('mongoose');

const Chat = mongoose.model('Chat', {
    idsala: String,
    texto: String,
    nomepers: String,
    idusuario: String,
    datahora: String,
});

module.exports = Chat;