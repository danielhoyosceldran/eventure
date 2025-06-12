 <?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    // Si l'usuari està autenticat...
    if (Auth::check()) {
        // I el seu rol és 'creator'...
        if (Auth::user()->role === 'creator') {
            return redirect()->route('dashboard'); // Redirigeix al dashboard de creador
        }
        // I el seu rol és 'participant' (o qualsevol altre rol que no sigui 'creator')...
        else if (Auth::user()->role === 'participant') { // Pots posar un 'else' simple si només tens 2 rols
            return redirect()->route('events'); // Redirigeix a la llista d'esdeveniments per a participants
        }
    }

    // Si l'usuari no està autenticat (guest), o no té cap dels rols anteriors (o si falls a la lògica de dalt),
    // Renderitza la pàgina de benvinguda normalment.
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome'); // Manté el nom de la ruta

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified', 'creator'])->name('dashboard');

Route::get('/events', function () {
    return Inertia::render('Events');
})->middleware(['auth', 'participant'])->name('events');

Route::get('/event_creator', function () {
    return Inertia::render('EventCreator');
})->middleware(['auth', 'participant'])->name('events.creator');

Route::get('/event_participant', function () {
    return Inertia::render('EventParticipant');
})->middleware(['auth', 'participant'])->name('event.participant');

Route::get('/event_creator', function () {
    return Inertia::render('EventCreator');
})->middleware(['auth', 'creator'])->name('event.creator');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
