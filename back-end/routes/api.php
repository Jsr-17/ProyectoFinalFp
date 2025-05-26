<?php

use App\Http\Controllers\API\NoticeController;
use App\Http\Controllers\API\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'login']);
Route::post('/users/register', [UserController::class, 'store']);


Route::get('/notices', [NoticeController::class, 'index']);
