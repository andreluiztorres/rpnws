const router = require('express').Router();
const Sala = require('../models/salas');

// Cria Sala
router.post('/sala/cadastrar', async (req, res) => {

    const { nome, descricao, senha, mestre, dadoTipo, dadoValor } = req.body;
    
    if (!nome || !descricao) {
        res.status(422).json({ error: 'Nome e Descrição precisam ser preenchidos'});
    }
    
    const sala = { nome, descricao, senha, mestre, dadoTipo, dadoValor };
    
    try  {
    
        await Sala.create(sala);
    
        res.status(201).json({ message: 'Sala criada com sucesso!' });
    }
       catch (error) {
    
        res.status(500).json({ error: error });
    
    }
    });

    // Buscar todas as Salas

    router.get('/sala', async (req, res) => {
            
            try {
                const sala = await Sala.find();
                res.status(200).json(sala);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
    });

    // Buscar uma sala por id

    router.get('/sala/id/:id', async (req, res) => {

        const id = req.params.id;

        try {
            const sala = await Sala.findOne({ _id: id });
            res.status(200).json(sala);
        }
        catch (error) {
            res.status(500).json({ error: error });
        }

    });

    // Atualizar Resultado Dados de uma sala por id

     router.patch('/sala/atualizar/:id', async (req, res) => {

        const id = req.params.id;

        const { dadoTipo, dadoValor } = req.body;

        const sala = { dadoTipo, dadoValor };

        try {
            const sala = await Sala.updateOne({_id: id }, sala);
            res.status(200).json({ message: 'Sala atualizada com sucesso!' });
        }
        catch (error) {
            res.status(500).json({ error: error });
        }

    });

    
    module.exports = router;