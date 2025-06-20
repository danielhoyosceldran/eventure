import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import EventCard from '@/Components/EventCard';
import { Head, Link } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Events({ events }) {
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
                        <div className="row">
                            {
                                events.map((event) => {
                                    return (
                                        <EventCard
                                            key={event.id}
                                            event={event}
                                        />
                                    );
                                }
                            )}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
