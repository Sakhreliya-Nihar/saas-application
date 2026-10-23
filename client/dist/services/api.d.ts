export declare const getProjects: () => Promise<any>;
export declare const createProjectAPI: (projectData: {
    name: string;
    description: string;
}) => Promise<any>;
export declare const getBilling: () => Promise<any>;
export declare const createBillingRecord: (record: {
    amount: number;
    description: string;
}) => Promise<any>;
