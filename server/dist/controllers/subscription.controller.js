"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubscription = exports.createSubscription = void 0;
const Subscription_1 = __importDefault(require("../models/Subscription"));
const User_1 = __importDefault(require("../models/User"));
const createSubscription = async (req, res) => {
    const { userId, plan } = req.body;
    const currentPeriodStart = new Date();
    const currentPeriodEnd = new Date();
    currentPeriodEnd.setMonth(currentPeriodStart.getMonth() + 1);
    try {
        const priceMap = { free: 0, pro: 9.99, enterprise: 49.99 };
        const subscription = new Subscription_1.default({
            userId,
            plan,
            currentPeriodStart,
            currentPeriodEnd,
            price: priceMap[plan] || 0,
        });
        await subscription.save();
        await User_1.default.findByIdAndUpdate(userId, { subscription: subscription.id });
        res.status(201).json({ success: true, data: subscription });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
exports.createSubscription = createSubscription;
const getSubscription = async (req, res) => {
    const { userId } = req.params;
    try {
        const subscription = await Subscription_1.default.findOne({ userId });
        if (!subscription) {
            // Create a default free subscription
            const newSubscription = new Subscription_1.default({
                userId,
                plan: 'free',
                currentPeriodStart: new Date(),
                currentPeriodEnd: new Date(),
                price: 0,
            });
            await newSubscription.save();
            res.status(200).json({ success: true, data: newSubscription });
            return;
        }
        res.status(200).json({ success: true, data: subscription });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
exports.getSubscription = getSubscription;
//# sourceMappingURL=subscription.controller.js.map