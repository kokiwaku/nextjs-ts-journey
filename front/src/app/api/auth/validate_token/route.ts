import { NextResponse, type NextRequest } from 'next/server';
import { BACK_API_ENDPOINT } from '@/constants/server';
import { AuthUserType } from '@/types/Auth';

export async function POST(request: NextRequest) {
  const json = await request.json();
  const token = json.auth_token ?? null;
  const response = await fetch(`${BACK_API_ENDPOINT}/auth/validate_token`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
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
  const result: AuthUserType = {
    id: user['id'],
    name: user['name'],
    email: user['email'],
    created_at: user['created_at'],
    updated_at: user['updated_at'],
  };

  return NextResponse.json(result);
}
