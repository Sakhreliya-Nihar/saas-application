import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProjects, createProjectAPI } from '@/services/api';
const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    useEffect(() => {
        getProjects().then((data) => {
            setProjects(data || []);
        });
    }, []);
    const handleCreate = async () => {
        await createProjectAPI({ name, description });
        setName('');
        setDescription('');
        getProjects().then((data) => setProjects(data || []));
    };
    return (_jsxs("div", { children: [_jsx("h1", { children: "Projects" }), _jsxs("form", { onSubmit: handleCreate, className: "form", children: [_jsx("input", { type: "text", placeholder: "Project name", value: name, onChange: (e) => setName(e.target.value), required: true }), _jsx("textarea", { placeholder: "Description", value: description, onChange: (e) => setDescription(e.target.value), required: true }), _jsx("button", { type: "submit", children: "Create Project" })] }), _jsx("ul", { children: projects.map((project) => (_jsxs("li", { children: [_jsx("strong", { children: project.name }), ": ", project.description, " (", project.status, ")", _jsx(Link, { style: { marginLeft: '10px' }, to: `/projects/${project.id}`, children: "View" })] }, project.id))) })] }));
};
export default Projects;
//# sourceMappingURL=Projects.js.map