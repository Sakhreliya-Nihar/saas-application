import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Billing from './pages/Billing';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';
const Navbar = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const role = localStorage.getItem('role');
    return (_jsxs("nav", { children: [_jsx(Link, { to: "/", children: "SaaS App" }), _jsxs("ul", { children: [role === 'admin' && _jsx("li", { children: _jsx(Link, { to: "/admin", children: "Admin" }) }), isLoggedIn ? (_jsxs(_Fragment, { children: [_jsx("li", { children: _jsx(Link, { to: "/dashboard", children: "Dashboard" }) }), _jsx("li", { children: _jsx(Link, { to: "/projects", children: "Projects" }) }), _jsx("li", { children: _jsx(Link, { to: "/billing", children: "Billing" }) })] })) : (_jsxs(_Fragment, { children: [_jsx("li", { children: _jsx(Link, { to: "/login", children: "Login" }) }), _jsx("li", { children: _jsx(Link, { to: "/register", children: "Register" }) })] }))] })] }));
};
function App() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    React.useEffect(() => {
        if (!isLoggedIn) {
            // Will be handled by route
        }
    }, [isLoggedIn]);
    return (_jsxs(Router, { children: [_jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx("div", { children: _jsx("h1", { children: "Welcome to SaaS App" }) }) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/register", element: _jsx(Register, {}) }), _jsx(Route, { path: "/dashboard", element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "/projects", element: _jsx(Projects, {}) }), _jsx(Route, { path: "/billing", element: _jsx(Billing, {}) }), _jsx(Route, { path: "/admin", element: _jsx(Admin, {}) })] })] }));
}
export default App;
//# sourceMappingURL=App.js.map