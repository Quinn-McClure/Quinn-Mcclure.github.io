import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const About = () => {
    const currentProjects = projects.filter(p => [4].includes(p.id))

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            {/* Header */}
            <section>
                <p className="text-4xl font-bold">About Me</p>
                <p className="text-lg italic">Developer, Writer, Designer</p>
            </section>
            {/* Story/Background */}
            <section className="md:py-6">
                <p className="text-base">
                    I am a graduate from the University of Wisconsin - La Crosse, with a bachelor's in Computer Science 
                    and a minor in Environmental Studies. While in school, I also developed a deep love for both writing and
                    design. In my free time, I would write and publish movie reviews online (which I still do) and I also 
                    worked at the on-campus recreation center as a graphic designer for a couple of years.
                </p>
                <br/>
                <p className="text-base">
                    After my graduation in December 2024, I worked for Tanduo Technical Partners Inc for a few months before getting laid off along
                    with half of the company due to economic factors. This caused a bit of turmoil in my life as I had graduated, 
                    gotten the job, then watched it slip away due to powers beyond my control. On top of this, I was also going through
                    some moves. Safe to say, I was in a rough spot. Once I got settled into a new city, I tried and tried to break back
                    in, but this was a situation that most people were in, so competition was fierce. Unemployment was high and hundreds
                    applied to job postings. So after almost a year of doing that, I tried out something different.
                </p>
                <br/>
                <p className="text-base">
                    This is the first step in my journey to go after not what is expected of me, but what I want for myself. Yes, I love
                    programming but I have spent so much of my life on it and the "safe path" that I didn't see my other passions as career
                    options. This is where that stops however. This is a site to showcase my multifaceted abilities and to not only go after
                    my passion in programming but also in writing and design to truly build something unique that I have ownership over.
                </p>
            </section>
            {/* Skills */}
            {/* Interests/Passions */}
            {/* Education/Certifications */}
            <section className="md:py-6">
                <p className="text-lg font-bold">Certifications</p>
            </section>
            {/* Currently working on */}
            <section className="md:py-6">
                <p className="text-lg font-bold">Current Projects</p>
                <p className="text-base">
                    The current project that I am working on, on top of getting this site up and running, is my 
                    screenplay Prices! It is a feature-length crime thriller/horror screenplay that follows a band
                    of twenty-somethings on a night where everything seems to go wrong after they rob a stash house.
                </p>
                <br/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>
        </div>
    );
  };
  
  export default About;