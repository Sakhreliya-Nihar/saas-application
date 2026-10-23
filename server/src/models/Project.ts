import mongoose, { Document, Model } from 'mongoose';

export interface IProject extends Document {
  name: string;
  description: string;
  ownerId: string;
  members: string[];
  status: 'active' | 'completed' | 'archived';
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  ownerId: { type: String, required: true },
  members: [{ type: String }],
  status: { type: String, enum: ['active', 'completed', 'archived'], default: 'active' },
}, { timestamps: true });

export default mongoose.model<IProject>('Project', ProjectSchema);