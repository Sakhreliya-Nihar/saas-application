import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { getBilling } from '@/services/api';
const Admin = () => {
    const [users, setUsers] = useState([]);
    const [roleFilter, setRoleFilter] = useState('all');
    useEffect(() => {
        getBilling().then((data) => {
            setUsers(data.users || []);
        });
    }, []);
    const filteredUsers = users.filter((user) => {
        if (roleFilter === 'all')
            return true;
        return user.role === roleFilter;
    });
    const handleDeleteUser = (userId) => {
        if (confirm('Are you sure you want to delete this user?')) {
            setUsers(users.filter((u) => u.id !== userId));
        }
    };
    return (_jsxs("div", { className: "admin-page", children: [_jsx("h1", { children: "Admin Dashboard" }), _jsxs("div", { className: "admin-controls", children: [_jsxs("select", { onChange: (e) => setRoleFilter(e.target.value), style: { marginRight: '10px' }, children: [_jsx("option", { value: "all", children: "All Users" }), _jsx("option", { value: "admin", children: "Admins" }), _jsx("option", { value: "user", children: "Users" }), _jsx("option", { value: "guest", children: "Guests" })] }), _jsx("button", { style: { backgroundColor: '#dc3545', color: 'white' }, children: "Refresh" })] }), _jsx("h2", { children: "Users Management" }), _jsx("ul", { children: filteredUsers.map((user) => (_jsxs("li", { style: { display: 'flex', justifyContent: 'between', alignItems: 'center' }, children: [_jsxs("span", { children: [user.name, " (", user.email, ") - Role: ", user.role] }), _jsx("button", { onClick: () => handleDeleteUser(user.id), style: {
                                background: 'none',
                                border: '1px solid #dc3545',
                                color: '#dc3545',
                                padding: '2px 8px',
                                cursor: 'pointer',
                                borderRadius: '4px',
                            }, children: "Delete" })] }, user.id))) }), _jsxs("p", { children: ["Total users: ", users.length] })] }));
};
export default Admin;
//# sourceMappingURL=Admin.js.map