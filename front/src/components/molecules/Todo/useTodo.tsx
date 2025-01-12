import { useRouter } from 'next/navigation';
import { TodoIdType } from '@/types/Todo';

type actionsType = {
  showTodoDetail: (todoId: TodoIdType) => void;
  deleteTodo: (todoId: TodoIdType) => void;
};

type Props = {
  handleDeleteTodo: (todoId: TodoIdType) => Promise<void>;
};
export const useTodo = ({ handleDeleteTodo }: Props) => {
  const router = useRouter();

  const showTodoDetail: actionsType['showTodoDetail'] = (todoId) => {
    router.push(`/todo/${todoId}`);
  };

  const deleteTodo: actionsType['deleteTodo'] = async (todoId) => {
    deleteTodo(todoId);
    router.push('/');
  };

  const actions = {
    showTodoDetail,
    deleteTodo,
  };
  return [actions];
};
