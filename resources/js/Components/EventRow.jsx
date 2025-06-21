import { Link } from "@inertiajs/react";

export default function EventRow({ event, handleDeleteEvent, processing }) {
    return (
        <div className="card mx-3 my-1">
                <div className="card-body">
                    <div className="row">
                        <button
                            onClick={() => handleDeleteEvent(event.id, event.name)}
                            disabled={processing}
                            className="btn btn-danger btn-sm col-1"
                        >
                            {processing ? 'Deleting...' : 'Delete'}
                        </button>
                        <Link href={route("event.creator.show", { event_id: event.id })} className="text-decoration-none text-dark col-11">
                            <div className="row">
                                <div className="col">{event.name}</div>
                                <div className="col text-center">{event.location}</div>
                                <div className="col text-end">{event.currentParticipants}/{event.capacity}</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
    );
}
