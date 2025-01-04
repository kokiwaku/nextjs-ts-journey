<?php

namespace App\Http\Middleware;

use Closure;

class SetAuthTokenFromCookieMiddleware
{
    public function handle($request, Closure $next)
    {
        // すでに Authorization ヘッダーが設定されている場合は何もしない
        if ($request->hasHeader('Authorization')) {
            return $next($request);
        }

        // クッキーから JWT トークンを取得
        $token = $request->cookie('auth_token');

        if ($token) {
            // Authorization ヘッダーとしてセット
            $request->headers->set('Authorization', 'Bearer ' . $token);
        }

        return $next($request);
    }
}
