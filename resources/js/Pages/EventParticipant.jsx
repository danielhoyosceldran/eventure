import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function EventParticipant() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="h4 fw-semibold mb-0 text-dark">
                    Event
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-5">
                <div className="container">
                    <div className="card shadow-sm">
                        <div className="card-body text-dark">
                            You're logged in as a participant!
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
