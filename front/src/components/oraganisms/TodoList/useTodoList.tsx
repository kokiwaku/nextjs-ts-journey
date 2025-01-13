import { TodoListType } from '@/types/Todo';
import { useState } from 'react';

type statesType = {
  showTodoList: TodoListType | [];
};

type Props = {
  showTodoList: TodoListType;
};
export const useTodoList = ({ showTodoList }: Props) => {
  const states: statesType = {
    showTodoList,
  };

  return [states] as const;
};
