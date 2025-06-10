<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; // Per accedir a l'usuari autenticat
use Symfony\Component\HttpFoundation\Response;

class CreatorMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        // 1. Comprova si hi ha un usuari autenticat
        // 2. Comprova si el rol de l'usuari autenticat és 'creator'
        if (Auth::check() && Auth::user()->role === 'creator') {
            // Si és un 'creator', permet que la petició continuï al següent middleware o al controlador
            return $next($request);
        }

        // Si no és un 'creator' (o no està autenticat), redirigeix o avorta
        // Pots redirigir al dashboard amb un missatge, a la pàgina de login, o mostrar un error 403
        //return redirect('/dashboard')->with('error', 'Accés denegat. Només els creadors poden accedir a aquesta secció.');
        return abort(403, 'Only participants can acces here.');
    }
}
