import ParticipantEventRow from "@/Components/ParticipantEventRow";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function EventsHistory({ auth, events }) {
    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="h4 fw-semibold text-dark">
                    Events History
                </h2>
            }
        >
            <Head title="Events History" />
            <div className="container mt-4">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Active events</h4>
                        <ul className="list-group list-group-flush">
                            {
                                events
                                    .filter(event => new Date(event.start_date) <= new Date() && new Date(event.end_date) > new Date())
                                    .map(event => (
                                        <ParticipantEventRow
                                            key={event.id}
                                            event={event}
                                        />
                                    ))
                            }
                        </ul>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Future events</h4>
                        <ul className="list-group list-group-flush">
                            {
                                events
                                    .filter(event => new Date(event.start_date) > new Date())
                                    .map(event => (
                                        <ParticipantEventRow
                                            key={event.id}
                                            event={event}
                                        />
                                    ))
                            }
                        </ul>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Finished events</h4>
                        <ul className="list-group list-group-flush">
                            {
                                events
                                    .filter(event => new Date(event.end_date) <= new Date())
                                    .map(event => (
                                        <ParticipantEventRow
                                            key={event.id}
                                            event={event}
                                        />
                                    ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
