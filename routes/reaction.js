const express = require('express');
const router = express.Router();
const { Reaction } = require('../models');

router.get('/', async (req, res) => {
    try {
        const reactions = await Reaction.find().exec();
        res.json(reactions);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const reaction = await Reaction.create(req.body);
        await reaction.save();
        res.json(reaction);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create reaction' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const reaction = await Reaction.findById(req.params.id).exec();
        res.json(reaction);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const reaction = await Reaction.findByIdAndUpdate(req
            .params.id, req.body, { new: true });
        res.json(reaction);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const reaction = await Reaction.findByIdAndDelete(req.params.id);
        res.json(reaction);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;