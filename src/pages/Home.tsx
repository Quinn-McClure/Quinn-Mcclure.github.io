import heroBg from '../assets/banner-img.png'
import Button from '../components/Button.tsx'

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            {/* Hero Section */}
            <section 
                className="min-h-[60vh] flex flex-col justify-center items-center text-center py-12 md:py-20 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className="absolute inset-0 bg-black/30" />
                <p className="text-4xl font-semibold text-white relative z-10"> 
                    Developer, Writer, Designer
                </p>
            </section>

            {/* About Preview */}
            <section className="md:py-16">
                <p className="text-lg font-bold">About this website</p>
                <p className="text-base py-2">
                    Hi, there I am Quinn McClure! This website is a culmination of my passion projects and interests that I would like to share with you and the world, whether you are a potential client or 
                    just interested in what I have to say.
                </p>
                <p className="text-base">
                    If you are interested to hear more about my journey so far, click below
                </p>
                <Button to="/about" className="mt-4">About Me</Button>
            </section>

            {/* <Featured Projects */}
            <section>
                <p className="text-lg font-bold">Featured Projects</p>
                <p>These are a couple of projects that I am most proud of! Click below to explore</p>
                <p>Grid with 3 projects</p>
                <Button to="/projects" className="mt-4">All Projects</Button>
            </section>
        </div>
    );
  };
  
  export default Home;