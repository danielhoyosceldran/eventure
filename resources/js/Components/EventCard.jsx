import { Link } from '@inertiajs/react';

export default function EventCard({redirectTo}) {
    return (
        <div className="w-full md:w-1/3 p-3 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-md w-11/12">
                <img src="https://images.unsplash.com/photo-1749731630653-d9b3f00573ed?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-t-lg object-cover w-full h-24" alt="Grand canyon" />
                <div className="p-4">
                    <h5 className="flex justify-between items-center text-lg font-semibold mb-2">
                        Grand canyon expedition
                        <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded">Available</span>
                    </h5>
                    <p className="text-gray-500 text-sm mb-3">
                        Short description of only one row large to engage the visitors and…
                    </p>
                    <ul className="flex justify-between text-gray-400 text-xs mb-0">
                        <li className="flex items-center mr-4">
                            <i className="bi bi-people mr-1"></i> 20
                        </li>
                        <li className="flex items-center mr-4">
                            <i className="bi bi-calendar-event mr-1"></i> 15/08/25 - 30/08/25
                        </li>
                        <li className="flex items-center">
                            <i className="bi bi-geo-alt mr-1"></i> Grand canyon
                        </li>
                    </ul>
                    <Link
                        href={redirectTo}
                        className="btn btn-primary block ml-auto mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-fit"
                    >
                        Event information
                    </Link>
                </div>
            </div>
        </div>
    );
}
