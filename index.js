// config inicial
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const personRoutes = require('./routes/personRoutes');
const cors = require('cors');

// ler Json / middleware
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());

// rotas API
app.use('/person', personRoutes);
// rota inicial
app.get('/', (req, res) => {

    res.json({message: 'Ola Mundo!!!'});

})

// entregar uma porta 
mongoose.connect('mongodb://rootrpn:1a2b3c4d@cluster0-shard-00-00.bsvza.mongodb.net:27017,cluster0-shard-00-01.bsvza.mongodb.net:27017,cluster0-shard-00-02.bsvza.mongodb.net:27017/dbrpn?ssl=true&replicaSet=atlas-2hligt-shard-0&authSource=admin&retryWrites=true&w=majority')
.then(() => {
    console.log("Conectado com sucesso!")
    })
.catch(err => console.log(err));

app.listen(process.env.PORT || 3000);