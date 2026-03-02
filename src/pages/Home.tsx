import heroBg from '../assets/banner-img.png'
import Button from '../components/Button.tsx'
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Home = () => {
    const currentProject1 = projects.filter(p => [3].includes(p.id))
    const currentProject2 = projects.filter(p => [1].includes(p.id))
    const currentProject3 = projects.filter(p => [4].includes(p.id))
    const currentProject4 = projects.filter(p => [5].includes(p.id))

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            {/* Hero Section */}
            <section 
                className="min-h-[60vh] flex flex-col justify-center items-center text-center py-12 md:py-20 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className="absolute inset-0 bg-black/30" />
                <p className="text-4xl font-semibold text-text relative z-10"> 
                    Developer, Writer, Designer
                </p>
            </section>

            {/* About Preview */}
            <section className="md:py-16">
                <p className="text-lg font-bold text-text">About this website</p>
                <p className="text-base py-2 text-text-muted">
                    Hi, there I am Quinn McClure! This website is a culmination of my passion projects and interests 
                    that I would like to share with you and the world, whether you are a potential client or just interested 
                    in what I have created. Initially when I wanted to make this site, I was mainly going to use it as just a
                    portfolio site for my programming projects for future employers. Thinking deeper however, I realized that
                    my path wasn't so linear and so I expanded this site to include my writing and design projects because those
                    are also fields I would like to expand and grow in. 
                </p>
                <p className="text-base text-text-muted">
                    If you are interested to hear more about my journey so far, click below
                </p>
                <Button to="/about" className="mt-4">About Me</Button>
            </section>

             {/* Currently working on */}
             <section>
                <p className="text-lg font-bold text-text">Current Projects</p>
                <p className="text-base text-text-muted">
                    The current projects that I am working on are my screenplay Prices, a wc command line tool, and a couple of other short film screenplays! 
                    Prices is a feature-length crime thriller/horror screenplay about a band of twenty-somethings 
                    on a night where everything seems to go wrong after they rob a stash house. The wc tool is a command line
                    tool that you can use to count the number of bytes, lines, words, or characters in a file. Check out the short film projects to see what they are about!
                </p>
                <br/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentProject1.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                    {currentProject2.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                    {currentProject3.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                    {currentProject4.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>

            {/* <Featured Projects */}
            <section className="md:py-16">
                <p className="text-lg font-bold text-text">Projects</p>
                <p className="text-text-muted">Explore even more of my projects across three of the main facets that I have a passion for: writing, developing, designing.</p>
                <Button to="/projects" className="mt-4">All Projects</Button>
            </section>
        </div>
    );
  };
  
  export default Home;