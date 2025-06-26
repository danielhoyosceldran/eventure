import { Link } from "@inertiajs/react";
import IconText from "./iconText";

import clock from "../../assets/icons/clock.svg";
import location from "../../assets/icons/map-pin.svg";

export default function ParticipantEventRow({ event }) {
    const dates = new Date(event.start_date).toLocaleDateString() + "-" + new Date(event.end_date).toLocaleDateString()
    return (
        <div className="card mx-3 my-1">
            <Link href={route("event.participant.show", { event_id: event.id })} className="text-decoration-none text-dark">
                <div className="card-body p-2 px-3">
                    <div className="container d-flex align-items-center justify-content-between">
                        <div className="col">
                            <h5>{event.name}</h5>
                        </div>
                        <div className="col d-flex align-items-center justify-content-end">
                            <div className="container d-flex align-items-center justify-content-end gap-4">
                                <div className=""><IconText icon={clock} text={dates} /></div>
                                <div className=""><IconText icon={location} text={event.location} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
