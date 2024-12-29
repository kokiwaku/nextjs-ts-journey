import { NextResponse, type NextRequest } from 'next/server';
import { BACK_API_ENDPOINT } from '@/constants/server';
import { Todo } from '@/types/todo';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // validate
  const { id } = await params;
  const authToken = request.cookies.get('auth_token')?.value;
  if (authToken === undefined || id === undefined) {
    return NextResponse.json([]);
  }
  const response = await fetch(`${BACK_API_ENDPOINT}/todo/${id}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  // response check
  if (!response.ok) {
    return NextResponse.json(null);
  }
  const responseJson = await response.json();
  const todo = responseJson.todo;
  if (todo === undefined) {
    return NextResponse.json([]);
  }

  const result: Todo = {
    id: todo.id,
    content: todo.content,
    created_at: todo.created_at,
    updated_at: todo.updated_at,
  };

  return NextResponse.json(result);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // validate
  const { id } = await params;
  const authToken = request.cookies.get('auth_token')?.value;
  if (authToken === undefined || id === undefined) {
    return NextResponse.json([]);
  }
  // TODO error handling
  const todoList = await fetch(`${BACK_API_ENDPOINT}/todo/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return NextResponse.json([]);
}
