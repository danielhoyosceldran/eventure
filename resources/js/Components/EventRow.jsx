import { Link } from "@inertiajs/react";

export default function EventRow({ event }) {
    return (
        <Link href={route("event.creator.show", { event_id: event.id })} className="text-decoration-none text-dark">
            <div className="card m-3">
                <div className="card-body">
                    <div className="row">
                        <div className="col">{event.name}</div>
                        <div className="col text-center">{event.location}</div>
                        <div className="col text-end">{event.capacity}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
