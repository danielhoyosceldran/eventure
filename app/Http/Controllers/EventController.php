<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;

class EventController extends Controller
{
    // showEvent functions.
    // Hauria de millorar això perquè tinc separat  el participant i el creador de l'esdeveniment. Hauria de poder recuperar
    // la informació de l'esdeveniment.
    public function showParticipantEvent($event_id)
    {
       $event =Event::find($event_id);
       if (!$event) {
            abort(404);
        }

        $isRegistered = false;
        if (Auth::check()) {
            $isRegistered = Auth::user()->events->contains($event->id);
        }

        return Inertia::render('EventParticipant', [
            'event' => $event,
            'isRegistered' => $isRegistered,
            'currentParticipants' => $event->users ? max($event->users->count() - 1, 0) : 0
        ]);
    }

    public function showHistoryEvents()
    {
        $user = Auth::user();
        if (!$user || $user->role !== 'participant') {
            abort(403, 'Unauthorized action.');
        }

        $events = $user->events()->get();

        return Inertia::render('EventsHistory', ['events' => $events]);
    }

    public function showCreatorEvent($event_id)
    {
        $event = $event_id === "create_event" ? null : Event::find($event_id);

        return Inertia::render('EventCreator', ['event' => $event]);
    }

    public function showEvents()
    {
        $events = Event::all();

        return Inertia::render('Events', ['events' => $events]);
    }

    public function showCreatorEvents() {
        $user = Auth::user();
        if (!$user || $user->role !== 'creator') {
            abort(403, 'Unauthorized action.');
        }

        $events = $user->events; // Assuming the User model has a relationship with Event

        $events = $events->map(function ($event) {
            $currentParticipants = $event->users ? max($event->users->count() - 1, 0) : 0;
            $event->currentParticipants = $currentParticipants;
            return $event;
        });

        return Inertia::render('Dashboard', ['events' => $events]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'location' => 'required|string|max:255',
            'capacity' => 'required|integer|min:1',
            'isOpen' => 'boolean',
            // 'cover_photo' => 'nullable|image|max:2048',
        ]);

        // Afegeix els camps que falten
        // Ho faig aquí perquè no vull que, en cap cas, el creador pugui
        // canviar aquests camps des del formulari.
        $validatedData['creator_id'] = Auth::id();
        $validatedData['creator_name'] = Auth::user()->name;


        $event = Event::create($validatedData);

        $user = Auth::user();
        if ($user) {
            $event->users()->attach($user->id);
        }

        return redirect()->route('dashboard')
                         ->with('success', 'Event created successfully!');
    }

    public function update(Request $request, Event $event): RedirectResponse
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'location' => 'required|string|max:255',
            'capacity' => 'required|integer|min:1',
            'isOpen' => 'boolean', // Si es pot canviar des del formulari
            // 'cover_photo' => 'nullable|image|max:2048',
        ]);

        $event->update($validatedData); // Actualitza l'esdeveniment

        return redirect()->route('dashboard')
                         ->with('success', 'Event updated successfully!');
    }

    public function destroy(Event $event): RedirectResponse
    {
        $event->delete();

        return redirect()->route('dashboard')
                         ->with('success', 'Event deleted successfully!');
    }
}
