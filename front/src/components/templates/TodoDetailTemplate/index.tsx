'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { FRONT_API_ENDPOINT } from '@/constants/server';
import { Todo } from '@/types/todo';
import BaseLayout from '@/components/oraganisms/BaseLayout';
import TodoDetail from '@/components/oraganisms/TodoDetail';

const TopDetailTemplate: React.FC = () => {
  const [todo, setTodo] = useState<Todo | null>(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const todoId = params.id;

  const handelfetchTodoDetail = async () => {
    const response = await fetch(`${FRONT_API_ENDPOINT}/todo/${todoId}`);
    const todo = await response.json();
    setTodo(todo);
    setLoading(false);
  };

  useEffect(() => {
    handelfetchTodoDetail();
  }, []);

  if (loading) {
    return (
      <>
        <BaseLayout title="Detail">
          <h3>Now Loading...</h3>
        </BaseLayout>
      </>
    );
  }

  return (
    <>
      <BaseLayout title="Detail">
        {todo !== null ? (
          <>
            <TodoDetail todo={todo} />
          </>
        ) : (
          <h3>No Content.</h3>
        )}
      </BaseLayout>
    </>
  );
};

export default TopDetailTemplate;
