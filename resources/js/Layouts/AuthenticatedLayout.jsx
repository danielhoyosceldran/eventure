import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-vh-100 bg-light">
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
                <div className="container">
                    <Link href="/" className="navbar-brand d-flex align-items-center">
                        <ApplicationLogo className="me-2" style={{ height: '36px' }} />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() =>
                            setShowingNavigationDropdown(
                                (previousState) => !previousState,
                            )
                        }
                        aria-controls="navbarNav"
                        aria-expanded={showingNavigationDropdown}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse${showingNavigationDropdown ? ' show' : ''}`} id="navbarNav">
                        {/* Example NavLink usage, uncomment if needed */}
                        {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    href={route('dashboard')}
                                    active={route().current('dashboard')}
                                    className="nav-link"
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                        </ul> */}
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="userDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {user.name}
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                                    <li>
                                        <Dropdown.Link
                                            href={route('profile.edit')}
                                            className="dropdown-item"
                                        >
                                            Profile
                                        </Dropdown.Link>
                                    </li>
                                    <li>
                                        <Dropdown.Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                            className="dropdown-item"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Responsive Nav for small screens */}
            <div className={`d-lg-none${showingNavigationDropdown ? '' : ' d-none'}`}>
                <div className="bg-white border-bottom px-3 py-2">
                    <ResponsiveNavLink
                        href={route('dashboard')}
                        active={route().current('dashboard')}
                        className="nav-link"
                    >
                        Dashboard
                    </ResponsiveNavLink>
                    <div className="border-top pt-3 mt-3">
                        <div className="fw-bold">{user.name}</div>
                        <div className="text-muted small">{user.email}</div>
                        <div className="mt-2">
                            <ResponsiveNavLink href={route('profile.edit')} className="nav-link">
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route('logout')}
                                as="button"
                                className="nav-link"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </div>

            {header && (
                <header className="bg-white shadow-sm">
                    <div className="container py-4">
                        {header}
                    </div>
                </header>
            )}

            <main className="container my-4">{children}</main>
        </div>
    );
}
