import { EventType } from '@/types/Event';
import { TodoContentType } from '@/types/Todo';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type statesType = {
  todoContent: TodoContentType;
};
type actionsType = {
  handleSetTodoContent: EventType['onChangeInput'];
  addTodo: () => void;
};

type Props = {
  handleAddTodo: (todoContent: TodoContentType) => Promise<void>;
};
export const useTodoNewTemplate = ({ handleAddTodo }: Props) => {
  const [todoContent, setTodoContent] = useState<TodoContentType>('');
  const router = useRouter();

  const handleSetTodoContent: EventType['onChangeInput'] = (event) =>
    setTodoContent(event.target.value);

  const addTodo = async () => {
    await handleAddTodo(todoContent);
    router.push('/');
  };

  const states: statesType = {
    todoContent,
  };
  const actions: actionsType = {
    handleSetTodoContent,
    addTodo,
  };
  return [states, actions] as const;
};
