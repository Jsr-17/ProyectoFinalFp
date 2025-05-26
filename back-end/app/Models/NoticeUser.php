<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NoticeUser extends Model
{
    protected $fillable = ["id_user", "id_notice"];
}
