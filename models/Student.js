import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rollNumber: { type: String, required: true },
  department: { type: String, required: true },
  cgpa: { type: Number, required: true },
  resumeURL: { type: String },
  applications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Placement' }]
}, { timestamps: true });

export default mongoose.model('Student', studentSchema);
