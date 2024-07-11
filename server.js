const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/social-network-api', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to the database');
});

app.use(express.json());

const userRouter = require('./routes/user');
const reactionRouter = require('./routes/reaction');
const thoughtRouter = require('./routes/thought');

app.use('/api/users', userRouter);
app.use('/api/reactions', reactionRouter);
app.use('/api/thoughts', thoughtRouter);

app.get('/', (req, res) => {
    res.send('Hello World! Server is running on http://localhost:3000');
  });

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});