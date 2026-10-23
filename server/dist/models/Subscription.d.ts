import mongoose, { Document, Model } from 'mongoose';
export interface ISubscription extends Document {
    userId: string;
    plan: 'free' | 'pro' | 'enterprise';
    status: 'active' | 'canceled' | 'past_due';
    currentPeriodStart: Date;
    currentPeriodEnd: Date;
    price: number;
}
declare const _default: Model<ISubscription, {}, {}, {}, Document<unknown, {}, ISubscription, {}, mongoose.DefaultSchemaOptions> & ISubscription & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, ISubscription & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}>;
export default _default;
