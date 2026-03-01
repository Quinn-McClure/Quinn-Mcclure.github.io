
const Footer = () => {

    return (
        <footer className="bg-bg-card border-t border-bg-elevated">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    <ul className="flex space-x-6">
                        <li>
                            <a href="https://github.com/Quinn-McClure" target="_blank" rel="noopener noreferrer" className="text-sm text-on-bg-card hover:text-primary transition-colors">
                                Github
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/quinn-mcclure-b35379227" target="_blank" rel="noopener noreferrer" className="text-sm text-on-bg-card hover:text-primary transition-colors">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                    <h4 className="text-sm text-on-bg-card mb-4">Created by Frameshift Dev LLC</h4>
                </div>
            </div>
        </footer>
    )
}

export default Footer