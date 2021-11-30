const router = require('express').Router();
const Personagem = require('../models/presonagens');

// Cria Personagem
router.post('/personagem/cadastrar', async (req, res) => {

    const { 
        iduser,
        nome,
        classenivel,
        antecedente,
        raca,
        pontosxp,
        pontosatributo,
        forca,
        destreza,
        constituicao,
        inteligencia,
        sabedoria,
        carisma
      
     } = req.body;
    
    if (!nome) {
        res.status(422).json({ error: 'Nome precisa ser preenchido!'});
    }
    
    const personagem = { 
        iduser,
        nome,
        classenivel,
        antecedente,
        raca,
        pontosxp,
        pontosatributo,
        forca,
        destreza,
        constituicao,
        inteligencia,
        sabedoria,
        carisma
      
     };
    
    try  {
    
        await Personagem.create(personagem);
    
        res.status(201).json({ message: 'Personagem criado com sucesso!' });
    }
       catch (error) {
    
        res.status(500).json({ error: error });
    
    }
    });

    // Buscar todos os Personagems

    router.get('/personagem', async (req, res) => {
            
            try {
                const personagem = await Personagem.find();
                res.status(200).json(personagem);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
    });

    // Buscar um usuaio por id

    router.get('/personagem/id/:id', async (req, res) => {

        const id = req.params.id;

        try {
            const personagem = await Personagem.findOne({ _id: id });
            res.status(200).json(personagem);
        }
        catch (error) {
            res.status(500).json({ error: error });
        }

    });

    // Buscar um usuaio por nickname

    router.get('/personagem/nick/:nick', async (req, res) => {

        const nick = req.params.nick;

        try {
            const personagem = await Personagem.findOne({nick: nick });
            res.status(200).json(personagem);
        }
        catch (error) {
            res.status(500).json({ error: error });
        }

    });

     // Atualizar Dados de um usuaio por id

     router.patch('/personagem/alteraritem', async (req, res) => {

        const id = req.body._id;
        const body = req.body;        

        try {
            const personagem = await Personagem.updateOne({_id: id }, body);
            res.status(200).json({ message: 'Personagem atualizado com sucesso!' });
        }
        catch (error) {
            res.status(500).json({ error: error });
        }

    });

    // Deletar um usuaio por id

    router.delete('/personagem/deletar/:id', async (req, res) => {

        const id = req.params.id;

        if(!personagem) {
            res.status(422).json({ error: 'Personagem não encontrado' });
        }

        try {
            await Personagem.deleteOne({ _id: id });
            res.status(200).json({ message: 'Personagem deletado com sucesso!' });
        }
        catch (error) {
            res.status(500).json({ error: error });
        }

    });

    module.exports = router;