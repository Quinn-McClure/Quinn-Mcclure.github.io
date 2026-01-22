import { useParams } from 'react-router-dom';
import type { ProjectScope } from '../data/projects'
import Button from './Button';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
    const { type } = useParams<{ type: ProjectScope }>();

    const filteredProjects = type
        ? projects.filter(project => project.scope === type)
        : [];

    const displayName = type ? type.charAt(0).toUpperCase() + type.slice(1) + ' Projects' : 'Projects';

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <Button
                to="/projects"
                variant="outline"
                size="sm"
                className="mb-6">
                    Back to Projects
            </Button>

            <h1 className="text-4xl font-bold text-white mb-4">{displayName}</h1>

            {filteredProjects.length === 0 ? (
                <p className="text-gray-400">No projects yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default ProjectList;