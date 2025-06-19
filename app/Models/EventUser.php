<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventUser extends Model
{
    use HasFactory;

    // Specify the table name explicitly as it doesn't follow Laravel's plural naming convention for Models.
    protected $table = 'event_user';

    // Disable incrementing primary key since it's a composite key, not a single 'id'.
    public $incrementing = false;

    // Define the composite primary key.
    protected $primaryKey = ['event_id', 'user_id'];

    // Ensure timestamps are handled if present in the migration (they should be).
    public $timestamps = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'event_id',
        'user_id',
    ];

    // Define relations from the pivot model (optional but good practice)
    public function event()
    {
        return $this->belongsTo(Event::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
