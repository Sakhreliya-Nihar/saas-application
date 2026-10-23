import { Router, Request, Response } from 'express';
import { register, login } from '../controllers/auth.controller';
import { authenticate, authorize } from '../middleware/auth.middleware';
import { createProject, getProjectsByUser } from '../controllers/project.controller';
import { createSubscription, getSubscription } from '../controllers/subscription.controller';
import { createBillingRecord, getBillingRecords } from '../controllers/billing.controller';

const router = Router();

router.post('/auth/register', register);
router.post('/auth/login', login);

router.post('/projects', authenticate, createProject);
router.get('/projects', authenticate, getProjectsByUser);

router.post('/subscriptions', authenticate, createSubscription);
router.get('/subscriptions/:userId', authenticate, getSubscription);

router.post('/billing', authenticate, createBillingRecord);
router.get('/billing', authenticate, getBillingRecords);

export default router;