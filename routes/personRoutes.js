const router = require('express').Router();
const Person = require('../models/person');

// Create a new person
router.post('/', async (req, res) => {

    const { name, salary, approved } = req.body;
    
    if (!name) {
        res.status(422).json({ error: 'Todos os dados precisam ser preenchidos'});
    }
    
    const person = { name, salary, approved };
    
    try  {
    
        await Person.create(person);
    
        res.status(201).json({ message: 'Pessoa criada com sucesso!' });
    }
       catch (error) {
    
        res.status(500).json({ error: error });
    
    }
    });

    // Get all persons

    router.get('/', async (req, res) => {
            
            try {
                const persons = await Person.find();
                res.status(200).json(persons);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
    });

    // Get a person by ID

    router.get('/:id', async (req, res) => {

        const id = req.params.id;

        try {
            const person = await Person.findOne({ _id: id });
            res.status(200).json(person);
        }
        catch (error) {
            res.status(500).json({ error: error });
        }

    });

    module.exports = router;