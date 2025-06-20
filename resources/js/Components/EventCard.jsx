import { Link } from '@inertiajs/react';
import { useEffect } from 'react';

//todo: Fer que els events siguin dinàmics i que es carreguin des de la base de dades
export default function EventCard({event}) {
    useEffect(() => {
        console.log(event);
    }
, [event]);
    return (
        <div className="col-lg-4 col-md-6 p-3 d-flex align-items-center justify-content-center">
            <div className="card w-100">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp" className="card-img-top" style={{height: "100px"}} alt="Grand canyon"/>
                <div className="card-body">
                    <h5 className="card-title d-flex justify-content-between align-items-center">
                        {event.name}
                        <span className="badge bg-success">Available</span>
                    </h5>
                    <p className="card-text text-muted" style={{fontSize: "0.9rem"}}>
                        {event.description || "No description available for this event."}
                    </p>
                    <ul className="list-inline mb-0 text-muted small d-flex justify-content-between">
                        <li className="list-inline-item me-3">
                            <i className="bi bi-people"></i> {event.capacity || "Capacity not specified"}
                        </li>
                        <li className="list-inline-item me-3">
                            <i className="bi bi-calendar-event"></i> {
                                    event.start_date ? new Date(event.start_date).toLocaleDateString() : "Start date not specified"
                                } - {
                                    event.end_date ? new Date(event.end_date).toLocaleDateString() : "End date not specified"
                                }
                        </li>
                        <li className="list-inline-item">
                            <i className="bi bi-geo-alt"></i> {event.location || "Location not specified"}
                        </li>
                    </ul>
                    <Link
                    href={route("event.participant.show", { event_id: event.id })}
                    className="btn btn-primary stretched-link block ml-auto mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-fit"
                >
                    Event information
                </Link>
                </div>
            </div>
        </div>
    );
}
