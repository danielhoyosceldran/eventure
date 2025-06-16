import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import EventCard from '@/Components/EventCard';
import { Head, Link } from '@inertiajs/react';

export default function Events() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="h4 fw-semibold text-dark">
                    Events
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-5">
                <div className="container">
                    <div className="card shadow-sm">
                        <div className="card-body bg-light">
                            <EventCard redirectTo={route("event.participant.show", { event_id: "sample_id" })} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
