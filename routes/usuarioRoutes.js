const router = require('express').Router();
const Usuario = require('../models/usuarios');

// Cria Usuario
router.post('/usuario', async (req, res) => {

    const { nome, email, senha } = req.body;
    
    if (!nome || !email || !senha) {
        res.status(422).json({ error: 'Todos os dados precisam ser preenchidos'});
    }
    
    const usuario = { nome, email, senha };
    
    try  {
    
        await Usuario.create(usuario);
    
        res.status(201).json({ message: 'Usuario criado com sucesso!' });
    }
       catch (error) {
    
        res.status(500).json({ error: error });
    
    }
    });

    // Buscar todos os Usuarios

    router.get('/usuario', async (req, res) => {
            
            try {
                const usuario = await Usuario.find();
                res.status(200).json(usuario);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
    });

    // Buscar um usuaio por id

    router.get('/usuario/:id', async (req, res) => {

        const id = req.params.id;

        try {
            const usuario = await Usuario.findOne({ _id: id });
            res.status(200).json(usuario);
        }
        catch (error) {
            res.status(500).json({ error: error });
        }

    });

    // Buscar um usuaio por email

    router.get('/usuario/:email', async (req, res) => {

        const email = req.params.email;

        try {
            const usuario = await Usuario.findOne({email: email });
            res.status(200).json(usuario);
        }
        catch (error) {
            res.status(500).json({ error: error });
        }

    });

    module.exports = router;