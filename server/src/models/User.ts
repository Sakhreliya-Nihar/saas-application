import mongoose, { Document, Model } from 'mongoose';

export interface IUser extends Document {
  email: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
  subscription?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user', 'guest'], default: 'user' },
  subscription: { type: mongoose.Schema.Types.ObjectId, ref: 'Subscription' },
}, { timestamps: true });

export default mongoose.model<IUser>('User', UserSchema);