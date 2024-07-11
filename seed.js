const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/social-network-api', { useNewUrlParser: true, useUnifiedTopology: true });

const users = [
  { name: 'John Doe', email: 'john@example.com' },
  { name: 'Jane Doe', email: 'jane@example.com' },
  { name: 'Bob Smith', email: 'bob@example.com' },
];

const thoughts = [
  { text: 'Hello, world!', userId: 1 },
  { text: 'This is a thought...', userId: 2 },
  { text: 'I love coding!', userId: 3 },
];

const reactions = [
  { thoughtId: 1, userId: 2, reaction: 'like' },
  { thoughtId: 1, userId: 3, reaction: 'love' },
  { thoughtId: 2, userId: 1, reaction: 'haha' },
];

const User = mongoose.model('User', {
  name: String,
  email: String,
});

const Thought = mongoose.model('Thought', {
  text: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Reaction = mongoose.model('Reaction', {
  thoughtId: { type: mongoose.Schema.Types.ObjectId, ref: 'Thought' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reaction: String,
});

async function seed() {
  await User.insertMany(users);
  await Thought.insertMany(thoughts);
  await Reaction.insertMany(reactions);
  console.log('Database seeded!');
  mongoose.disconnect();
}

seed();