import mongoose from 'mongoose';

const participantSchema = new mongoose.Schema({
  participant_id: { type: String, required: true, unique: true },
  lastName: { type: String, required: true },
  firstName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  profile: { type: String, required: true },
}, { timestamps: true });

const Participant = mongoose.model('Participant', participantSchema);
export default Participant;
