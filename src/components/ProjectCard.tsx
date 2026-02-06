import type { Project } from '../data/projects'
import { useState } from 'react';
import Button from './Button';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({project}: ProjectCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                {project.image && (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded mb-4"
                    />
                )}
                <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools && project.tools.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
                
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
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
                        className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Content */}
                        <div className="clear-both">
                            <h2 className="text-2xl font-bold text-gray-300 mb-6 leading-relaxed">
                                {project.title}
                            </h2>

                            {project.image && (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 object-cover rounded mb-6"
                                />
                            )}

                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {project.longDescription}
                            </p>

                            {project.tools && project.tools.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tools.map((tech, index) => (
                                        <span key={index} className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
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
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;