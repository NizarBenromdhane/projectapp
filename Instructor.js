import mongoose from 'mongoose';

const instructorSchema = new mongoose.Schema({
  instructor_id: { type: String, required: true, unique: true },
  lastName: { type: String, required: true },
  firstName: { type: String, required: true },
  field: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
}, { timestamps: true });

const Instructor = mongoose.model('Instructor', instructorSchema);
export default Instructor;