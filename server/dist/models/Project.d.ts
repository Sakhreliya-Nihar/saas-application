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
declare const _default: Model<IProject, {}, {}, {}, Document<unknown, {}, IProject, {}, mongoose.DefaultSchemaOptions> & IProject & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IProject & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}>;
export default _default;
