import mongoose from 'mongoose';

const trainingSchema = new mongoose.Schema({
  training_id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  field: { type: String, required: true },
  numberOfDays: { type: Number, required: true },
  year: { type: Number, required: true },
  month: { type: Number, required: true },
  trainer: { type: String, required: true },
  numberOfParticipants: { type: Number, required: true, min: 4 },
}, { timestamps: true });

const Training = mongoose.model('Training', trainingSchema);
export default Training;
