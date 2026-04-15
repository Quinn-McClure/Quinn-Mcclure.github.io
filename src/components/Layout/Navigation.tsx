import { NavLink } from 'react-router-dom'

const Navigation = () => {
    const navLinks = [
        { path: '/', label: 'Home'},
        { path: '/projects', label: 'Projects'},
        { path: '/professional', label: 'Professional'},
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
                                `text-sm font-medium transition-colors hover:text-primary ${
                                    isActive 
                                        ? 'text-on-bg-card border-b-2 border-primary' 
                                        : 'text-on-bg-card/80'
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