import { Link } from "@inertiajs/react";

export default function ParticipantEventRow({ event }) {
    return (
        <div className="card mx-3 my-1">
            <Link href={route("event.participant.show", { event_id: event.id })} className="text-decoration-none text-dark">
                <div className="card-body p-2 px-3">
                    <div className="row d-flex align-items-center">
                        <div className="col">
                            <h5>{event.name}</h5>
                        </div>
                        <div className="col text-end">{new Date(event.start_date).toLocaleDateString()} - {new Date(event.end_date).toLocaleDateString()}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
