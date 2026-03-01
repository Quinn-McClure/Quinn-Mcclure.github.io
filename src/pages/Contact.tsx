import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            {/* Header */}
            <section>
                <p className="text-4xl font-bold text-text">Contact</p>
            </section>
            <section className="md:py-6 ">
                <p className="text-lg text-text-muted">Connect with me!</p>
                <br/>
                <ul className="flex gap-6">
                    <li>
                        <a
                            href="https://github.com/Quinn-McClure"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors"
                        >
                            <FaGithub className="w-8 h-8" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/quinn-mcclure-b35379227"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors"
                        >
                            <FaLinkedin className="w-8 h-8" />
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
  };
  
  export default Contact;