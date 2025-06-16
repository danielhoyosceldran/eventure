import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import EventCard from '@/Components/EventCard';
import { Head, Link } from '@inertiajs/react';

export default function Events() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Events
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <EventCard redirectTo={route("event.participant")} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

