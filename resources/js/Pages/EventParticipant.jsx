import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function EventParticipant({auht, event, isRegistered, currentParticipants}) {
    const { post: subscribePost, processing: subscribing } = useForm({});
    const { post: unsubscribePost, processing: unsubscribing } = useForm({});

    const handleSubscribe = () => {
        subscribePost(route('events.subscribe', { eventId: event.id }), {
            onSuccess: () => {
                console.log("Subscription successful");
                // Inertia recarregarà la pàgina i les props s'actualitzaran
                // (incloent `isRegistered` i `currentParticipants`)
            },
            onError: (errors) => {
                console.error("Subscription error:", errors);
                // Mostrar errors a la UI si cal
            }
        });
    };

    const handleUnsubscribe = () => {
        unsubscribePost(route('events.unsubscribe', { eventId: event.id }), {
            onSuccess: () => {
                // Inertia recarregarà la pàgina
            },
            onError: (errors) => {
                console.error("Unsubscription error:", errors);
            }
        });
    };

    // Format dates
    const start_date = event.start_date ? new Date(event.start_date).toLocaleDateString() : "Start date not specified";
    const end_date = event.end_date ? new Date(event.end_date).toLocaleDateString() : "End date not specified";

    // Check if the event has started and finished
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const eventStartDate = new Date(event.start_date);
    eventStartDate.setHours(0, 0, 0, 0);

    const eventEndDate = new Date(event.end_date);
    eventEndDate.setHours(0, 0, 0, 0);

    const eventStarted = eventStartDate <= today;
    const eventFinished = eventEndDate < today;

    const dateTextColor = eventStarted ? (eventFinished ? 'text-danger' : 'text-success') : '';

    return (
        <AuthenticatedLayout
            header={
                <h2 className="h4 fw-semibold text-dark">
                    {event.name}
                </h2>
            }
        >
            <Head title={event.name} />

            <div className="py-1">
                <div className="container">
                    <div className="card shadow-sm">
                        <div className="card-body text-dark">
                            <div style={{ position: 'relative', width: '100%', height: '40vh' }}>
                                <img
                                    src="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg"
                                    className="card-img-top mb-3"
                                    alt="..."
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        display: 'block'
                                    }}
                                />
                            </div>
                            <div className="row mt-3">
                                <div className="col-6">
                                    <div className="mb-3">
                                        <strong>Description:</strong>
                                        <div>{event?.description}</div>
                                    </div>
                                </div>
                                <div className="col-6 text-end">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="mb-3">
                                                <strong>Dates:</strong>
                                                <div
                                                    className={dateTextColor}>
                                                    {start_date} - {end_date}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="mb-3">
                                                <strong>Location:</strong>
                                                <div>{event?.location}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-6">
                                            <div className="mb-3">
                                                <strong>Capacity:</strong>
                                                <div>{currentParticipants}/{event?.capacity}</div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="mb-3">
                                                <strong>Is Open:</strong>
                                                <div>{event?.isOpen ? 'Yes' : 'No'}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="mb-3 d-flex justify-content-center">
                                <button className={`btn ${event?.isOpen ? "btn-primary" : "btn-secondary"}`} disabled={!event?.isOpen} onClick={() => console.log('Button clicked')}>
                                    Subscribre
                                </button>
                            </div> */}
                            <div className="mb-3 d-flex justify-content-center">
                                {
                                    new Date() < new Date(event.end_date) && (
                                        isRegistered ? (
                                            <button
                                                onClick={handleUnsubscribe}
                                                disabled={unsubscribing || eventStarted}
                                                className="btn btn-danger"
                                            >
                                                {unsubscribing ? 'Unsubscribing...' : 'Unsubscribe'}
                                            </button>
                                        ) : (
                                            <button
                                                onClick={handleSubscribe}
                                                disabled={subscribing || currentParticipants >= event.capacity || eventStarted}
                                                className="btn btn-success"
                                            >
                                                {subscribing ? 'Subscribing...' : (currentParticipants >= event.capacity ? 'Full' : 'Subscribe')}
                                            </button>
                                        )
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
