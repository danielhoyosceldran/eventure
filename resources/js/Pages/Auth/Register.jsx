import Dropdown from '@/Components/Dropdown';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        role: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit} className="container mt-4" style={{maxWidth: 500}}>
                <div className="mb-3">
                    <InputLabel htmlFor="name" value="Name" className="form-label" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="form-control"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="text-danger mt-2" />
                </div>

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
                        required
                    />

                    <InputError message={errors.email} className="text-danger mt-2" />
                </div>

                <div className="mb-3">
                    <InputLabel htmlFor="role" value="Role" className="form-label" />

                    <select
                        id="role"
                        name="role"
                        value={data.role}
                        className="form-select"
                        autoComplete="role"
                        onChange={(e) => setData('role', e.target.value)}
                        required
                    >
                        <option value="">Select a role</option>
                        <option value="participant">Participant</option>
                        <option value="creator">Creator</option>
                    </select>

                    <InputError message={errors.role} className="text-danger mt-2" />
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
                        onChange={(e) => setData('password', e.target.value)}
                        required
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
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="form-control"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="text-danger mt-2"
                    />
                </div>

                <div className="mb-3 d-flex justify-content-between align-items-center">
                    <Link
                        href={route('login')}
                        className="text-decoration-underline text-secondary"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="btn btn-primary ms-2" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
