import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("d-none");
        document.getElementById("docs-card")?.classList.add("row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("flex-row");
        document.getElementById("background")?.classList.add("d-none");
    };

    return (
        <>
            <Head title="Welcome" />
            {auth.user ? (
                // Mai entrarà aquí
                    <Link
                        href={route("dashboard")}
                        className="btn btn-primary me-2"
                    >
                        Dashboard
                    </Link>
                ) : (
                    <div className="row w-100 vh-100">
                        <div className="col-6">

                        </div>
                        <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                            <Link
                            href={route("login")}
                            className="btn btn-outline-primary w-75 mb-3"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route("register")}
                                className="btn btn-primary w-75"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                )}
        </>
    );
}
