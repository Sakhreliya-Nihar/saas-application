import mongoose, { Document, Model } from 'mongoose';

export interface ISubscription extends Document {
  userId: string;
  plan: 'free' | 'pro' | 'enterprise';
  status: 'active' | 'canceled' | 'past_due';
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  price: number;
}

const SubscriptionSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  plan: { type: String, enum: ['free', 'pro', 'enterprise'], required: true },
  status: { type: String, enum: ['active', 'canceled', 'past_due'], default: 'active' },
  currentPeriodStart: { type: Date, required: true },
  currentPeriodEnd: { type: Date, required: true },
  price: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.model<ISubscription>('Subscription', SubscriptionSchema);