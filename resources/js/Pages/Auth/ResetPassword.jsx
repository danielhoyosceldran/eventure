import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Reset Password" />

            <form onSubmit={submit} className="w-100" style={{ maxWidth: 400, margin: '0 auto' }}>
                <div className="mb-3">
                    <InputLabel htmlFor="email" value="Email" className="form-label" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="form-control"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="text-danger mt-2" />
                </div>

                <div className="mb-3">
                    <InputLabel htmlFor="password" value="Password" className="form-label" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="form-control"
                        autoComplete="new-password"
                        isFocused={true}
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="text-danger mt-2" />
                </div>

                <div className="mb-3">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                        className="form-label"
                    />

                    <TextInput
                        type="password"
                        id="password_confirmation"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="form-control"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="text-danger mt-2"
                    />
                </div>

                <div className="d-flex justify-content-end">
                    <PrimaryButton className="btn btn-primary ms-2" disabled={processing}>
                        Reset Password
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
