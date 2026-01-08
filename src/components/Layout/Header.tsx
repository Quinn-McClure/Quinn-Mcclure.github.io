import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'

interface HeaderProps {
    children?: ReactNode
}

const Header = ({ children }: HeaderProps) => {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                <div className="flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition">
                    Quinn McClure
                    </Link>
                    <Navigation />
                </div>
            </div>
        </header>
    )
}

export default Header