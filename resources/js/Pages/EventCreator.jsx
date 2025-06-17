import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';

export default function EventCreator({event}) {
    const { data, setData, post, processing, errors, reset } = useForm(event === null ? {
            name: '',
            description: '',
            start_date: '',
            end_date: '',
            location: '',
            capacity: '',
            //isOpen: true, // todo: fer dinàmic
        } : {
            name: 'Pepito',
            description: '',
            start_date: '',
            end_date: '',
            location: '',
            capacity: '',
            //isOpen: true, // todo: fer dinàmic
        });

        const submit = (e) => {
            e.preventDefault();

            post(route('creator.events.store'), {
                onSuccess: () => {
                    console.log('Event created successfully!');
                    reset(); // Neteja el formulari
                    // La redirecció ja la gestiona el controlador de Laravel.
                    // Inertia recarregarà la pàgina automàticament.
                },
                onError: (formErrors) => {
                    // Acció a realitzar si hi ha errors de validació o altres errors
                    console.error('Error creating event:', formErrors);
                    // `errors` de useForm ja conté els errors per a mostrar-los al costat dels camps del formulari
                },
                // Si inclous fitxers (com cover_photo), afegeix:
                // forceFormData: true,
            });
        };
    return (
        <AuthenticatedLayout
            header={
                <h2 className="h4 fw-semibold text-dark">
                    Event
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-5">
                <div className="container">
                    <div className="card shadow-sm">
                        <div className="card-body text-dark">
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

                                {/* todo: Fer afegir el límit de caràcters que posa al controlador. Fer per a tots els inputs */}
                                <div className="mb-3">
                                    <InputLabel htmlFor="description" value="Description" className="form-label" />

                                    <TextInput
                                        id="description"
                                        type="description"
                                        name="description"
                                        value={data.description}
                                        className="form-control"
                                        autoComplete="username"
                                        onChange={(e) => setData('description', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.description} className="text-danger mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="start_date" value="Start date" className="form-label" />
                                    <input
                                        id="start_date"
                                        type="datetime-local" // Aquest tipus és bo per 'dateTime' a Laravel
                                        value={data.start_date}
                                        onChange={(e) => setData('start_date', e.target.value)}
                                        required
                                    />
                                    {errors.start_date && <div>{errors.start_date}</div>}
                                </div>

                                <div>
                                    <InputLabel htmlFor="end_date" value="End date" className="form-label" />
                                    <input
                                        id="end_date"
                                        type="datetime-local" // Aquest tipus és bo per 'dateTime' a Laravel
                                        value={data.end_date}
                                        onChange={(e) => setData('end_date', e.target.value)}
                                        required
                                    />
                                    {errors.end_date && <div>{errors.end_date}</div>}
                                </div>

                                <div className="mb-3">
                                    <InputLabel htmlFor="location" value="Location" className="form-label" />

                                    <input
                                        id="location"
                                        name="location"
                                        value={data.location}
                                        className="form-control"
                                        onChange={(e) => setData('location', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.location} className="text-danger mt-2" />
                                </div>

                                <div className="mb-3">
                                    <InputLabel htmlFor="capacity" value="Capacity" className="form-label" />

                                    <TextInput
                                        id="capacity"
                                        type="number"
                                        name="capacity"
                                        value={data.capacity}
                                        className="form-control"
                                        autoComplete="new-password"
                                        onChange={(e) => setData('capacity', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.capacity} className="text-danger mt-2" />
                                </div>

                                {/* todo: isOpen input */}


                                <div className="mb-3 d-flex justify-content-between align-items-center">
                                    <PrimaryButton className="btn btn-primary ms-2" disabled={true}>
                                        Cancel
                                    </PrimaryButton>
                                    <PrimaryButton className="btn btn-primary ms-2" disabled={processing}>
                                        Create
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
