import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
{ /* import { Project } from '../../shared/types'; */ }
const ProjectCard = ({ project, onEdit, onDelete }) => {
    return (_jsxs("div", { className: "project-card", children: [_jsx("h3", { children: project.name }), _jsx("p", { children: project.description }), _jsxs("div", { className: "project-status", children: ["Status: ", _jsx("span", { className: `status-${project.status}`, children: project.status })] }), _jsxs("div", { className: "project-actions", children: [_jsx("button", { onClick: () => onEdit(project.id), children: "Edit" }), _jsx("button", { onClick: () => onDelete(project.id), children: "Delete" })] })] }));
};
export default ProjectCard;
//# sourceMappingURL=ProjectCard.js.map