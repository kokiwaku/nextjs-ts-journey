'use client';

import { FC, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { FRONT_API_ENDPOINT } from '@/constants/server';
import { Todo } from '@/types/todo';
import BaseLayout from '@/components/oraganisms/BaseLayout';

const TopDetailTemplate: FC = () => {
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
            <div className="todo-container">
              <table>
                <tbody>
                  <tr>
                    <th>ID：</th>
                    <td>{todo.id}</td>
                  </tr>
                  <tr>
                    <th>Content：</th>
                    <td>{todo.content}</td>
                  </tr>
                  <tr>
                    <th>Created At：</th>
                    <td>{todo.created_at}</td>
                  </tr>
                  <tr>
                    <th>Updated At：</th>
                    <td>{todo.updated_at}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <h3>No Content.</h3>
        )}
      </BaseLayout>
    </>
  );
};

export default TopDetailTemplate;
