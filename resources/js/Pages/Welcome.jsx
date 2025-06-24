import { Head, Link } from "@inertiajs/react";
import "../../css/welcome_grid.css";
import "../../css/globalStyles.css";
import ApplicationLogo from "@/Components/ApplicationLogo";

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
                            <div className="welcome_photo_container w-100 vh-100 p-2">
                                <div className="welcome_photo1">
                                    <img className="rounded image-in-container" src="https://images.unsplash.com/photo-1750459273768-f2c1018ba69d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="event photo" />
                                </div>
                                <div className="welcome_photo2">
                                    <img className="rounded image-in-container" src="https://images.unsplash.com/photo-1750440982726-d723eab666a5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="event photo" />
                                </div>
                                <div className="welcome_photo3">
                                    <img className="rounded image-in-container" src="https://plus.unsplash.com/premium_photo-1749747537947-5f118ee03528?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="event photo" />
                                </div>
                                <div className="welcome_photo4">
                                    <img className="rounded image-in-container" src="https://images.unsplash.com/photo-1750337295808-09145bb6b1f2?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="event photo" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                            <ApplicationLogo className="mb-5" style={{ width: 560 }}/>
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
