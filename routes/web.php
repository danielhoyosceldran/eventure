 <?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\EventController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    if (Auth::check()) {
        if (Auth::user()->role === 'creator') {
            return redirect()->route('dashboard');
        }
        else if (Auth::user()->role === 'participant') {
            return redirect()->route('events');
        }
    }

    // Si l'usuari no està autenticat (guest), o no té cap dels rols anteriors (o si falls a la lògica de dalt),
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome'); // Manté el nom de la ruta

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Gestió de les rutes per a creadors i participants
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified', 'creator'])->name('dashboard');


Route::get('/events', [EventController::class, 'showEvents'])->middleware(['auth', 'participant'])->name('events');


Route::get('/event_creator/{event_id}', [EventController::class, 'showCreatorEvent'])
    ->middleware(['auth', 'creator'])
    ->name('event.creator.show');

Route::get('/event_participant/{event_id}', [EventController::class, 'showParticipantEvent'])
    ->middleware(['auth', 'participant'])
    ->name('event.participant.show');

// Gestió del es peticions a "l'API"
Route::resource('creator/events', EventController::class)->names([
        'store' => 'creator.events.store',
        // todo: Afegir els que falten
    ]);

require __DIR__.'/auth.php';
