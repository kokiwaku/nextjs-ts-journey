<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
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
            return response()->json(['error' => $validator->errors()], status: 400);
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

        $response = response()->json(['user' => $user], 200);
        $response->cookie('auth_token', $token, 60, '/', null, false, true);

        return $response;
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

        // 認証成功
        return response()->json(null, 204);
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

        $response = response()->json()->cookie('auth_token', $token, 60, '/', null, false, true);
        return $response;
    }

     /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getUser()
    {
        return response()->json(['user' => Auth::getUser()]);
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
