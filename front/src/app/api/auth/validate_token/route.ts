import { NextResponse, type NextRequest } from 'next/server';
import { BACK_API_ENDPOINT } from "@/constants/server";
import { AuthState, AuthUser } from '@/types/auth';

export async function POST(request: NextRequest) {
  const json = await request.json();
  const token = json.authToken ?? null;
  const response = await fetch(`${BACK_API_ENDPOINT}/auth/validate_token`, {
    'method': 'POST',
    headers: {
      "Authorization": `Bearer ${token}`
    },
  });

  // response check
  if (!response.ok) {
    return NextResponse.json(null);
  }
  const responseJson = await response.json();
  const user = responseJson?.user;
  if (user === undefined) {
    return NextResponse.json(null);
  }
  const result: AuthUser = {
    id: user['id'],
    name: user['name'],
    email: user['email'],
  };

  return NextResponse.json(result);
};