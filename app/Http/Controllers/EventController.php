<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Event; // Importa el model Event
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; // Per accedir a l'usuari autenticat
use Inertia\Inertia; // Per si redirigeixes o renderitzes una vista
use Illuminate\Http\RedirectResponse; // Per al tipus de retorn de la redirecció

class EventController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'location' => 'required|string|max:255',
            'capacity' => 'required|integer|min:1',
            //'isOpen' => 'boolean',
            // 'cover_photo' => 'nullable|image|max:2048',
        ]);


        $event = Event::create($validatedData);


        return redirect()->route('dashboard')
                         ->with('success', 'Event created successfully!');
    }
}
