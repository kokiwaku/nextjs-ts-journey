import { NextRequest, NextResponse } from 'next/server';
import { validateToken } from './app/apis/authApi';

const unauthorozeAllowPath = ['/auth/login', '/auth/signup'];

export async function middleware(request: NextRequest) {
  // 認証不要なパスはスルー
  const url = new URL(request.url);
  const currentPath = url.pathname;
  if (unauthorozeAllowPath.includes(currentPath)) {
    return NextResponse.next();
  }

  // 認証
  const token = request.cookies.get('auth_token')?.value;
  if (token === undefined) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
  const response = await validateToken({ token });
  if (response.code !== 200) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
