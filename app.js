import express from 'express';
import mongoose from 'mongoose';
import profileRoutes from './routes/profileRoutes.js';
import participantRoutes from './routes/participantRoutes.js';
import instructorRoutes from './routes/instructorRoutes.js";
import trainingRoutes from './routes/trainingRoutes.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public'));  // Serve the frontend static files from 'public'

// Routes
app.use("/participants", participantRoutes);
app.use("/instructors", instructorRoutes);
app.use("/trainings",trainingRoutes);

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/trainingManagement', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
