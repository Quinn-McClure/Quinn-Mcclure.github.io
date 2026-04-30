import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import Button from '../components/Button.tsx'

const Professional = () => {
    const professionalProject1 = projects.filter(p => [3].includes(p.id))

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            {/* Header */}
            <section>
                <p className="text-4xl font-bold text-text">My Professional Pursuits</p>
            </section>
            <br/>

            {/* About */}
            <section>
                <p className="text-lg font-bold text-text">About Frameshift Dev</p>
                <p className="text-base py-2 text-text-muted">
                    I started this company in college as a way to make a little bit of extra money while having a flexible schedule as a student. This allowed me to focus on my studies
                    while still gaining valuable industry experience. While in school I was contracted by Adaptech where I learned a lot about event modeling and contracting as a whole. 
                    In my first year out of school I built a website for Campbell Gutterworks from scratch where I learned as well. Now I am looking to expand and gain clients of my own. I have mainly focused on web development
                    but I am open to working on anything I can get my hands on, learning new technologies and leveling up to help any client's needs. In an age of AI tools that can do many things at a fast pace,
                    what I have found is the personal touch that is lacking. With an AI tool you are just interfacing with a machine that can approximate your needs, spending frustrating time trying to fine tune. With me you know the fact that you are
                    working with an indivudal that can tailor and personalize what you want to be uniquely you. With this too you know exactly where your money is going, to support a person not a CEO or
                    machine. You can also take solace in teh fact that you arent contributing to the adverse effects on the environment that AI is contributing to at a rapid rate. 
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

            <section>
                <p className="text-lg font-bold text-text">Writing</p>
                <p className="text-base py-2 text-text-muted">
                    Expanding upon my passions, I have been a budding writer. I would love to expand writing into a capacity that I can do full time. Currently I have
                    written over five screenplays, four shorts and one feature, plus over three hundred movie reviews. 
                </p>
            </section>
            
            {/* Contact */}
            <section>
                <Button to="/contact" className="mt-4">Contact Me</Button> 
            </section>
        </div>
    );
  };
  
  export default Professional;