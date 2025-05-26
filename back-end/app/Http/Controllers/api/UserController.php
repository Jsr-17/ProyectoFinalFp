<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class UserController extends Controller
{
    public function index()
    {
        return response()->json(["Response" => "Hola internauta"]);
    }
    public function login(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email',
            'pass' => 'required|min:6',
        ]);

        $user = User::where('email', $validated['email'])->first();

        if (!$user) {
            return response()->json(['message' => 'Credenciales inválidas'], 401);
        }
        if (Hash::check($validated['pass'], $user->pass)) {
            return response()->json(['message' => 'Login exitoso', "id" => $user->id], 200);
        }

        return response()->json(['message' => 'Credenciales inválidas'], 401);
    }

    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            "name" => "required",
            "email" => "required|email",
            "pass" => "required|string|min:8",

        ]);

        if ($validator->fails()) {
            $data = [
                "message" => "Error en la validación de los datos",
                "errors" => $validator->errors(),
                "status" => 400
            ];
            return response()->json($data, 400);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            "pass" => "required|string|min:8",

        ]);


        if (!$user) {
            $data = [
                "message" => "Error al crear el usuario",
                "status" => 500
            ];
            return response()->json($data, 500);
        }


        $data = [
            "user" => $user,
            "status" => 201,
        ];
        return response()->json($data, 201);
    }
}
