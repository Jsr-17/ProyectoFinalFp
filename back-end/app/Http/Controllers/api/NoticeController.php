<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NoticeController extends Controller
{
    public function index()
    {
        return response()->json(["Response" => "Hola internauta"]);
    }
}
