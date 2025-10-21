import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  website: { type: String },
  description: { type: String },
  jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Placement' }]
}, { timestamps: true });

export default mongoose.model('Company', companySchema);
