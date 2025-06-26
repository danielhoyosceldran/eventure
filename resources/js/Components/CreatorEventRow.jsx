import { Link } from "@inertiajs/react";
import trash from "../../assets/icons/trash-white.svg";
import "../../css/globalStyles.css"

export default function CreatorEventRow({ event, handleDeleteEvent, processing }) {
    return (
        <div className="card mx-3 my-1">
            <div className="card-body">
                <div className="row">
                    <Link href={route("event.creator.show", { event_id: event.id })} className="text-decoration-none text-dark col-11">
                        <div className="row">
                            <div className="col">{event.name}</div>
                            <div className="col text-center">{event.location}</div>
                            <div className="col text-end">{event.currentParticipants}/{event.capacity}</div>
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
