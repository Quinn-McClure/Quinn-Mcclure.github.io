import { Link } from 'react-router-dom'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    <ul className="flex space-x-6">
                        <li>
                            <a href="https://github.com/Quinn-McClure" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900">
                                Github
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/quinn-mcclure-b35379227" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900">
                                Email
                            </a>
                        </li>
                    </ul>
                    <h4 className="text-sm text-gray-900 mb-4">Created by Frameshift Dev LLC</h4>
                </div>
            </div>
        </footer>
    )
}

export default Footer