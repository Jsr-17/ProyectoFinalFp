<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Notice extends Model
{
    protected $fillable = ["description", "type"];
    public function notices()
    {
        return $this->belongsToMany(Notice::class, 'notice_users', 'id_user', 'id_notice');
    }
}
