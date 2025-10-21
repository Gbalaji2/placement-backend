import mongoose from 'mongoose';

const placementSchema = new mongoose.Schema({
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  type: { type: String, enum: ['Full-time', 'Internship'], required: true },
  applications: [{
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    status: { type: String, enum: ['Applied', 'Shortlisted', 'Interviewed', 'Selected', 'Rejected'], default: 'Applied' }
  }],
  interviewDate: { type: Date }
}, { timestamps: true });

export default mongoose.model('Placement', placementSchema);
