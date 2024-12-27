<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $params = $request->all();
        $validator = Validator::make($params, [
            'name' => 'required|string',
            'email' => 'required|string|max:255',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json(['erros' => $validator->errors()], status: 400);
        }

        $user = User::create([
            'email' => $params['email'],
            'name' => $params['name'],
            'password' => Hash::make($params['password']),
        ]);

        $credentials = [
            'email' => $params['email'],
            'password' => $params['password'],
        ];
        $token = Auth::attempt(credentials: $credentials);

        return response()->json(['user' => $user, 'token' => $token], 200);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function validateToken()
    {
        try {
            $user = Auth::authenticate();
        } catch (AuthenticationException $e) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        // 認証成功: ユーザー情報を返す
        return response()->json([
            'user' => $user,
        ]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        try {
            $token = Auth::attempt($credentials);
            if (! $token) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }
        } catch (Exception $e) {
            return response()->json(['error' => 'Cloud not create token'], 501);
        }
        return response()->json(compact('token'));
    }

     /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getUser()
    {
        return response()->json(Auth::getUser());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        Auth::invalidate(Auth::getToken());

        return response()->json(['message' => 'Successfully logged out']);
    }

}
