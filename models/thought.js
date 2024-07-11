const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        min: 1,
        max: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    reactions: [
        {
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
        }
    ]
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;