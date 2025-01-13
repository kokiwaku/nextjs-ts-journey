import { NextResponse, type NextRequest } from 'next/server';
import { BACK_API_ENDPOINT } from '@/constants/server';
import { Todo } from '@/types/Todo';

export async function GET(request: NextRequest) {
  // validate
  const authToken = request.cookies.get('auth_token')?.value;
  if (authToken === undefined) {
    return NextResponse.json([]);
  }

  // request
  const response = await fetch(`${BACK_API_ENDPOINT}/todo`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  const responseJson = await response.json();
  const todoList = responseJson.todo;

  const result: Todo = todoList.map((todo: any) => {
    return {
      id: todo.id,
      content: todo.content,
      created_at: todo.created_at,
      updated_at: todo.updated_at,
    };
  });
  return NextResponse.json(result);
}

export async function POST(request: NextRequest) {
  // validate
  const authToken = request.cookies.get('auth_token')?.value;
  if (authToken === undefined) {
    return NextResponse.json(null);
  }

  const { content } = await request.json();
  const response = await fetch(`${BACK_API_ENDPOINT}/todo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify({ content }),
  });

  if (!response.ok) {
    return NextResponse.json(null);
  }

  const todo = await response.json();

  const result: Todo = {
    id: todo.id,
    content: todo.content,
    created_at: todo.created_at,
    updated_at: todo.updated_at,
  };

  return NextResponse.json(result);
}
