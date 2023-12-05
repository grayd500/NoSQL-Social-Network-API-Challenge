// models/Reaction.js:
const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280 // Adjust as needed
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
    // Implement getter method to format the date if needed
  }
}, {
  toJSON: {
    getters: true
  },
  id: false
});

module.exports = reactionSchema;