// models/Thought.js:
const mongoose = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280, // Adjust the limits as per your requirement
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // Implement getter method to format the date if needed
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema] // Array of reactions
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
