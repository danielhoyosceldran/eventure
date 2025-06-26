import { Link } from '@inertiajs/react';
import "../../css/eventCard.css";
import "../../css/globalStyles.css";
import placeholderImages from "../../placeholderAssets/data";
import IconText from './iconText';

import description from "../../assets/icons/align-left.svg";
import location from "../../assets/icons/map-pin.svg";
import user from "../../assets/icons/user.svg";
import clock from "../../assets/icons/clock.svg";


export default function EventCard({event}) {
    const start_date = event.start_date ? new Date(event.start_date).toLocaleDateString() : "Start date not specified";
    const end_date = event.end_date ? new Date(event.end_date).toLocaleDateString() : "End date not specified";

    return (
        <Link
            href={route("event.participant.show", { event_id: event.id })}
            className="text-decoration-none text-dark col-lg-4 col-md-6 p-3 "
        >
            <div className="d-flex align-items-center justify-content-center event-card-container">
                <div className="event-card w-100">
                    <img
                        src={placeholderImages[event.id % placeholderImages.length]}
                        className="card-img-top image-in-container" style={{height: "160px"}}
                        alt="Grand canyon"
                    />
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <h5 className="mb-0 text-truncate w-75">
                                {event.name}
                            </h5>
                            <p className={`card-text open-close-tag ${event.isOpen ? 'event-open' : 'event-close'}`} style={{fontSize: "0.9rem"}}>
                                {event.isOpen ? "Open" : "Closed"}
                            </p>
                        </div>
                        <p className="card-text text-muted w-100" style={{fontSize: "0.9rem"}}>
                            <IconText text={event.description || "No description available for this event."} icon={description} textClassName='text-truncate' />
                        </p>
                        <ul className="list-inline mb-0 text-muted small d-flex justify-content-start">
                            <li className="list-inline-item me-3">
                                <IconText text={event.capacity || "Capacity not specified"} icon={user} />
                            </li>
                            <li className="list-inline-item me-3">
                                <IconText text={start_date + " - " + end_date} icon={clock} />
                            </li>
                            <li className="list-inline-item">
                                <IconText text={event.location || "Location not specified"} icon={location} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Link>
    );
}
