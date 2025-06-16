import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { useRef } from 'react';

export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="h5 mb-2">
                    Update Password
                </h2>

                <p className="mb-3 text-muted">
                    Ensure your account is using a long, random password to stay secure.
                </p>
            </header>

            <form onSubmit={updatePassword} className="mt-4">
                <div className="mb-3">
                    <InputLabel
                        htmlFor="current_password"
                        value="Current Password"
                        className="form-label"
                    />

                    <TextInput
                        id="current_password"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(e) =>
                            setData('current_password', e.target.value)
                        }
                        type="password"
                        className="form-control"
                        autoComplete="current-password"
                    />

                    <InputError
                        message={errors.current_password}
                        className="text-danger mt-1"
                    />
                </div>

                <div className="mb-3">
                    <InputLabel htmlFor="password" value="New Password" className="form-label" />

                    <TextInput
                        id="password"
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        type="password"
                        className="form-control"
                        autoComplete="new-password"
                    />

                    <InputError message={errors.password} className="text-danger mt-1" />
                </div>

                <div className="mb-3">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                        className="form-label"
                    />

                    <TextInput
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        type="password"
                        className="form-control"
                        autoComplete="new-password"
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="text-danger mt-1"
                    />
                </div>

                <div className="d-flex align-items-center gap-3">
                    <PrimaryButton disabled={processing} className="btn btn-primary">Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="fade"
                        enterFrom="opacity-0"
                        leave="fade"
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
