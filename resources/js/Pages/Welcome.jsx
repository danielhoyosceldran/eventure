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
            <nav className="navbar navbar-expand">
                {auth.user ? (
                    <Link
                        href={route("dashboard")}
                        className="btn btn-primary me-2"
                    >
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <Link
                            href={route("login")}
                            className="btn btn-outline-primary me-2"
                        >
                            Log in
                        </Link>
                        <Link
                            href={route("register")}
                            className="btn btn-primary"
                        >
                            Register
                        </Link>
                    </>
                )}
            </nav>
        </>
    );
}
