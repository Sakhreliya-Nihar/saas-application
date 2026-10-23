import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBilling } from '@/services/api';

const Admin: React.FC = () => {
  const [users, setUsers] = useState<Array<{ id: string; name: string; email: string; role: string }>>([]);
  const [roleFilter, setRoleFilter] = useState<'admin' | 'user' | 'guest' | 'all'>('all');

  useEffect(() => {
    getBilling().then((data) => {
      setUsers(data.users || []);
    });
  }, []);

  const filteredUsers = users.filter((user: { role: string }) => {
    if (roleFilter === 'all') return true;
    return user.role === roleFilter;
  });

  const handleDeleteUser = (userId: string) => {
    if (confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter((u: any) => u.id !== userId));
    }
  };

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <div className="admin-controls">
        <select
          onChange={(e) => setRoleFilter(e.target.value as 'admin' | 'user' | 'guest' | 'all')}
          style={{ marginRight: '10px' }}
        >
          <option value="all">All Users</option>
          <option value="admin">Admins</option>
          <option value="user">Users</option>
          <option value="guest">Guests</option>
        </select>
        <button style={{ backgroundColor: '#dc3545', color: 'white' }}>Refresh</button>
      </div>
      <h2>Users Management</h2>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id} style={{ display: 'flex', justifyContent: 'between', alignItems: 'center' }}>
            <span>
              {user.name} ({user.email}) - Role: {user.role}
            </span>
            <button
              onClick={() => handleDeleteUser(user.id)}
              style={{
                background: 'none',
                border: '1px solid #dc3545',
                color: '#dc3545',
                padding: '2px 8px',
                cursor: 'pointer',
                borderRadius: '4px',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <p>Total users: {users.length}</p>
    </div>
  );
};

export default Admin;