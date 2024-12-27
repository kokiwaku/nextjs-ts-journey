<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TodoController;
use App\Http\Middleware\AuthMiddleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// 全て要認証
Route::prefix('todo')->middleware([AuthMiddleware::class])->group(function () {
    Route::get('/', [TodoController::class, 'getList']);
    Route::post('/', [TodoController::class, 'create']);
    Route::get('/{id}', [TodoController::class, 'get']);
    Route::delete('/{id}', [TodoController::class, 'delete']);
});

// 認証route
Route::prefix('auth')->group(function () {
    // 認証不要
    Route::POST('validate_token', [AuthController::class, 'validateToken']);
    Route::POST('login', [AuthController::class, 'login']);
    Route::POST('logout', [AuthController::class, 'logout']);
    Route::POST('register', [AuthController::class, 'register']);
    // 認証必要
    Route::middleware([AuthMiddleware::class])->group(function () {
        Route::POST('refresh', [AuthController::class, 'refresh']);
        Route::POST('user', [AuthController::class, 'getUser']);
    });
});