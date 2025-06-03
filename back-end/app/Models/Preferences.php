<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Preferences extends Model
{
    protected $fillable = ['name'];
    public function users()
    {
        return $this->belongsToMany(
            Preferences::class,
            'preferences-user',
            'user_id',
            'preference_id'
        );
    }
}
