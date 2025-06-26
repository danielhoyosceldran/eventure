import { Link } from "@inertiajs/react";
import "../../css/globalStyles.css"
import IconText from "./iconText";

import trash from "../../assets/icons/trash-white.svg";
import location from "../../assets/icons/map-pin.svg";
import user from "../../assets/icons/user.svg";


export default function CreatorEventRow({ event, handleDeleteEvent, processing }) {
    const capacityText = event.capacity ? `${event.currentParticipants}/${event.capacity}` : "(No capacity limit)";
    return (
        <div className="card mx-3 my-1">
            <div className="card-body p-0">
                <div className="row px-3">
                    <Link href={route("event.creator.show", { event_id: event.id })} className="text-decoration-none text-dark col-11 py-3 card-hover-effect">
                        <div className="row">
                            <div className="col">{event.name}</div>
                            <div className="col text-center"><IconText icon={location} text={event.location} /></div>
                            <div className="col text-end"><IconText icon={user} text={capacityText} /></div>
                        </div>
                    </Link>
                    <button
                        onClick={() => handleDeleteEvent(event.id, event.name)}
                        disabled={processing}
                        className="btn col-1 m-0 p-0 d-flex justify-content-center align-items-center btn-hover-effect"
                    >
                        <img src={trash} alt="Delete" className="img-fluid" />
                    </button>
                </div>
            </div>
        </div>
    );
}
