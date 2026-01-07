import { Link } from 'react-router-dom'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Brand/About */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4"> Quinn McClure </h3>
                    <p className="text-sm text-gray-600"> 
                        Developer, Writer, Environmental Advocate
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer