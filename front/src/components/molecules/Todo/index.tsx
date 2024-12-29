'use client';

import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { Todo as TodoType, TodoId } from '@/types';
import { FRONT_API_ENDPOINT } from '@/constants/server';

// TODO Delete時にTodoListを再fetchするために親からfetchTodoListを渡している構成をやめたい
const Todo: React.FC<{ todo: TodoType; fetchTodoList: Function }> = ({
  todo,
  fetchTodoList,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleDetail = (todoId: TodoId): void => {
    // redirect to DetailTodo
    router.push(`/todo/${todoId}`);
  };

  const handleDelete = async (todoId: TodoId) => {
    await fetch(`${FRONT_API_ENDPOINT}/todo/${todoId}`, {
      method: 'DELETE',
    });
    await fetchTodoList();
    router.push('/');
  };
  return (
    <>
      <li>
        {todo.content}
        <button
          className="detailTodoBtn m-1"
          onClick={() => handleDetail(todo.id)}
        >
          detail
        </button>
        <button
          className="deleteTodoBtn m-1"
          onClick={() => handleDelete(todo.id)}
        >
          delete
        </button>
      </li>
    </>
  );
};

export default Todo;
