<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id(); // Columna ID auto-incrementable (clau primària)
            $table->string('name'); // Nom de l'esdeveniment
            $table->text('description'); // Descripció de l'esdeveniment
            $table->dateTime('start_date'); // Data i hora d'inici
            $table->dateTime('end_date')->nullable(); // Data i hora de finalització (pot ser nul·la)
            $table->string('location'); // Lloc de l'esdeveniment
            $table->integer('capacity')->unsigned(); // Nombre de places disponibles (sense negatius)
            $table->boolean('isOpen')->default(true); // Indica si les inscripcions estan obertes (per defecte a true)
            $table->string('cover_image')->nullable(); // Ruta de la imatge de portada (pot ser nul·la)
            $table->timestamps(); // Columnes `created_at` i `updated_at` automàtiques
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('events'); // Elimina la taula `events` si es desfà la migració
    }
};
