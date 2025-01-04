'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Todo } from '@/types/todo';
import TodoLayout from '@/components/oraganisms/TodoLayout';
import TodoDetail from '@/components/oraganisms/TodoDetail';
import { getTodoDetail } from '@/app/apis/todoApi';

const TopDetailTemplate: React.FC = () => {
  const [todo, setTodo] = useState<Todo | null>(null);
  const [loading, setLoading] = useState(true);

  const params = useParams() as { id: string };
  const todoId = params.id;

  const handelfetchTodoDetail = async () => {
    const response = await getTodoDetail(todoId);
    const todo = response.data?.todo;
    if (response.code === 200 && todo !== undefined) {
      setTodo(todo);
    }
    setLoading(false);
  };

  useEffect(() => {
    handelfetchTodoDetail();
  }, []);

  if (loading) {
    return (
      <>
        <TodoLayout title="Detail">
          <h3>Now Loading...</h3>
        </TodoLayout>
      </>
    );
  }

  return (
    <>
      <TodoLayout title="Detail">
        {todo !== null ? (
          <>
            <TodoDetail todo={todo} />
          </>
        ) : (
          <h3>No Content.</h3>
        )}
      </TodoLayout>
    </>
  );
};

export default TopDetailTemplate;
