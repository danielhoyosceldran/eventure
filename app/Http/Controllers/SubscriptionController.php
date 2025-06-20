<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;

class SubscriptionController extends Controller
{
    public function subscribe(Request $request, string $eventId): RedirectResponse
    {
        if (!Auth::check()) {
            return redirect()->route('login')->with('error', 'You must be logged in to subscribe.');
        }

        $user = Auth::user();

        // Cerca l'esdeveniment per la ID. Si no es troba, redirigeix amb error.
        $event = Event::find($eventId);
        if (!$event) {
            return redirect()->back()->with('error', 'Event not found.');
        }

        // Comprova si l'usuari ja està inscrit.
        if ($user->events->contains($event->id)) {
            return redirect()->back()->with('error', 'You are already subscribed to this event.');
        }

        if ($event->users->count() >= $event->capacity) {
            return redirect()->back()->with('error', 'Event is full.');
        }

        $user->events()->attach($event->id);


        return redirect()->route('events', ['event_id' => $event->id])->with('success', 'Successfully subscribed!');
    }

    public function unsubscribe(Request $request, string $eventId): RedirectResponse
    {
        if (!Auth::check()) {
            return redirect()->route('login')->with('error', 'You must be logged in to unsubscribe.');
        }

        $user = Auth::user();

        // Cerca l'esdeveniment per la ID. Si no es troba, redirigeix amb error.
        $event = Event::find($eventId);
        if (!$event) {
            return redirect()->back()->with('error', 'Event not found.');
        }

        // Comprova si l'usuari està realment inscrit.
        if (!$user->events->contains($event->id)) {
            return redirect()->back()->with('error', 'You are not subscribed to this event.');
        }

        $user->events()->detach($event->id);

        return redirect()->route('events', ['event_id' => $event->id])->with('success', 'Successfully unsubscribed!');
    }
}
