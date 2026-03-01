import { Link } from 'react-router-dom'
import Navigation from './Navigation'

interface HeaderProps {
    
}

const Header = ({ }: HeaderProps) => {
    return (
        <header className="sticky top-0 z-50 bg-bg-elevated/90 backdrop-blur-md border-b border-bg-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                <div className="flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold text-on-bg-card hover:text-primary transition">
                        Quinn McClure
                    </Link>
                    <Navigation />
                </div>
            </div>
        </header>
    )
}

export default Header