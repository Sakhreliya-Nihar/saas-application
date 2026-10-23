import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const handleRegister = () => {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('role', 'user');
    };
    return (_jsxs("div", { children: [_jsx("h2", { children: "Register" }), _jsx("input", { type: "text", placeholder: "Name", value: name, onChange: (e) => setName(e.target.value) }), _jsx("input", { type: "email", placeholder: "Email", value: email, onChange: (e) => setEmail(e.target.value) }), _jsx("button", { onClick: handleRegister, children: "Register" }), _jsxs("p", { children: ["Already have an account? ", _jsx(Link, { to: "/login", children: "Login" })] })] }));
};
export default Register;
//# sourceMappingURL=Register.js.map