import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import EventRow from '@/Components/EventRow';

import { Head, Link } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Dashboard( {events} ) {
    useEffect(() => {
        console.log(events);
    }, [events]);
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
                        {
                            events.map((event) => (
                                <EventRow key={event.id} event={event} />
                            ))
                        }
                        <Link href={route("event.creator.show", { event_id: "create_event" })} className="btn btn-primary m-3">
                            Create Event
                        </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
