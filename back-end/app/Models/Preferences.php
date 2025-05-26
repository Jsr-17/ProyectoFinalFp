<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Preferences extends Model
{
    protected $fillable = ['name'];
    public function preferences()
    {
        return $this->belongsToMany(User::class);
    }
}
