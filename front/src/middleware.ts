import { NextRequest, NextResponse } from 'next/server';

// サーバー側で現在のパスを使いたいので設置している
// https://github.com/vercel/next.js/issues/43704#issuecomment-1411186664
export function middleware(request: NextRequest) {

  // Store current request path in a custom header, which you can read later
  const url = new URL(request.url);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', url.pathname);

  return NextResponse.next({
    request: {
      // Apply new request headers
      headers: requestHeaders,
    }
  });
}