import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Professional = () => {
    const professionalProject1 = projects.filter(p => [3].includes(p.id))

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            {/* Header */}
            <section>
                <p className="text-4xl font-bold text-text">Frameshift Dev LLC</p>
            </section>
            <br/>

            {/* About */}
            <section>
                <p className="text-lg font-bold text-text">About Frameshift</p>
                <p className="text-base py-2 text-text-muted">
                    
                </p>
            </section>

            {/* Previous Projects */}
            <section>
                <p className="text-lg font-bold text-text">Previous Projects</p>
                <br/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {professionalProject1.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                </div>
            </section>
            
            {/* Contact */}
            <section>
                <p className="text-lg font-bold text-text">Contact Me</p>
            </section>

        </div>
    );
  };
  
  export default Professional;