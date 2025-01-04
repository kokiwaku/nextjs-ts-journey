import { NextResponse, type NextRequest } from 'next/server';
import { signUp } from '@/app/apis/authApi';

export async function POST(
  request: NextRequest,
  { params }: { params: { email: string; name: string; password: string } }
) {
  // request
  const json = await request.json();
  const response = await signUp(json.email, json.password);

  // response check
  if (response.code !== 200 || response.data === undefined) {
    return NextResponse.json(
      { error: response.message },
      { status: response.code }
    );
  }

  // Create the response and set the cookie
  const responseWithCookie = NextResponse.json({
    message: 'User registered successfully',
  });

  // Set cookie (HttpOnly, Secure for production, Path, and MaxAge)
  responseWithCookie.cookies.set('auth_token', response.data.auth_token, {
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return responseWithCookie;
}
