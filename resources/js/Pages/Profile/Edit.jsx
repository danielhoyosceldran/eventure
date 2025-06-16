import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="h4 fw-semibold text-dark">
                    Profile
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="py-5">
                <div className="container">
                    <div className="mb-4 card shadow-sm">
                        <div className="card-body">
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className="w-100"
                            />
                        </div>
                    </div>

                    <div className="mb-4 card shadow-sm">
                        <div className="card-body">
                            <UpdatePasswordForm className="w-100" />
                        </div>
                    </div>

                    <div className="mb-4 card shadow-sm">
                        <div className="card-body">
                            <DeleteUserForm className="w-100" />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
