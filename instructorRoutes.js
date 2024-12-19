import express from 'express';
import Instructor from '../models/instructor.js';

const router = express.Router();

// Create an instructor
router.post('/instructors', async (req, res) => {
  try {
    const instructor = new Instructor(req.body);
    await instructor.save();
    res.status(201).json(instructor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all instructors
router.get('/instructors', async (req, res) => {
  try {
    const instructors = await Instructor.find();
    res.status(200).json(instructors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific instructor by ID
router.get('/instructors/:id', async (req, res) => {
  try {
    const instructor = await Instructor.findById(req.params.id);
    if (!instructor) return res.status(404).json({ error: 'Instructor not found' });
    res.status(200).json(instructor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an instructor
router.put('/instructors/:id', async (req, res) => {
  try {
    const instructor = await Instructor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!instructor) return res.status(404).json({ error: 'Instructor not found' });
    res.status(200).json(instructor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an instructor
router.delete('/instructors/:id', async (req, res) => {
  try {
    const instructor = await Instructor.findByIdAndDelete(req.params.id);
    if (!instructor) return res.status(404).json({ error: 'Instructor not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
