<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    // todo: add all fields
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'description',
        'start_date',
        'end_date',
        'location',
        'capacity',
        'isOpen',
        //'cover_photo', // Assegura't que el camp cover_photo estigui aquí si el vols gestionar
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'start_date' => 'datetime',
        'end_date' => 'datetime',
        //'isOpen' => 'boolean', // És bona pràctica fer cast de booleans
    ];

    // Si ja has definit la migració event_user, afegeix la relació Many-to-Many amb usuaris
    public function users()
    {
        return $this->belongsToMany(User::class, 'event_user')->withTimestamps();
    }
}
