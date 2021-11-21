const router = require('express').Router();
const Usuario = require('../models/usuarios');

// Cria Usuario
router.post('/usuario', async (req, res) => {

    const { nome, email, senha, nick } = req.body;
    
    if (!nome || !email || !senha || !nick) {
        res.status(422).json({ error: 'Todos os dados precisam ser preenchidos'});
    }
    
    const usuario = { nome, email, senha, nick };
    
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

    router.get('/usuario/:nick', async (req, res) => {

        const nick = req.params.nick;

        try {
            const usuario = await Usuario.findOne({nick: nick });
            res.status(200).json(usuario);
        }
        catch (error) {
            res.status(500).json({ error: error });
        }

    });

     // Atualizar Dados de um usuaio por id

     router.patch('/usuario/:id', async (req, res) => {

        const id = req.params.id;

        const { nome, email, senha, nick } = req.body;

        const usuario = { nome, email, senha, nick };

        try {
            const usuario = await Usuario.updateOne({_id: id }, usuario);
            res.status(200).json({ message: 'Usuario atualizado com sucesso!' });
        }
        catch (error) {
            res.status(500).json({ error: error });
        }

    });

    // Deletar um usuaio por id

    router.delete('/usuario/:id', async (req, res) => {

        const id = req.params.id;

        try {
            const usuario = await Usuario.findOne({ _id: id });
            res.status(200).json({ message: 'Usuario deletado com sucesso!' });
        }
        catch (error) {
            res.status(500).json({ error: error });
        }

    });

    module.exports = router;