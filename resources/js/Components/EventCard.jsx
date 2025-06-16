import { Link } from '@inertiajs/react';
export default function EventCard({redirectTo}) {
    return (
        <div className="col-4 border p-3 d-flex align-items-center justify-content-center">
            <div className="card w-75">
                <img src="https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?q=80&w=1541&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" style={{height: "100px"}} alt="Grand canyon"/>
                <div className="card-body">
                    <h5 className="card-title d-flex justify-content-between align-items-center">
                        Title
                        <span className="badge bg-success">Available</span>
                    </h5>
                    <p className="card-text text-muted" style={{fontSize: "0.9rem"}}>
                        Short description of only one row large to engage the visitors and…
                    </p>
                    <ul className="list-inline mb-0 text-muted small d-flex justify-content-between">
                        <li className="list-inline-item me-3">
                            <i className="bi bi-people"></i> 20
                        </li>
                        <li className="list-inline-item me-3">
                            <i className="bi bi-calendar-event"></i> 15/08/25 - 30/08/25
                        </li>
                        <li className="list-inline-item">
                            <i className="bi bi-geo-alt"></i> Grand canyon
                        </li>
                    </ul>
                    <Link
                    href={redirectTo}
                    className="btn btn-primary stretched-link block ml-auto mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-fit"
                >
                    Event information
                </Link>
                </div>
            </div>
        </div>
    );
}
