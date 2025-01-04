<?php

use App\Http\Middleware\SetAuthTokenFromCookieMIddleware;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        api: __DIR__ . '/../routes/api.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->api(append: [
            SetAuthTokenFromCookieMIddleware::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        $exceptions->render(function (Exception $e, Request $request) {
            $code = $e->getCode();
            $statusCode = match (true) {
                $code >= 200 && $code < 600 => $code,
                default => 500,
            };
            return response()->json(data: ['error' => $e->getMessage()], status: $statusCode);
        });
    })->create();
