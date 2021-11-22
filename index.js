// config inicial
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const usuarioRoutes = require('./routes/usuarioRoutes');
const salaRoutes = require('./routes/salaRoutes');
const personagemRoutes = require('./routes/personagemRoutes');
const cors = require('cors');
require('dotenv').config();

const LOGIN_DB = process.env.LOGIN_DB;
const PSW_DB = process.env.PSW_DB;

// ler Json / middleware
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());

// rotas API
app.use('/', usuarioRoutes);
app.use('/', salaRoutes);
app.use('/', personagemRoutes);
// rota inicial
app.get('/', (req, res) => {

    res.json({message: 'WEB SERVICE API REST - RPN'});

})

// entregar uma porta 
mongoose.connect('mongodb://rootrpn:1a2b3c4d@cluster0-shard-00-00.bsvza.mongodb.net:27017,cluster0-shard-00-01.bsvza.mongodb.net:27017,cluster0-shard-00-02.bsvza.mongodb.net:27017/dbrpn?ssl=true&replicaSet=atlas-2hligt-shard-0&authSource=admin&retryWrites=true&w=majority')
.then(() => {
    console.log("Conectado com sucesso!")
    app.listen(process.env.PORT || 3000);
    })
.catch(err => console.log(err));

