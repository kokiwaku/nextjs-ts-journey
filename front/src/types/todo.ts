export type TodoId = number;

export type Todo = {
  id: TodoId,
  content: string,
  created_at: string,
  updated_at: string,
}

export type TodoState = {
  searchTodoValue: string,
}