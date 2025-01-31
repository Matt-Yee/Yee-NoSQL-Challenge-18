const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: mongoose.Schema.Types.ObjectId
    },
    reactionBody: {
        type: String,
        required: true,
        min: 1,
        max: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;
