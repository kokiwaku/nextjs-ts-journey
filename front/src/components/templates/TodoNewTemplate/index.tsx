'use client';

import { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import TodoLayout from '@/components/oraganisms/TodoLayout';
import CommonButton from '@/components/atoms/CommonButton';
import InputForm from '@/components/atoms/InputForm';
import { addTodo } from '@/app/apis/todoApi';

const TodoNewTemplage: NextPage = () => {
  const [todoContent, setTodoContent] = useState('');
  const router = useRouter();

  const handleAddTodo = async () => {
    await addTodo(todoContent);
    router.push('/');
  };

  return (
    <>
      <TodoLayout title="Add Todo">
        <div>
          <h2>Add Todo</h2>
          <InputForm
            type="text"
            value={todoContent}
            onChange={(e) => setTodoContent(e.target.value)}
          />
        </div>
        <div className="m-1">
          <CommonButton title="Submit" onClick={handleAddTodo} />
        </div>
      </TodoLayout>
    </>
  );
};

export default TodoNewTemplage;
