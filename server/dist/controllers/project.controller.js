"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectsByUser = exports.createProject = void 0;
const Project_1 = __importDefault(require("../models/Project"));
const createProject = async (req, res) => {
    const { name, description } = req.body;
    const { userId } = req.params;
    try {
        const project = new Project_1.default({ name, description, ownerId: userId, members: [userId] });
        await project.save();
        res.status(201).json({ success: true, data: project });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
exports.createProject = createProject;
const getProjectsByUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const projects = await Project_1.default.find({ $or: [{ ownerId: userId }, { members: userId }] });
        res.status(200).json({ success: true, data: projects });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
exports.getProjectsByUser = getProjectsByUser;
//# sourceMappingURL=project.controller.js.map