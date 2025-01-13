import { TodoType } from '@/types/Todo';
import CommonButton from '@/components/atoms/CommonButton';
import styled from 'styled-components';
import { useTodo } from './useTodo';
import { useTodoContext } from '@/context/TodoContext';

const StyledTodoItem = styled.li`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.1rem;
`;
const StyledTodoContent = styled.div`
  width: 10%;
`;
const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
const Todo: React.FC<{ todo: TodoType }> = ({ todo }) => {
  const { handleDeleteTodo } = useTodoContext();
  const [{ showTodoDetail, deleteTodo }] = useTodo({ handleDeleteTodo });
  return (
    <>
      <StyledTodoItem>
        <StyledTodoContent>{todo.content}</StyledTodoContent>
        <StyledButtonGroup>
          <CommonButton
            title="detail"
            onClick={() => showTodoDetail(todo.id)}
          />
          <CommonButton
            title="delete"
            onClick={() => deleteTodo(todo.id)}
            buttonStyle="delete"
          />
        </StyledButtonGroup>
      </StyledTodoItem>
    </>
  );
};

export default Todo;
