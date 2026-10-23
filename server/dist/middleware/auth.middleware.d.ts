import { Request, Response, NextFunction } from 'express';
declare global {
    namespace Express {
        interface User {
            id: string;
            role: string;
        }
        interface Request {
            user?: User;
        }
    }
}
export declare const authenticate: (req: Request, res: Response, next: NextFunction) => void;
export declare const authorize: (...roles: string[]) => (req: Request, res: Response, next: NextFunction) => void;
