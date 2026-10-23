"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const SubscriptionSchema = new mongoose_1.default.Schema({
    userId: { type: String, required: true },
    plan: { type: String, enum: ['free', 'pro', 'enterprise'], required: true },
    status: { type: String, enum: ['active', 'canceled', 'past_due'], default: 'active' },
    currentPeriodStart: { type: Date, required: true },
    currentPeriodEnd: { type: Date, required: true },
    price: { type: Number, required: true },
}, { timestamps: true });
exports.default = mongoose_1.default.model('Subscription', SubscriptionSchema);
//# sourceMappingURL=Subscription.js.map