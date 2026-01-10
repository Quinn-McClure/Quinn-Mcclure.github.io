import { Link } from 'react-router-dom'
import type { ReactNode, ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseButtonProps {
    children: ReactNode
    variant?: ButtonVariant
    size?: ButtonSize
    className?: string
    disabled?: boolean
}

interface ButtonAsLinkProps extends BaseButtonProps {
    to: string
    onClick?: never
}

interface ButtonAsButtonProps extends BaseButtonProps {
    to?: never
    onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick']
    type?: 'button' | 'submit' | 'reset'
}

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    disabled = false,
    ...props
}: ButtonProps) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'

    const variantStyles = {
        primary: 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-600',
        outline: 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white focus:ring-gray-900'
    }

    const sizeStyles = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    }

    const disabledStyles = 'opacity-50 cursor-not-allowed'

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? disabledStyles : ''} ${className}`.trim()

    // If 'to' prop is provided, render as Link
    if ('to' in props && props.to) {
        return (
            <Link 
                to={props.to} 
                className={combinedClassName}
            >
                {children}
            </Link>
        )
    }

    // Otherwise, render as button
    return (
        <button
            type={props.type || 'button'}
            onClick={props.onClick}
            disabled={disabled}
            className={combinedClassName}
        >
            {children}
        </button>
    )
}