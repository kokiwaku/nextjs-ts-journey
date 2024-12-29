'use client';

import { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { FRONT_API_ENDPOINT } from '@/constants/server';
import BaseLayout from '@/components/oraganisms/BaseLayout';
import CommonButton from '@/components/atoms/CommonButton';

const TodoNewTemplage: NextPage = () => {
  const [todoContent, setTodoContent] = useState('');
  const router = useRouter();

  const handleAddTodo = async () => {
    // TODO add
    const response = await fetch(`${FRONT_API_ENDPOINT}/todo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: todoContent }),
    });
    // redirect to Home
    router.push('/');
  };

  return (
    <>
      <BaseLayout title="Add Todo">
        <div>
          <h2>Add Todo</h2>
          <input
            type="text"
            value={todoContent}
            onChange={(e) => setTodoContent(e.target.value)}
          />
        </div>
        <div className="m-1">
          <CommonButton title="Submit" onClick={handleAddTodo} />
        </div>
      </BaseLayout>
    </>
  );
};

export default TodoNewTemplage;
