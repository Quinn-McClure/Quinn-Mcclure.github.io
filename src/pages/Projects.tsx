import Button from '../components/Button';

const Projects = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            {/* Header */}
            <section className="mb-12">
                <p className="text-4xl font-bold text-white mb-4">My Projects</p>
                <p className="text-base py-2">Click below to explore the different projects I have done!</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto items-center py-10">
                    {/* Development button */}
                    <div className="bg-gray-800 rounded-lg p-8 hover:bg-gray-750 transition-colors transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="text-4xl mb-4"></div>
                        <h2 className="text-2xl font-semibold text-white mb-3">Coding Projects</h2>
                        <Button to="/projects/coding" variant="primary" className="w-full">
                            View Projects
                        </Button>
                    </div>
                    
                    {/* Writing button */}
                    <div className="bg-gray-800 rounded-lg p-8 hover:bg-gray-750 transition-colors transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="text-4xl mb-4"></div>
                        <h2 className="text-2xl font-semibold text-white mb-3">Writing Projects</h2>
                        <Button to="/projects/writing" variant="primary" className="w-full">
                            View Projects
                        </Button>
                    </div>

                    {/* Design button */}
                    <div className="bg-gray-800 rounded-lg p-8 hover:bg-gray-750 transition-colors transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="text-4xl mb-4"></div>
                        <h2 className="text-2xl font-semibold text-white mb-3">Design Projects</h2>
                        <Button to="/projects/design" variant="primary" className="w-full">
                            View Projects
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
  };
  
  export default Projects;