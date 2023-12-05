// routes/thoughtRoutes.js:
const express = require('express');
const router = require('express').Router();
const { Thought } = require('../models');

// Get all thoughts
router.get('/thoughts', async (req, res) => {
    try {
      const thoughts = await Thought.find({});
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // Get a single thought by id
  router.get('/thoughts/:id', async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.id);
      if (!thought) {
        return res.status(404).json({ message: 'No thought found with this id!' });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // update a specific thought
  router.put('/thoughts/:id', async (req, res) => {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!updatedThought) {
        res.status(404).json({ message: 'No thought found with this id!' });
        return;
      }
      res.json(updatedThought);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // POST route to create a new thought
router.post('/thoughts', async (req, res) => {
  try {
    const newThought = new Thought(req.body);
    const savedThought = await newThought.save();
    res.status(201).json(savedThought);
  } catch (err) {
    res.status(400).json(err);
  }
});

// remove a thought from the database
router.delete('/thoughts/:id', async (req, res) => {
  try {
    const deletedThought = await Thought.findByIdAndDelete(req.params.id);
    if (!deletedThought) {
      res.status(404).json({ message: 'No thought found with this id!' });
      return;
    }
    res.json({ message: 'Thought successfully deleted.' });
  } catch (err) {
    res.status(400).json(err);
  }
});

// POST a Reaction to a Thought
router.post('/thoughts/:thoughtId/reactions', async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $push: { reactions: req.body } },
      { new: true, runValidators: true }
    );
    if (!thought) {
      res.status(404).json({ message: 'No thought found with this id!' });
      return;
    }
    res.json(thought);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a Reaction from a Thought
router.delete('/thoughts/:thoughtId/reactions/:reactionId', async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: { _id: req.params.reactionId } } },
      { new: true }
    );
    if (!thought) {
      res.status(404).json({ message: 'No thought found with this id!' });
      return;
    }
    res.json(thought);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;