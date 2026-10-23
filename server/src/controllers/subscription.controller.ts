import { Request, Response } from 'express';
import Subscription from '../models/Subscription';
import User from '../models/User';

export const createSubscription = async (req: Request, res: Response) => {
  const { userId, plan } = req.body;
  const currentPeriodStart = new Date();
  const currentPeriodEnd = new Date();
  currentPeriodEnd.setMonth(currentPeriodStart.getMonth() + 1);
  
  try {
    const priceMap: { [key: string]: number } = { free: 0, pro: 9.99, enterprise: 49.99 };
    const subscription = new Subscription({
      userId,
      plan,
      currentPeriodStart,
      currentPeriodEnd,
      price: priceMap[plan] || 0,
    });
    await subscription.save();
    
    await User.findByIdAndUpdate(userId, { subscription: subscription.id });
    
    res.status(201).json({ success: true, data: subscription });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getSubscription = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const subscription = await Subscription.findOne({ userId });
    if (!subscription) {
      // Create a default free subscription
      const newSubscription = new Subscription({
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
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};