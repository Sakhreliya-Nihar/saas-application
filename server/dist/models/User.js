"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user', 'guest'], default: 'user' },
    subscription: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Subscription' },
}, { timestamps: true });
exports.default = mongoose_1.default.model('User', UserSchema);
//# sourceMappingURL=User.js.map