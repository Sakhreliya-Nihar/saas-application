import React from 'react';
interface ProjectCardProps {
    project: {
        id: string;
        name: string;
        description: string;
        status: string;
    };
    onEdit: (projectId: string) => void;
    onDelete: (projectId: string) => void;
}
declare const ProjectCard: React.FC<ProjectCardProps>;
export default ProjectCard;
