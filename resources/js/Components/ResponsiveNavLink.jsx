import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={`nav-link d-flex w-100 align-items-start py-2 px-3 ${active ? 'active fw-bold text-primary bg-light border-start border-4 border-primary' : 'text-secondary'} ${className}`}
            aria-current={active ? 'page' : undefined}
        >
            {children}
        </Link>
    );
}
