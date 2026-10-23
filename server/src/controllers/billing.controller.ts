import { Request, Response } from 'express';

type BillingRecord = {
  id: string;
  userId: string;
  amount: number;
  status: string;
  description: string;
  createdAt: Date;
};

export const createBillingRecord = async (req: Request, res: Response) => {
  const { id } = req.user as { id: string };
  const { amount, description } = req.body;
  
  try {
    const billingRecord: BillingRecord = {
      id: String(Date.now()),
      userId: id,
      amount: Number(amount),
      status: 'completed',
      description,
      createdAt: new Date(),
    };
    
    res.status(201).json({ success: true, data: billingRecord });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getBillingRecords = async (req: Request, res: Response) => {
  const { id } = req.user as { id: string };
  
  try {
    const records: BillingRecord[] = [
      { id: '1', userId: id, amount: 29.99, status: 'completed', description: 'Pro subscription', createdAt: new Date() },
      { id: '2', userId: id, amount: 9.99, status: 'completed', description: 'Free trial', createdAt: new Date() },
    ];
    
    res.status(200).json({ success: true, data: records });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};