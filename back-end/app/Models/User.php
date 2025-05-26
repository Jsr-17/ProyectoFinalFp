<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $fillable = ['name', 'email', 'password', "preferences"];

    public function users()
    {
        return $this->belongsToMany(User::class, 'notice_users', 'id_notice', 'id_user');
    }
    public function preferences()
    {
        return $this->belongsToMany(
            Preferences::class,
            'preferences-user',
            'user_id',
            'preference_id'
        );
    }
}
