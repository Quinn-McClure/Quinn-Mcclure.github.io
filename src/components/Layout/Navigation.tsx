import { NavLink } from 'react-router-dom'

const Navigation = () => {
    const navLinks = [
        { path: '/', label: 'Home'},
        { path: '/projects', label: 'Projects'},
        { path: '/about', label: 'About'},
        { path: '/contact', label: 'Contact'},
    ]

    return (
        <nav>
            <ul className="flex space-x-6">
                {navLinks.map((link) => (
                    <li key={link.path}>
                        <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                                `text-sm font-medium transition-colors hover:text-gray-900 ${
                                    isActive 
                                        ? 'text-gray-900 border-b-2 border-gray-900' 
                                        : 'text-gray-600'
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation