'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
import { useTodo } from '@/hooks/useTodo';
import { TodoContentType, TodoIdType, TodoListType } from '@/types/Todo';

type ContextType = {
  originTodoList: TodoListType | [];
  fetchTodoList: () => Promise<void>;
  handleDeleteTodo: (todoId: TodoIdType) => Promise<void>;
  handleAddTodo: (todoContent: TodoContentType) => Promise<void>;
};
export const TodoContext = createContext({} as ContextType);

type Props = {
  children: ReactNode;
};
export const TodoProvider: React.FC<Props> = ({ children }) => {
  const { originTodoList, fetchTodoList, handleDeleteTodo, handleAddTodo } =
    useTodo();

  return (
    <>
      <TodoContext.Provider
        value={{
          originTodoList,
          fetchTodoList,
          handleDeleteTodo,
          handleAddTodo,
        }}
      >
        {children}
      </TodoContext.Provider>
    </>
  );
};

export const useTodoContext = () => useContext(TodoContext);
