import { Request, Response } from 'express';
import Project from '../models/Project';

export const createProject = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  const { userId } = req.params;
  try {
    const project = new Project({ name, description, ownerId: userId, members: [userId] });
    await project.save();
    res.status(201).json({ success: true, data: project });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getProjectsByUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const projects = await Project.find({ $or: [{ ownerId: userId }, { members: userId }] });
    res.status(200).json({ success: true, data: projects });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};