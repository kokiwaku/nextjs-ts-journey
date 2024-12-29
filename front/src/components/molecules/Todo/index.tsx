'use client';

import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { Todo as TodoType, TodoId } from '@/types/todo';
import { FRONT_API_ENDPOINT } from '@/constants/server';
import CommonButton from '@/components/atoms/CommonButton';
import styled from 'styled-components';

const StyledTodoItem = styled.li`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;
const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
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
      <StyledTodoItem>
        {todo.content}
        <StyledButtonGroup>
          <CommonButton title="detail" onClick={() => handleDetail(todo.id)} />
          <CommonButton
            title="delete"
            onClick={() => handleDelete(todo.id)}
            buttonStyle="delete"
          />
        </StyledButtonGroup>
      </StyledTodoItem>
    </>
  );
};

export default Todo;
