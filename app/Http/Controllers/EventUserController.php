<?php
namespace App\Http\Controllers;

use App\Models\EventUser; // Correctly imported EventUser Model
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;

class EventUserController extends Controller
{
    private function getUserEvents($user_id)
    {
        $user = User::find($user_id);
        if (!$user) {
            abort(404, 'User not found.');
        }
        $events = $user->events;

        return $events;
    }

    public function getCreatorEvents($user_id)
    {
        $events = getUserEvents($user_id);
        return Inertia::render('Dashboard', ['events' => $events]);
    }

    public function getEventUsers($event_id)
    {
        $event = Event::find($event_id);
        if (!$event) {
            abort(404, 'Event not found.');
        }
        $users = $event->users;

        return Inertia::render('EventCreator', ['participants' => $users, 'event' => $event]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validatedData = $request->validate([
            'event_id' => 'required|integer|exists:events,id',
            'user_id' => 'required|integer|exists:users,id',
        ]);


        $user = Auth::user(); // Get the authenticated user.
        $event = Event::find($validatedData['event_id']); // Find the event.

        if (!$event) {
            return redirect()->back()->with('error', 'Event not found.');
        }
        if (!$user) { // Should not happen with 'auth' middleware, but good for robustness
             return redirect()->route('login')->with('error', 'Please log in to subscribe.');
        }

        // Check if user is already subscribed
        if ($user->events->contains($event->id)) {
            return redirect()->back()->with('error', 'You are already subscribed to this event.');
        }

        // Check event capacity.
        if ($event->users->count() >= $event->capacity) {
            return redirect()->back()->with('error', 'Event is full.');
        }

        $user->events()->attach($event->id);

        return redirect()->route('events.show', ['event_id' => $event->id])
                         ->with('success', 'Successfully subscribed to the event!');
    }

    // You'll also need an 'unsubscribe' method for participants.
    public function unsubscribe(Request $request, Event $event): RedirectResponse // Using Route Model Binding
    {
        if (!Auth::check()) {
            return redirect()->route('login')->with('error', 'You must be logged in to unsubscribe.');
        }

        $user = Auth::user();

        // Check if user is actually subscribed
        if (!$user->events->contains($event->id)) {
            return redirect()->back()->with('error', 'You are not subscribed to this event.');
        }

        // Detach the user from the event
        $user->events()->detach($event->id);

        return redirect()->back()->with('success', 'Successfully unsubscribed from the event!');
    }
}
