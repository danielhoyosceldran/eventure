import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="h5 mb-2 text-dark">
                    Profile Information
                </h2>

                <p className="mb-3 text-muted">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-4">
                <div className="mb-3">
                    <InputLabel htmlFor="name" value="Name" className="form-label" />

                    <TextInput
                        id="name"
                        className="form-control"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2 text-danger" message={errors.name} />
                </div>

                <div className="mb-3">
                    <InputLabel htmlFor="email" value="Email" className="form-label" />

                    <TextInput
                        id="email"
                        type="email"
                        className="form-control"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2 text-danger" message={errors.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div className="mb-3">
                        <p className="text-secondary">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="btn btn-link btn-sm p-0 ms-2"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 text-success fw-medium">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="d-flex align-items-center gap-3">
                    <PrimaryButton disabled={processing} className="btn btn-primary">Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition fade"
                        enterFrom="opacity-0"
                        leave="transition fade"
                        leaveTo="opacity-0"
                    >
                        <p className="text-success mb-0">
                            Saved.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
