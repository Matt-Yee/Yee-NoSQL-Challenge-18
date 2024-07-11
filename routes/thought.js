const express = require('express');
const router = express.Router();
const { Thought } = require('../models');

router.get('/', async (req, res) => {
    try {
        const thoughts = await Thought.find().exec();
        res.json(thoughts);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const thought = await Thought.create(req.body);
        await thought.save();
        res.json(thought);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create thought' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.id).exec();
        res.json(thought);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(thought);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const thought = await Thought.findByIdAndDelete(req.params.id);
        res.json(thought);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;