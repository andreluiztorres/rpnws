const mongoose = require('mongoose');

const Chat = mongoose.model('Chat', {
    idsala: String,
    texto: String,
});

module.exports = Chat;