import { NextResponse, type NextRequest } from 'next/server';
import { BACK_API_ENDPOINT } from '@/constants/server';
import { Todo } from '@/types/todo';

export async function POST(
  request: NextRequest,
  { params }: { params: { email: string; password: string } }
) {
  const json = await request.json();
  const response = await fetch(`${BACK_API_ENDPOINT}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(json),
  });

  // response check
  if (!response.ok) {
    return NextResponse.json(null);
  }
  const responseJson = await response.json();
  const token = responseJson.token ?? null;
  if (!token) {
    return NextResponse.json(null);
  }

  // Create the response and set the cookie
  const responseWithCookie = NextResponse.json({
    message: 'login successfully',
  });

  // Set cookie (HttpOnly, Secure for production, Path, and MaxAge)
  responseWithCookie.cookies.set('auth_token', token, {
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return responseWithCookie;
}
