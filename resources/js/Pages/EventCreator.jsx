import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function EventCreator({event, currentParticipants}) {
    const { data, setData, post, patch, processing, errors, reset } = useForm({
        name: event?.name || '', // Usa optional chaining i fallback a ''
        description: event?.description || '',
        start_date: event?.start_date ? new Date(event.start_date).toISOString().slice(0, 16) : '', // Format per datetime-local
        end_date: event?.end_date ? new Date(event.end_date).toISOString().slice(0, 16) : '',
        location: event?.location || '',
        capacity: event?.capacity || '',
        isOpen: event?.isOpen ?? true, // Usa nullish coalescing per a valors booleans o per defecte
    });

        useEffect(() => {
            console.log(data.isOpen);
        }, [data.isOpen]);
        const submit = (e) => {
            e.preventDefault();

            console.log('Submitting event data:', data);

            if (event == null) {
                post(route('creator.events.store'), {
                    onSuccess: () => {
                        console.log('Event created successfully!');
                        reset();
                    },
                    onError: (formErrors) => {
                        console.error('Error creating event:', formErrors);
                    },
                    // Si al final incloc fotos:
                    // forceFormData: true,
                });
            } else {
                patch(route('creator.events.update', { event: event.id }), {
                    onSuccess: () => {
                        console.log('Event updated successfully!');
                    },
                    onError: (formErrors) => {
                        console.error('Error updating event:', formErrors);
                    },
                });
            }
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
                                    <InputLabel htmlFor="name" value="Title" className="form-label" />

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

                                <div className="mb-3">
                                    <InputLabel htmlFor="isOpen" value="Is Open" className="form-label" />
                                    <input
                                        id="isOpen"
                                        type="checkbox"
                                        name="isOpen"
                                        checked={data.isOpen}
                                        onChange={(e) => setData('isOpen', e.target.checked)}
                                    />
                                    <InputError message={errors.isOpen} className="text-danger mt-2" />
                                </div>

                                <div className="mb-3 d-flex justify-content-between align-items-center">
                                    <PrimaryButton className="btn btn-primary ms-2" disabled={false} onClick={() => window.history.back()}>
                                        Cancel
                                    </PrimaryButton>
                                    <PrimaryButton className="btn btn-primary ms-2" disabled={processing}>
                                        {event ? 'Update Event' : 'Create Event'}
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
