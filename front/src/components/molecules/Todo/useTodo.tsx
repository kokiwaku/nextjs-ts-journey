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
    await handleDeleteTodo(todoId);
    router.refresh(); // ページを更新してTodoリストを再取得
  };

  const actions = {
    showTodoDetail,
    deleteTodo,
  };
  return [actions];
};
