export interface User {
    id: string;
    email: string;
    name: string;
    role: 'admin' | 'user' | 'guest';
}
export interface Subscription {
    id: string;
    plan: 'free' | 'pro' | 'enterprise';
    status: 'active' | 'canceled' | 'past_due';
}
export interface Project {
    id: string;
    name: string;
    description: string;
    status: 'active' | 'completed' | 'archived';
}
