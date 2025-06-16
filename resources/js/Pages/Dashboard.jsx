import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="h4 fw-semibold text-dark">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-5">
                <div className="container">
                    <div className="card shadow-sm">
                        <div className="card-body text-dark">
                            You're logged in!
                        </div>
                        {/* todo: fer que sigui dins dels EventComponent */}
                        <Link href={route("event.creator")} className="btn btn-primary m-3">
                            Event
                        </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
