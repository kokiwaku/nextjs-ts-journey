'use client';

import { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import TodoLayout from '@/components/oraganisms/TodoLayout';
import CommonButton from '@/components/atoms/CommonButton';
import InputForm from '@/components/atoms/InputForm';
import { useTodoContext } from '@/context/TodoContext';
import { useTodoNewTemplate } from './useTodoNewTemplate';

const TodoNewTemplage: NextPage = () => {
  const { handleAddTodo } = useTodoContext();
  const [{ todoContent }, { handleSetTodoContent, addTodo }] =
    useTodoNewTemplate({
      handleAddTodo,
    });

  return (
    <>
      <TodoLayout title="Add Todo">
        <div>
          <h2>Add Todo</h2>
          <InputForm
            type="text"
            value={todoContent}
            onChange={handleSetTodoContent}
          />
        </div>
        <div className="m-1">
          <CommonButton title="Submit" onClick={addTodo} />
        </div>
      </TodoLayout>
    </>
  );
};

export default TodoNewTemplage;
