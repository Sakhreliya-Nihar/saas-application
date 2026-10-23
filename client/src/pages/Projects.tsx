import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProjects, createProjectAPI } from '@/services/api';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Array<{ id: string; name: string; description: string; status: string }>>([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data as Array<{ id: string; name: string; description: string; status: string }> || []);
    });
  }, []);

  const handleCreate = async () => {
    await createProjectAPI({ name, description });
    setName('');
    setDescription('');
    getProjects().then((data) => setProjects(data as Array<{ id: string; name: string; description: string; status: string }> || []));
  };

  return (
    <div>
      <h1>Projects</h1>
      <form onSubmit={handleCreate} className="form">
        <input
          type="text"
          placeholder="Project name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <button type="submit">Create Project</button>
      </form>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <strong>{project.name}</strong>: {project.description} ({project.status})
            <Link style={{ marginLeft: '10px' }} to={`/projects/${project.id}`}>View</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;