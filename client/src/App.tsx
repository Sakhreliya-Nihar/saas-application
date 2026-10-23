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
  return (
    <nav>
      <Link to="/">SaaS App</Link>
      <ul>
        {role === 'admin' && <li><Link to="/admin">Admin</Link></li>}
        {isLoggedIn ? (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/billing">Billing</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  React.useEffect(() => {
    if (!isLoggedIn) {
      // Will be handled by route
    }
  }, [isLoggedIn]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div><h1>Welcome to SaaS App</h1></div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;