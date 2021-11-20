const router = require('express').Router();
const Usuario = require('../models/usuarios');

// Cria Usuario
router.post('/', async (req, res) => {

    const { nome, email, senha } = req.body;
    
    if (!name) {
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

    router.get('/', async (req, res) => {
            
            try {
                const usuarios = await Usuario.find();
                res.status(200).json(usuarios);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
    });

    // Buscar um usuaio por id

    router.get('/:id', async (req, res) => {

        const id = req.params.id;

        try {
            const usuario = await Usuario.findOne({ _id: id });
            res.status(200).json(usuario);
        }
        catch (error) {
            res.status(500).json({ error: error });
        }

    });

    module.exports = router;