import Todo from '@/components/molecules/Todo';
import { TodoListType } from '@/types/Todo';

type Props = {
  todoList: TodoListType | [];
};
const TodoList: React.FC<Props> = ({ todoList }) => {
  return (
    <>
      <h2>Todo List</h2>
      {todoList.length === 0 ? (
        <p>No Content.</p>
      ) : (
        <ul>
          {todoList.map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
        </ul>
      )}
    </>
  );
};

export default TodoList;
