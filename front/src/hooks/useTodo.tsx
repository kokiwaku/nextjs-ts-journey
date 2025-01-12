import { useState } from 'react';
import { TodoContentType, TodoIdType, TodoListType } from '@/types/Todo';
import { addTodo, deleteTodo, getTodoList } from '@/app/apis/todoApi';

export const useTodo = () => {
  const [originTodoList, setOriginTodoList] = useState<TodoListType | []>([]);

  // todo listを取得
  const fetchTodoList = async (): Promise<void> => {
    const response = await getTodoList();
    const todoList = response.data?.todoList ?? [];
    setOriginTodoList(todoList);
  };

  // todo を削除
  type handleDeleteTodoType = (todoId: TodoIdType) => Promise<void>;
  const handleDeleteTodo: handleDeleteTodoType = async (todoId) => {
    await deleteTodo(todoId);

    // 削除後のリストを再取得
    fetchTodoList();
  };

  // todo 追加
  type handleAddTodoType = (todoContent: TodoContentType) => Promise<void>;
  const handleAddTodo: handleAddTodoType = async (todoContent) => {
    await addTodo(todoContent);

    // 追加後のリストを再取得
    fetchTodoList();
  };

  return {
    originTodoList,
    fetchTodoList,
    handleDeleteTodo,
    handleAddTodo,
  };
};
