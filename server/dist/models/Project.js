"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ProjectSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    ownerId: { type: String, required: true },
    members: [{ type: String }],
    status: { type: String, enum: ['active', 'completed', 'archived'], default: 'active' },
}, { timestamps: true });
exports.default = mongoose_1.default.model('Project', ProjectSchema);
//# sourceMappingURL=Project.js.map