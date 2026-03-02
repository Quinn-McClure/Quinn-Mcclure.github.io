import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import profilePic from "../assets/profilepic.png"

const About = () => {
    const currentProject1 = projects.filter(p => [3].includes(p.id))
    const currentProject2 = projects.filter(p => [1].includes(p.id))

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            {/* Header */}
            <section>
                <p className="text-4xl font-bold text-text">About Me</p>
                <p className="text-lg italic text-text-muted">Developer, Writer, Designer</p>
            </section>
            <br/>

            <section className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                {/* Image on the left */}
                <div className="rounded-full overflow-hidden w-48 h-48 md:w-56 md:h-56 shrink-0">
                    <img
                        src={profilePic}
                        alt="Quinn McClure"
                        className="w-full h-full object-cover object-[50%_70%] scale-250"
                    />
                </div>
                {/* Text on the right */}
                <div className="flex-1 min-w-0">
                    <div className="mt-4 space-y-4">
                        <p className="text-base text-text-muted">
                        I am a graduate from the University of Wisconsin - La Crosse, with a bachelor's in Computer Science 
                    and a minor in Environmental Studies. While in school, I also developed a deep love for both writing and
                    design. In my free time, I would write and publish movie reviews online (which I still do) and I also 
                    worked at the on-campus recreation center as a graphic designer for a couple of years.
                        </p>
                        <p className="text-base text-text-muted">
                        After my graduation in December 2024, I worked for Tanduo Technical Partners Inc for a few months before getting laid off along
                    with half of the company due to economic factors. This caused a bit of turmoil in my life as I had graduated, 
                    gotten the job, then watched it slip away due to powers beyond my control. On top of this, I was also going through
                    some moves. Safe to say, I was in a rough spot. Once I got settled into a new city, I tried and tried to break back
                    in, but this was a situation that most people were in, so competition was fierce. Unemployment was high and hundreds
                    applied to job postings. So after almost a year of doing that, I tried out something different.
                        </p>
                        <p className="text-base text-text-muted">
                        This is the first step in my journey to go after not what is expected of me, but what I want for myself. Yes, I love
                    programming but I have spent so much of my life on it and the "safe path" that I didn't see my other passions as career
                    options. This is where that stops however. This is a site to showcase my multifaceted abilities and to not only go after
                    my passion in programming but also in writing and design to truly build something unique that I have ownership over.
                        </p>
                    </div>
                </div>
            </section>
            
            {/* Skills */}
            {/* Interests/Passions */}
            {/* Education/Certifications */}
            <section className="md:py-6">
                <p className="text-lg font-bold text-text">Certifications</p>
            </section>
            {/* Currently working on */}
            <section className="md:py-6">
                <p className="text-lg font-bold text-text">Current Projects</p>
                <p className="text-base text-text-muted">
                    The current projects that I am working on are my screenplay Prices and a wc command line tool! 
                    Prices is a feature-length crime thriller/horror screenplay about a band of twenty-somethings 
                    on a night where everything seems to go wrong after they rob a stash house. The wc tool is a command line
                    tool that you can use to count the number of bytes, lines, words, or characters in a file.
                </p>
                <br/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentProject1.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                    {currentProject2.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>
        </div>
    );
  };
  
  export default About;