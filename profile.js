import mongoose from 'mongoose';

// Define the Profile schema
const profileSchema = new mongoose.Schema({
  profile_id: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  field: { type: String, required: true }, // Example: IT, Management, etc.
}, { timestamps: true }); // Adds createdAt and updatedAt fields automatically

// Create the Profile model
const Profile = mongoose.model('Profile', profileSchema);

export default Profile;
