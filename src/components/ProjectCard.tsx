import type { Project } from '../data/projects'
import { useState } from 'react';
import Button from './Button';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({project}: ProjectCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const maxTools = 3;
    const toolsToShow = project.tools?.slice(0, maxTools) ?? [];
    const remainingCount = (project.tools?.length ?? 0) - toolsToShow.length;

    return (
        <>
            <div className="bg-bg-card rounded-lg p-6 hover:bg-bg-elevated transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                <h3 className="text-xl font-semibold text-on-bg-card mb-2">
                    {project.title}
                </h3>
                <p className="text-on-bg-card/90 mb-4">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {toolsToShow.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-bg-elevated text-on-bg-card text-sm rounded-full">
                            {tech}
                        </span>
                    ))}

                    {remainingCount > 0 && (
                        <span className="px-3 py-1 bg-bg-elevated text-on-bg-card text-sm rounded-full">
                            +{remainingCount} more
                        </span>
                    )}
                </div>
                
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-accent hover:text-primary-hover transition-colors"
                >
                    View Project →
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="bg-bg-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Content */}
                        <div className="clear-both">
                            <h2 className="text-2xl font-bold text-on-bg-card mb-6 leading-relaxed">
                                {project.title}
                            </h2>

                            {project.image && (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className=""
                                />
                            )}

                            <p className="text-on-bg-card/90 mb-6 leading-relaxed">
                                {project.longDescription}
                            </p>

                            {project.tools && project.tools.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tools.map((tech, index) => (
                                        <span key={index} className="px-3 py-1 bg-bg-elevated text-on-bg-card text-sm rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {project.url && (
                                <div className="flex gap-3">
                                    <Button
                                        variant="primary"
                                        onClick={() => window.open(project.url, '_blank')}
                                    >
                                        Visit Project
                                    </Button>
                                    <Button
                                        variant="primary"
                                        onClick={() => setIsModalOpen(false)}
                                    >
                                        Close
                                    </Button>
                                </div>
                            )}

                            {project.pdf && (
                                <Button
                                    variant="primary"
                                    onClick={() => window.open(project.pdf, '_blank')}
                                >
                                    View PDF
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;