export type TodoIdType = number;
export type TodoContentType = string;

export type TodoType = {
  id: TodoIdType;
  content: TodoContentType;
  created_at: string;
  updated_at: string;
};

export type TodoListType = TodoType[];

export type TodoState = {
  searchTodoValue: string;
};

export type TodoResponseType = {
  todo: TodoType;
};
export type TodoListResponseType = {
  todoList: TodoType[];
};
