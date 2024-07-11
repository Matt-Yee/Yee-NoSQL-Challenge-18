const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
    try {
        const users = await User.find().exec();
        res.json(users);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body);
        await user.save();
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create user' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).exec();
        res.json(user);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req
            .params.id, req.body, { new: true });
        res.json(user);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.json(user);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;