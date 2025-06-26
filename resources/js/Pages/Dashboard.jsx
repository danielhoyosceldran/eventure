import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import CreatorEventRow from '@/Components/CreatorEventRow';

import { Head, Link, useForm } from '@inertiajs/react';

export default function Dashboard( {events} ) {
    const { delete: destroy, processing } = useForm({});

    const handleDeleteEvent = (eventId, eventName) => {
        if (confirm(`Are you sure you want to delete the event "${eventName}"? This action cannot be undone.`)) {
            destroy(route('creator.events.destroy', { event: eventId }), {
                onSuccess: () => {
                    console.log('Event deleted successfully!');
                },
                onError: (formErrors) => {
                    console.error('Error deleting event:', formErrors);
                },
            });
        }
    };


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
                    <div className="card shadow-sm pt-3">
                        {
                            events.map((event) => (
                                <CreatorEventRow
                                    key={event.id}
                                    event={event}
                                    handleDeleteEvent={handleDeleteEvent}
                                    processing={processing}
                                />
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
