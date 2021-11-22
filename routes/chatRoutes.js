const router = require('express').Router();
const Chat = require('../models/chat');

// Cria Chat
router.post('/chat/cadastrar', async (req, res) => {

    const { idsala, idusuario, texto, nomepers, datahora } = req.body;

   
    
    const chat = {  idsala, idusuario, texto, nomepers, datahora };
    
    try  {
    
        await Chat.create(chat);
    
        res.status(201).json({ message: 'Chat criado com sucesso!' });
    }
       catch (error) {
    
        res.status(500).json({ error: error });
    
    }
    });

  
    // Buscar Chat por idSala

    router.get('/chat/idsala/:idsala', async (req, res) => {

        const id = req.params.idsala;

        try {
            const chat = await Chat.findOne({ idsala: idsala });
            res.status(200).json(chat);
        }
        catch (error) {
            res.status(500).json({ error: error });
        }

    });

  
    // Deletar um usuaio por id

    router.delete('/chat/deletar/:id', async (req, res) => {

        const id = req.params.id;

        if(!chat) {
            res.status(422).json({ error: 'Chat não encontrado' });
        }

        try {
            await Chat.deleteOne({ _id: id });
            res.status(200).json({ message: 'Chat deletado com sucesso!' });
        }
        catch (error) {
            res.status(500).json({ error: error });
        }

    });

    module.exports = router;