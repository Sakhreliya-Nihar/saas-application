"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBillingRecords = exports.createBillingRecord = void 0;
const createBillingRecord = async (req, res) => {
    const { id } = req.user;
    const { amount, description } = req.body;
    try {
        const billingRecord = {
            id: String(Date.now()),
            userId: id,
            amount: Number(amount),
            status: 'completed',
            description,
            createdAt: new Date(),
        };
        res.status(201).json({ success: true, data: billingRecord });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
exports.createBillingRecord = createBillingRecord;
const getBillingRecords = async (req, res) => {
    const { id } = req.user;
    try {
        const records = [
            { id: '1', userId: id, amount: 29.99, status: 'completed', description: 'Pro subscription', createdAt: new Date() },
            { id: '2', userId: id, amount: 9.99, status: 'completed', description: 'Free trial', createdAt: new Date() },
        ];
        res.status(200).json({ success: true, data: records });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
exports.getBillingRecords = getBillingRecords;
//# sourceMappingURL=billing.controller.js.map