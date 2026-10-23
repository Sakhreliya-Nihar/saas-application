export const getProjects = async () => {
    const res = await fetch('/api/projects', {
        method: 'GET',
        credentials: 'include',
    });
    const data = await res.json();
    return data;
};
export const createProjectAPI = async (projectData) => {
    const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectData),
        credentials: 'include',
    });
    return res.json();
};
export const getBilling = async () => {
    const res = await fetch('/api/billing', {
        method: 'GET',
        credentials: 'include',
    });
    const data = await res.json();
    return data;
};
export const createBillingRecord = async (record) => {
    const res = await fetch('/api/billing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record),
        credentials: 'include',
    });
    return res.json();
};
//# sourceMappingURL=api.js.map