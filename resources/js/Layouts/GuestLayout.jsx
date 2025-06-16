import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="d-flex flex-column min-vh-100 align-items-center bg-light pt-4">
            <div>
                <Link href="/">
                    <ApplicationLogo className="mb-3" style={{ height: 80, width: 80, color: '#6c757d' }} />
                </Link>
            </div>

            <div className="mt-4 w-100 bg-white p-4 shadow rounded" style={{ maxWidth: 400 }}>
                {children}
            </div>
        </div>
    );
}
