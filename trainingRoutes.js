import express from 'express';
import Training from '../models/training.js';

const router = express.Router();

router.post('/trainings', async (req, res) => {
  try {
    const training = new Training(req.body);
    await training.save();
    res.status(201).json(training);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/trainings', async (req, res) => {
  try {
    const trainings = await Training.find();
    res.status(200).json(trainings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/trainings/:id', async (req, res) => {
  try {
    const training = await Training.findByIdAndDelete(req.params.id);
    if (!training) return res.status(404).send('Training not found');
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;


