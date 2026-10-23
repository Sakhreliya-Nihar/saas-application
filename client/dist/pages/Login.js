import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('role', 'user');
    };
    return (_jsxs("div", { children: [_jsx("h2", { children: "Login" }), _jsx("input", { type: "email", placeholder: "Email", value: email, onChange: (e) => setEmail(e.target.value) }), _jsx("input", { type: "password", placeholder: "Password", value: password, onChange: (e) => setPassword(e.target.value) }), _jsx("button", { onClick: handleLogin, children: "Login" }), _jsxs("p", { children: ["Don't have an account? ", _jsx(Link, { to: "/register", children: "Register" })] })] }));
};
export default Login;
//# sourceMappingURL=Login.js.map